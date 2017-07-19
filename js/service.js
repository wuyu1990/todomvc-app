(function(angular){
    "use strict";
    angular.module("TodeApp.service",[])
    .service("TodeSri",["$window","$filter",function($window,$filter){

        var localStrage = $window.localStorage;
        var todoList = JSON.parse(localStrage.getItem("todo")) || [];
        this.getData = function(){
            return todoList;
        }
        this.save = function(){
            localStorage.setItem("todo",JSON.stringify(todoList));
        }

        // 01 添加数据
        this.add = function(tackName){
            todoList.push({name : tackName, complete : false});
            this.save()
        }
    }])
})(angular)