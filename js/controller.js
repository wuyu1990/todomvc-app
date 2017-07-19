(function (angular) {
  "use strict";
  angular.module("TodeApp.controller", [])
    .controller("TodeCtri", ["$scope", "$location", "TodeSri", "$filter", TodeController])

    function TodeController($scope,$location,TodeSri,$filter){
        var vm = $scope;
        var todoList = TodeSri.getData();
        vm.todoList = todoList;

        //01 添加数据
        vm.tackName = "";
        vm.add = function(){
          if(vm.tackName.trim() === "") return;
          TodeSri.add(vm.tackName);
           vm.tackName = "";
        }
    }

})(angular)