var app=angular.module("myapp",[])
app.controller("mycontroller",function($scope)
{
  $scope.values;
  $scope.name="shiva";
var numbers=[{name :"Ramu", age:21,branch:"cse"},
{name :"Ravi", age:21,branch:"cse"},
{name :"Sampath", age:21,branch:"ecee"}];
$scope.numbers=numbers;
});
