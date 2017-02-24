var app=angular.module("myapp",[])
app.controller("mycontroller",function($scope,$http)
{
  $scope.values;
  $scope.name="shiva";
var numbers=[{name :"raasdsdmu", age:21,branch:"cse"},
{name :"Ravi", age:21,branch:"cse"},
{name :"Samsdspath", age:21,branch:"ecee"}];
$scope.numbers=numbers;
var a= function()
{
  console.log("sdsd");
  return "shiva";
}
$scope.checked="true";
$http.get("http://sonutech.comuv.com/signup.php")
 .then(function(response) {
     $scope.myWelcome = response.data;
 });
});
