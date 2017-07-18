(function(angular){
    "use strict";
    angular.module("TodeApp.service",[])
    .service("TodeSri",["$window","$filter",function($window,$filter){

        var localStrage = $window.localStorage;
        var todoList = JSON.parse(localStorage.getItem("Tode")) || [];
        this.save = function(){
            localStorage.setItem("Tode",JSON.stringify(todoList));
        }
        //获取数据
        this.getData = function(){
            return todoList;
        }
        var that = this;
        //添加数据
        this.add = function(todoName){
            var length = todoList.length;
            //var id = length !== 0 ? todoList[length - 1].id + 1 : 1;
            todoList.push({name : todoName, template : false});
            this.save()
        }

        //全选
        this.isCheckAll = function(isCheck){
            todoList.forEach(function(item) {
                item.template = isCheck;
            });
            that.save()
        }
        // 清除已完成任务 
        this.delCompleted = function(){
            var arr = todoList.filter(function(item){
                return !item.template
            })
            todoList.length = 0;
            [].push.apply(todoList,arr);
            that.save()
        }
        this.isShow = function(){
            return todoList.some(function(item){
                return item.template;
            })
        }

        //显示未完成数
        this.getCount = function(){
            var count = 0;
            todoList.forEach(function(item){
                if(!item.template){
                    count++;
                }
            })
            return count;
        }     
    }])
})(angular)