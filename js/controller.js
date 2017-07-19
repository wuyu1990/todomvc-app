(function (angular) {
  "use strict";
  angular.module("TodeApp.controller", [])
    .controller("TodeCtri", ["$scope", "$location", "TodeSri", "$filter", TodeController])

  function TodeController($scope, $location, TodeSri, $filter) {
    var vm = $scope;
    var todoList = TodeSri.getData();
    vm.todoList = todoList;

    //01 添加数据
    vm.tackName = "";
    vm.add = function () {
      if (vm.tackName.trim() === "") return;
      TodeSri.add(vm.tackName);
      vm.tackName = "";
    }

    // 02 删除数据
    vm.del = TodeSri.del;

    //03全选
    vm.isCheckedAll = false;
    vm.checkAll = function () {
      TodeSri.checkAll(vm.isCheckedAll);
    }
    vm.$watch("todoList", function () {
      vm.faLen = $filter("filter")(todoList, { complete: false }).length;
      vm.isCheckedAll = !vm.faLen;
      TodeSri.save()
    }, true)

    // 04修改文本
    vm.edited = -1;
    vm.edit = function (index) {
      vm.edited = index;
    }
    vm.editSave = function () {
      vm.edited = -1;
    }

    //控制清除任务按钮的展示和隐藏
    vm.delCompleted = TodeSri.delCompleted;
    vm.isShow = TodeSri.isShow;

    // 显示未完成的任务数量
    vm.getCount = TodeSri.getCount;

    // 09 根据URL变化显示相应任务
    vm.location = $location;
    vm.status = undefined;
    vm.$watch("location.url()", function (newValue) {
      switch (newValue) {
        case "/active":
          vm.status = false;
          break;
        case "/completed":
          vm.status = true;
          break;
        default:
          vm.status = undefined;
          break;
      }
    })
  }

})(angular)