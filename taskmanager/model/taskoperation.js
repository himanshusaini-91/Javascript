var taskOperations={
    taskList:[],
    addTask:function(taskId,taskName,taskDesc)
    { alert("i am in add"+taskName,taskDesc);
      var taskObject=new Task(taskId,taskName,taskDesc);
        this.taskList.push(taskObject);
    },
    toggleTask:function(searchParam,fieldtype){
        return  this.taskList.filter(function(taskObject){
            if(taskObject[fieldtype]==searchParam) {
                taskObject.isCompleted = !taskObject.isCompleted;
            }
            return ;
        });
        //return finalList;

    },
    deleteTask:function() {
        return this.taskList.filter(function (taskObject) {

            return !taskObject.isCompleted;
        });
    },
    searchTask:function(taskNameToSearch) {
        return this.taskList.filter(function (taskObject) {
            return taskObject.taskName.indexOf(taskNameToSearch)>= 0;
        });
    }
}
