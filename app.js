var app = angular.module("RecipesController", []);
//app.controller("MainController", function(){
app.controller("BigNest", function ($scope) {
    $scope.name = "Peter";
    $scope.user = { name: "Parker" };
});

app.controller("LittleNest", function ($scope) {
});

app.directive("myWidget", function () {
    return {
        restrict: "AE",
        transclude: true,
        template: "<div ng-transclude><h3>Transcluded Heading</h3></div>"
    };
});
//})