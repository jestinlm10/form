var user =document.getElementById("user");
var pwd=document.getElementById("pwd");
var btn=document.getElementById("btn");
var errl=document.getElementById("err1");
function Validate(){
if(user.value.trim()==""||pwd.value.trim()==""){
    alert("field cannot be empty");
    return false;
}else if  (pwd.value.length<5)
{
    //alert("password should be greater than 5")
    pwd.style.border="2px solid red";
    err1.textcontent="password should be greater than 5";
    return false;
}
else{
    pwd.style.border="2px solid green";
    err1.textcontent=""
    return true;
}






}