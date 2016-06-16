/**
 * Created by tanvirsaini32 on 16/06/2016.
 */
window.addEventListener("load",init);
function init()
{ console.log("init");
    /*var btn=document.getElementById("b1");*/
   /* var btn=document.getElementsByClassName("abc");
    btn[0].addEventListener("click",greet);*///by classname
    /*var btn=document.getElementsByTagName("button");
    btn[0].addEventListener("click",greet);*///by tag name
    var btn=document.getElementsByName("xy");
    btn[0].addEventListener("click",greet)
}
function greet()
{alert("welciome to javascript world");
}
