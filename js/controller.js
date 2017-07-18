(function(angular){
    "use strict";
    angular.module("TodeApp.controller",[])
    .controller("TodeCtri",["$scope","$location","TodeSri",TodeController])

    function TodeController($scope,$location,TodeSri){
        var vm = $scope;

        var todoList = TodeSri.getData();
        vm.todoList = todoList;
        //添加数据
        vm.addName = "";
        vm.add = function(){
            if(vm.addName.trim() === "") return;
            TodeSri.add(vm.addName);
            vm.addName = "";
        }

        //删除数据
        vm.del = function(index){
            todoList.splice(index,1);
            TodeSri.save()
        }


        //修改数据
        vm.editing = -1;
        vm.edit = function(index){
           vm.editing = index;
           TodeSri.save();
        }
        vm.editSave = function(){
            vm.editing = -1;
            TodeSri.save();
        }

        //全选
        vm.ischechAll = false;
        vm.isCheck = function(){
            TodeSri.isCheckAll(vm.ischechAll)
        }

        // 清除已完成任务
        vm.delCompleted = TodeSri.delCompleted;
        vm.isShow = TodeSri.isShow;

        //显示未完成数
        vm.getCount = TodeSri.getCount;
    }

})(angular)