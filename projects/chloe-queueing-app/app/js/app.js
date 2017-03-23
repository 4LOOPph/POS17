(function() {
    'use strict';

    angular.module('starter', [
            'ionic',
            'angularMoment',
            'btford.socket-io'
        ])
        .constant('baseURL', 'http://54.206.38.223:5006')
        // .constant('baseURL', 'http://localhost:3000')
        .factory('io', ['$window', function($window) {
            return $window.io; // assumes socket.io has already been loaded on the page
        }])
        .factory('moment', ['$window', function($window) {
            return $window.moment; // assumes socket.io has already been loaded on the page
        }])
        .controller('appCtrl', ['$scope', '$timeout', '$interval', 'mySocket', '$window', function($scope, $timeout, $interval, mySocket, $window) {
            console.log('appCtrl');
            $scope.interval = null;
            $scope.items = [];

            function pad(num, size) {
                var s = num + "";
                while (s.length < size) s = "0" + s;
                return s;
            }


            mySocket.on('connect', function() {
                console.log('connected....');

                mySocket.emit('register:device', 'Chloe');

                mySocket.on('sendto:Que', function(data) {
                    var result = _.find($scope.items, { 'tableno': data.tableno });
                    if (result) {
                        if (data.done) {
                            $scope.items = _.reject($scope.items, { 'tableno': result.tableno });
                        } else if (data.serve) {
                            _.each($scope.items, function(row) {
                                if (row.tableno == data.tableno) {
                                    row.isServe = data.serve;
                                    row.isDone = data.done;
                                }
                            });
                        }
                    } else {
                        $scope.items.push({
                            isServe: data.serve,
                            isDone: data.done,
                            tableno: data.tableno,
                            datetime: data.datetime
                        });
                    }
                    $window.localStorage.setItem('kitchen_queue', JSON.stringify($scope.items));
                });
            });

            $scope.initApp = function() {
                var items = JSON.parse($window.localStorage.getItem('kitchen_queue')) || [];
                if (!_.isEmpty(items)) {
                    $scope.items = items;
                }
            };
        }])
        .factory('mySocket', function(socketFactory, io, baseURL) {
            var myIoSocket = io.connect(baseURL);
            var socket = socketFactory({
                ioSocket: myIoSocket
            });
            return socket;
        })
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
