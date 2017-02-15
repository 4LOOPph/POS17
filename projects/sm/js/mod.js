jQuery(document).ready(function($) {

    //Add button
    $("#submitArea").append('<div class="btnSubmitForm btn btn-primary"><span>SUBMIT</span></div>');

    //Regexp validation on keyup
    var rgxp_blank = "^\\s+$";
    var rgxp_num_only_iii = /^(\s*|\d+)$/;
    var rgxp_num_dec = /^(?=.*\d)\d*(?:\.\d\d)?$/;
    var rgxp_address = /^[a-zA-Z0-9,.!? ]*$/;
    var rgxp_phone_num = /^[\s()+-]*([0-9,][\s()+-]*){0,128}$/;
    var rgxp_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function urlBase64Decode(str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0:
                {
                    break;
                }
            case 2:
                {
                    output += '==';
                    break;
                }
            case 3:
                {
                    output += '=';
                    break;
                }
            default:
                {
                    throw 'Illegal base64url string!';
                }
        }
        return decodeURIComponent(escape(window.atob(output)));
    }

    function decodeToken(token) {
        var parts = token.split('.');

        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }

        var decoded = urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    }

    function getTokenExpirationDate(token) {
        var decoded;
        decoded = decodeToken(token);
        if (typeof decoded.exp === "undefined") {
            return null;
        }

        var d = new Date(0); // The 0 here is the key, which sets the date to the epoch
        d.setUTCSeconds(decoded.exp);
        return d;
    }

    function isTokenExpired(token, offsetSeconds) {
        var d = getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (d === null) {
            return false;
        }

        var isExpired = !(d.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
        // Token expired?
        return isExpired;
    }

    //SYMPHONY
    var access_code = '356959848506224'; // Symphony Access Key (Sushi Train)
    var access_key = 'r55V0pP3OWwtkmepHRmQ5hfPpbCwF3fU'; // Symphony Access Key (Sushi Train)
    var username = 'sushi lastname';
    var password = '8XZWaLNN';
    var token = sessionStorage.getItem('sm.token');

    if (token == null) {
        $.ajax({
            url: "http://54.206.38.223:5002/api/1.0/session",
            type: "POST",
            headers: { "accesskey": access_key },
            data: {
                username: username,
                password: password
            },
            cache: false,
            success: function(response) {
                console.log('login response: ', response);
                if (response.success) {
                    sessionStorage.setItem('sm.token', response.result.token);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert('Unexpected server error');
            }
        });
    } else {
        var checkTokenExpired = isTokenExpired(token);
        if (checkTokenExpired) {
            $.ajax({
                url: "http://54.206.38.223:5002/api/1.0/session",
                type: "POST",
                headers: { "accesskey": access_key },
                data: {
                    username: username,
                    password: password
                },
                cache: false,
                success: function(response) {
                    console.log('login response: ', response);
                    if (response.success) {
                        sessionStorage.setItem('sm.token', response.result.token);
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert('Unexpected server error');
                }
            });
        }
    }

    function fn_regexp_chk(a, b) {
        if (!b.test(a.val())) {
            a.next("i.error").removeClass("hide");
            a.next("i.error").next().removeClass("hide");
        } else {
            a.next().removeClass("hide").addClass("hide");
            a.next("i.error").next().addClass("hide");
        }
    }

    $(document).on("keyup", function(event) {
        var in_chk = $(event.target);
        var rgxp_var = in_chk.attr("rgxp");
        if (event.target.type === "text") {
            if (typeof rgxp_var !== typeof undefined && rgxp_var !== false) {
                if (in_chk.attr("rgxp") === "rgxp_address") {
                    console.log("TRUE");
                    fn_regexp_chk(in_chk, rgxp_address);
                } else if (in_chk.attr("rgxp") === "rgxp_phone_num") {
                    fn_regexp_chk(in_chk, rgxp_phone_num);
                } else if (in_chk.attr("rgxp") === "rgxp_num_only_iii") {
                    fn_regexp_chk(in_chk, rgxp_num_only_iii);
                } else if (in_chk.attr("rgxp") === "rgxp_num_dec") {
                    fn_regexp_chk(in_chk, rgxp_num_dec);
                }
            }
        } else if (event.target.type === "email") {
            if (typeof rgxp_var !== typeof undefined && rgxp_var !== false) {
                if (in_chk.attr("rgxp") === "rgxp_email") {
                    fn_regexp_chk(in_chk, rgxp_email);
                }
            }
        }
        if ($("i.error").is(":visible")) {
            $(".btnSubmitForm").find("span").css({ opacity: "0.3" });
        } else {
            $(".btnSubmitForm").find("span").css({ opacity: "1" });
        }
    });

    $('form').find('input').each(function() {
        var in_chk = $(this);
        var rgxp_var = in_chk.attr("rgxp");
        if ($(this).prop('required') && $(this).val() !== "") {
            if (typeof rgxp_var !== typeof undefined && rgxp_var !== false) {
                if (in_chk.attr("rgxp") === "rgxp_address") {
                    fn_regexp_chk(in_chk, rgxp_address);
                } else if (in_chk.attr("rgxp") === "rgxp_phone_num") {
                    fn_regexp_chk(in_chk, rgxp_phone_num);
                } else if (in_chk.attr("rgxp") === "rgxp_num_only_iii") {
                    fn_regexp_chk(in_chk, rgxp_num_only_iii);
                } else if (in_chk.attr("rgxp") === "rgxp_num_dec") {
                    fn_regexp_chk(in_chk, rgxp_num_dec);
                } else if (in_chk.attr("rgxp") === "rgxp_email") {
                    fn_regexp_chk(in_chk, rgxp_email);
                }
            }
        }
    });

    //Responsive
    var $window = $(window),
        $document = $(document),
        $logoArea = $(".logoArea"),
        $formArea = $(".formArea");

    function fn_bootstrapColY() {
        if ($window.width() < 768) {
            $logoArea.css({ height: "inherit" });
            $formArea.css({ height: "inherit" });
        } else {
            $logoArea.css({ height: $window.height() });
            $formArea.css({ height: $window.height() });
        }
    }
    fn_bootstrapColY();

    //ON RESIZE
    var rtime;
    var timeout = false;
    var delta = 100;

    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            //FUNCTION HERE
            fn_bootstrapColY();
        }
    }

    $(window).resize(function() {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });

    //Form Submission Failed
    $("button.back").on("click", function() {
        $(".successArea").fadeOut("fast");
        $('.btnSubmitForm').fadeIn("fast");
    });


    //Form Submit, note there is no submit button on this layout (modifications may be required)
    $btnSubmitForm = $(".btnSubmitForm");
    $btnSubmitForm.on("click", function() {

        //RECAPTCHA
        //var recaptcha = grecaptcha.getResponse();

        //Validate input
        var i = 0;
        //alert(recaptcha);
        if (!$("i.error").is(":visible")) {
            $("input.regoIn").each(function() {
                if ($(this).prop('required') && $(this).val() === "") {
                    $(this).focus();
                    $(this).next("i.error").removeClass("hide");
                    i = 1;
                    return false;
                } else {
                    i = 0;
                }
            });
            if ( i === 0 /*&& recaptcha.length*/ ) {
              $(".btnSubmitForm span").remove();
              $(".btnSubmitForm").append('<img src="assets/loaderCustom.gif" />');
              //$(".btnSubmitForm").append('<span>SUBMIT</span>');
              $.ajax({
                  url: "http://54.206.38.223:5002/api/1.0/persons",
                  type: "POST",
                  headers: {
                      accesskey: access_key,
                      Authorization: 'Bearer ' + sessionStorage.getItem('sm.token')
                  },
                  data: {
                      lastname: $('#inLName').val(),
                      firstname: $('#inFName').val(),
                      middlename: $('#inMInitial').val(),
                      email: $('#inEmail').val(),
                      mobile: $('#inContactNum').val(),
                      per_type_id: 2,
                      company_name: $('#inCName').val()
                      //captcha: recaptcha
                  },
                  cache: false,
                  success: function(data) {
                      if (data.statusCode == 200 && data.response.success) {
                          //Success in form submission
                          $(".successArea").fadeIn("fast");
                          $(".btnSubmitForm").fadeOut("fast");
                      }
                  },
                  error: function(XMLHttpRequest, textStatus, errorThrown) {
                    //alert('Unexpected server error');
                    $(".successArea").fadeIn("fast");
                    $(".regoSuccess").addClass("hide");
                    $(".regoErr").removeClass("hide");
                    $(".btnSubmitForm img").remove();
                    //$(".btnSubmitForm").append('<img src="assets/loaderCustom.gif" />');
                    $(".btnSubmitForm").append('<span>SUBMIT</span>');
                    //alert(grecaptcha.getResponse());
                  }
              });
            } /*else if ( !recaptcha.length ) {
                alert('Answer the Recaptcha.');
            }*/
        } else {
            $("form").find("i.error:visible").prev("input").focus();
        }

    });
});
