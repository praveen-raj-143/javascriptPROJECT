function timer(){
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    // console.log(hrs, min, sec);
    document.getElementById("hour").innerHTML  = `${hrs} hours`
    document.getElementById("mint").innerHTML  = `${min} mins`
    document.getElementById("seco").innerHTML  = `${sec} secs`
}
setInterval(timer, 1000);



let selectElement=document.getElementById("select");
let output=document.getElementById("ou")
selectElement.addEventListener("change",function(event){
    // console.log(event.target.value);
    // console.log(event.target.selectedOptions[0].innerText);
    output.innerText="Wake Up Time : " + event.target.selectedOptions[0].innerText;
})

let select1Element=document.getElementById("select1");
let output1=document.getElementById("ou1")
select1Element.addEventListener("change",function(event){
    
    output1.innerText="Lunch Time : " + event.target.selectedOptions[0].innerText;
})


let select2Element=document.getElementById("select2");
let output2=document.getElementById("ou2")
select2Element.addEventListener("change",function(event){
    
    output2.innerText="Nap Time : " + event.target.selectedOptions[0].innerText;
})

let select3Element=document.getElementById("select3");
let output3=document.getElementById("ou3")
select3Element.addEventListener("change",function(event){
    
    output3.innerText="Night Time : " + event.target.selectedOptions[0].innerText;
})

let btnElement=document.getElementById("change");
btnElement.addEventListener("mouseenter",function(){
    btnElement.innerText="Party Time ";
})
btnElement.addEventListener("mouseleave",function(){
    btnElement.innerText="Set Alarm";
})