var myApp = angular.module("myApp", []);

myApp.controller("MainCtrl", function($scope){
	$scope.vehicle =[
         {
        	brand:"BMW",
        	model:"M3 convertible",
        	release:"2014"
         },
         {
        	 brand:"Honda",
        	 model:"CR-Z",
        	 release:"2013"
         },
         {
        	 brand:"BMW",
        	 model:"BMW X6 M",
        	 release:"2013"
         },
         {
        	 brand:"Suzuki",
        	 model:"Swift",
        	 release:"2010"
         }
	     ]
});