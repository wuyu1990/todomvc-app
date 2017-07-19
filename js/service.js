(function(angular){
    "use strict";
    angular.module("TodeApp.service",[])
    .service("TodeSri",["$window","$filter",function($window,$filter){

        var localStrage = $window.localStorage;
        var todoList = JSON.parse(localStrage.getItem("todo")) || [];
        var that = this;
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

        // 02 删除数据
        this.del = function(index){
            todoList.splice(index,1);
            that.save()
        }

        //03全选
        this.checkAll = function(isChecked){
            todoList.forEach(function(item) {
                item.complete = isChecked;
            });
            that.save()
        }

       
        //控制清除任务按钮的展示和隐藏
        this.delCompleted = function(){
            var arr = todoList.filter(function(item){
                return !item.complete;
            })
            todoList.length = 0;
            [].push.apply(todoList,arr);
            that.save()
        }
        this.isShow = function(){
            return todoList.some(function(item){
                return item.complete;
            })
        }
    }])
})(angular)