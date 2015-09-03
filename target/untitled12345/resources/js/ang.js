/**
 * Created by ivsi on 9/2/2015.
 */

var app = angular.module('myApp', []);

app.controller("AppController", function ($scope, $http, $interval) {

    $interval(function getNewDataAndAppendToFeedArray() {
        $http.get('http://localhost:8080/untitled12345/api/oldest/5').
            success(function (data, status, headers, config) {
                $scope.tweets = data;
            }).
            error(function (data, status, headers, config) {
                alert("Error");
            });
    }, 5000);

});


