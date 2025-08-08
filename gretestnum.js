var a,b,c;
a=parseInt(prompt("Enter the value of A"));
b=parseInt(prompt("Enter the value of B"));
c=parseInt(prompt("Enter the value of C"));
if(a>b && a>c){
    alert("A is greater");
}else if(b>a && b>c){
    alert("B is greater");
}else{
    alert("C is greater");
}