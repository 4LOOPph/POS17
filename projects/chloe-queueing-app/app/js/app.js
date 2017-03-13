(function() {
    'use strict';

    angular.module('starter', ['ionic'])
        .run(['$ionicPlatform', function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                    // Don't remove this line unless you know what you are doing. It stops the viewport
                    // from snapping when text inputs are focused. Ionic handles this internally for
                    // a much nicer keyboard experience.
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        }])
        .controller('appCtrl', ['$scope', '$timeout','$interval', function($scope, $timeout,$interval) {
            console.log('appCtrl');
            $scope.interval = null;

            function pad(num, size) {
                var s = num + "";
                while (s.length < size) s = "0" + s;
                return s;
            }

            $scope.initApp = function(){
                $timeout(function() {
                    $scope.items = [];
                    for (var i = 0; i < 30; ++i) {
                        $scope.items.push({
                            isReady: false,
                            number: pad(i + 1, 2)
                        })
                    }
                }, 100);
            };

            $scope.interval = $interval(function(){
                $scope.initApp();
            },10000);


        }])
        .directive('animateOnLoad', ['$animateCss', function($animateCss) {
            return {
                'link': function(scope, element) {
                    $animateCss(element, {
                        'event': 'enter',
                        structural: true
                    }).start();
                }
            };
        }]);

})();
