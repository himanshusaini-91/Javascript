window.addEventListener("load",init);
function init()
{
    var c=document.getElementById("closure");
    c.addEventListener("click",myFunction);

}
/*function action()
{
    var counter=0;
    function perform()
    {
        counter ++;
        document.getElementById("d").innerhtml=counter
    }
    return perform;
}*/
var add = (function () {
    var counter = 0;
    alert("hello");
    return function () {
        counter += 1
        return counter;

    }
})();

function myFunction(){

    document.getElementById("d").innerHTML=add();
}
