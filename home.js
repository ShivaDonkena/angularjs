(function () {
'use strict';
var selectedtab=0;
var names,obj;
  var cbValues = new Array();
  var cbmarks = new Array();
  var index,selectedName,hindi,telugu,english,maths,science,social;
  var selectedName;
  var totalmarks=0;
    var MyApp=angular.module('MyApp',['ngCookies','ngMaterial'])
    MyApp.controller('AppCtrl',['$scope','$http', '$cookies', '$cookieStore', '$window','$mdDialog',function($scope,$http, $cookies, $cookieStore, $window, $mdDialog) {
        var studentdata={"studentname":"Shyam Kumar","rollnumber":"1","class":"5th","section":"A","gender":"Male","fathername":"Ravi","mothername":"ramya","dateofbirth":"02/09/2010","dateofjoin":"08/06/2013",
"admission":"456","caste":"oc","religion":"hindu","address":"hyderabad","studentphone":"213123123","fatherphone":"767897897"};
$scope.studentdata=studentdata;
$scope.selectedtab=selectedtab;
$scope.selectedName=selectedName;
$http.get("http://sonutech.comuv.com/schooldetails.php?username="+"ram"+"&password="+"ram")
      .then(function(response){
        names=response.data;
        obj =angular.fromJson(names);
        console.log(obj.result);
    });

    for(var i=0;i<50;i++)
    {
      cbValues.push("false");
      cbmarks.push("false");
    }
    cbValues=$cookieStore.get('flower');
    $scope.cbValues=cbValues;
    console.log(cbValues+"");


   var exams=["UNITTEST1","UNITTEST2","QUATERLYEXAMINATION","HALFYEARLYEXAMINATION","ANNUAlEXAMINATION"];
   $scope.exams=exams;
    $scope.cbValues=cbValues;
    $scope.cbmarks=cbmarks;
    $scope.setattendence=function()
    {
      $scope.cbValues=cbValues;
      $cookieStore.put('flower',cbValues);
    }


		var jsons = new Array();
$scope.data=function()
  {
    $http.get("http://sonutech.comuv.com/schooldetails.php?username="+$scope.stuusername+"&password="+$scope.stupassword)
          .then(function(response){
                console.log(response);
        });
    $cookieStore.put('studentpassword',  $scope.stupassword);
    $cookieStore.put('studnetusername', $scope.stuusername);
    selectedtab=7;
    $scope.selectedtab=selectedtab;
    console.log(selectedtab);
  }
  $scope.data1=function()
    {

      $cookieStore.put('teacherpassword',  $scope.teapassword);
      $cookieStore.put('teacherusername', $scope.teausername);
      selectedtab=7;
      $scope.selectedtab=selectedtab;
      console.log(selectedtab);

    }

    $scope.showUpdate= function (index,selectedName,hindi,telugu,english,maths,science,social){
      console.log("Roll Number"+index+" Test: "+selectedName);
      $scope.index=index;
      totalmarks=0;
      $scope.totalmarks=totalmarks
      $scope.selectedName=selectedName;
      			var newScope = $scope.$new();
      			$mdDialog.show({
      							  templateUrl: '/create.product.tmp.html',
      							  scope: newScope,
      							  parent: angular.element(document.body),
      							  targetEvent: event,
      							  clickOutsideToClose:true,
      							  fullscreen: false // Only for -xs, -sm breakpoints.
      							});
    }
      $scope.cancel = function() {
		      $mdDialog.cancel();
		    };
      $scope.create=function(x) {
        console.log(x.length+"ds");
        totalmarks=parseInt(x.hindi)+parseInt(x.telugu)+parseInt(x.english)+parseInt(x.maths)+parseInt(x.science)+parseInt(x.social);
          $scope.totalmarks=totalmarks;
console.log(totalmarks);
      }
          $scope.totalmarks=totalmarks;
}]);

   })();
