var app=angular.module('myapp', [])
var names;
    app.controller('mycontroller', function($scope,$http) {
      $scope.names;
      $http.get("http://sonutech.comuv.com/login.php")
       .then(function (response) {
         names=response.data;
         obj =angular.fromJson(names);
       });
        this.register = function($http) {
          for(var i=0;i<obj.result.length;i++)
           if(this.user.username==obj.result[0].username&&this.user.password==obj.result[0].password)
           console.log("loged in");
           else {
             console.log("wrong details");
           }
        };
    });
    var app = angular.module("sinup",[]);
     app.controller("signupcontroller", function($scope, $http){
          $scope.insertData = function(){
               $http.post(
                    "signup.php",
                    {'email':$scope.email,'firstname':$scope.firstname, 'lastname':$scope.lastname,'password':$scope.password,'phonenumber':$scope.phonenumber}
               ).success(function(data){
                    alert(data);
                    $scope.email=null;
                    $scope.firstname = null;
                    $scope.lastname = null;
                    $scope.password=null;
                    $scope.phonenumber=null;
               });
          }
     });
