window.addEventListener("load",init);
function init()
{
    var btn=document.getElementsByTagName("button");
    for(var i=0;i<btn.length;i++)
    {
        var currentbtn=btn[i];
        currentbtn.addEventListener("click",dooperation);
    }
}
function dooperation(event) {
    var operation = event.srcElement.getAttribute("data-operation");
    var first = document.getElementById("t1");
    var second = document.getElementById("t2");
    if (first && second) {
        first = first.value;
        second = second.value;
        if (first && second) {
            first = parseInt(first);
            second = parseInt(second);
            if (first && second) {
                var c = obj[operation](first, second);
                document.getElementById("result").innerHTML=c;

            }

        }
    }
}
