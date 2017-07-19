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
            localStorage.setItem(JSON.stringify(todoList));
        }
    }])
})(angular)