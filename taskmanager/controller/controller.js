window.addEventListener("load",init);
var taskId = 1;
function init()
{
    var btn=document.getElementsByTagName("button");
    document.getElementById("search").addEventListener("click",showSearchTask);
    document.getElementById("taskSearch").addEventListener("keyup",searchTask);
    Array.prototype.forEach.call(btn,function(e)
    {
        var operations={"addTask":addTask,"saveTask":saveTask,"deleteTask":deleteTask,"loadTask":loadTask};
        e.addEventListener("click",operations[e.id]);
    });
}
function searchTask(){
    var taskNameToSearch = document.getElementById("taskSearch").value;
    var taskSearchList = taskOperations.searchTask(taskNameToSearch);
    printList(taskSearchList);
}
function loadTask(){
    taskOperations.taskList=JSON.parse(window.localStorage.tasks);
    printList(taskOperations.taskList);
    alert("Data Loaded...");

}
function saveTask(){
    window.localStorage.tasks=JSON.stringify(taskOperations.taskList);
    alert("Data Store");
}
function deleteTask(){

    taskOperations.taskList = taskOperations.deleteTask();
    printList(taskOperations.taskList);
}
function printList(taskList){
    var ul = document.getElementById("taskList");
    ul.innerHTML="";
    taskList.forEach(function(taskObject){
        var liTag = document.createElement("li");
        liTag.innerHTML=taskObject.taskId +" " +taskObject.taskName+" "+taskObject.taskDesc;

        liTag.addEventListener("click",toggleTask);
        ul.appendChild(liTag);
    });
}
function showSearchTask()
{
    if(document.getElementById("search").checked){
        document.getElementById("searchDiv").className="";
    }
    else
    {
        document.getElementById("searchDiv").className="hide";
    }
}
function addTask()
{  var taskName =document.getElementById("taskName").value;
    var taskDesc =document.getElementById("taskDesc").value;
    console.log(taskName);
    taskOperations.addTask(taskId,taskName,taskDesc);
    var ul = document.getElementById("taskList");
    var liTag = document.createElement("li");
    liTag.innerHTML=taskId +" " +taskName+" "+taskDesc;
    taskId++;
    liTag.addEventListener("click",toggleTask);
    ul.appendChild(liTag);
}
function toggleTask(event)
{event.srcElement.classList.toggle("completed");
    var innerHTML=event.srcElement.innerHTML;
    var array=innerHTML.split(" ");
    var taskId=array[0];
    taskOperations.toggleTask(taskId,"taskId");
}
