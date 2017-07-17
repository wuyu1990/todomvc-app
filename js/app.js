(function (angular) {
	'use strict';
	angular
	.module("myApp",[])
	.controller("TodeController",["$scope",TodeCont])
	// Your starting point. Enjoy the ride!
	function TodeCont($scope){
		var TodeList = [
			{ id : 1 ,name : "天涯" , completed : false},
			{ id : 2 ,name : "海角" , completed : true},
			{ id : 3 ,name : "天涯" , completed : false}
		];
		$scope.TodeList = TodeList;
		$scope.Todename = "";
		$scope.add = function(){						
			if($scope.Todename.trim() === "") return;
			var length = TodeList.length;
			var id = length !== 0 ? TodeList[length - 1].id + 1 : 1;			
			TodeList.push({id : id, name : $scope.Todename, completed : false});
			localStorage.setItem("info", JSON.stringify(TodeList));	
			$scope.Todename = "";
		}
		//var getInfo = localStorage.getItem("info");		
		//TodeList = JSON.parse(getInfo);
		//$scope.isCheck = false;
		$scope.remove = function(){
			//console.log(TodeList[this.$index].id);
			TodeList.splice(this.$index,1)		
		}
		$scope.amend = function(){
			//TodeList[this.$index].name = TodeList[this.$index].name;
		}
	}
})(angular);
