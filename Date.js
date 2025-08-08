var today= new Date();
var Day= today.getDay();
var daylist=[
    "Sunday",
    "Monaday",
    "Tuesday",
    "Wedesday",
    "Thrusday",
    "Fri",
    "Sat"
];
console.log("Today is : "+daylist[Day]+".");
var hour=today.getHours();
var minutes=today.getMinutes();
var second=today.getSeconds();
var post=(hour>=12)?"PM":"AM";
if(hour==0&&post=="PM"){
    if(minutes==0 &&second==0){
    hour=12;
    post="noon";
}else{
    hour=12;
    post="PM";
}
}

if(hour==0&&post=="AM"){
    if(minutes==0 && second==0){
    hour=12;
    post="midnight";
}else{
    hour=12;
    post="AM";
}
}
console.log("Time is "+hour+ ":"+minutes+":"+second+post);