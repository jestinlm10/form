var head =document.getElementById("head1");
console.log(head);
head.style.color="blue";
head.textContent="Text content"
head.innerHTML="<h6>changed in to h6</h6>"

var c = document.getElementsByClassName("list");
for(let i=0;i<c.length;i++)
{
    c[i].style.backgroundColor="brown";
}
var t=document.getElementsByTagName('li');
t[1].style.color="red"

//using guery selector
let val =document.querySelector("input");
val.value="Name"
// query selector using id
var saveBtn =document.querySelector("#saveBtn");
saveBtn.style.backgroundColor="grey"