window.addEventListener("load",init);
function init()
{
    var btn=document.getElementById("b1");
    btn.addEventListener("click",ajaxRequest);
    console.log("after btn");

}
function ajaxRequest()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){//callback function
        if(xmlhttp.readyState == 4 && xmlhttp.status==200)
        {
          document.getElementById("s").innerHTML=xmlhttp.responseText;
        }
        else if(xmlhttp.status==404)
        {
            alert("error cannot find json");
        }
    };
    xmlhttp.open("GET","myservice.json",true);
    xmlhttp.send();
}

