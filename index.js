function timer(){
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let cho = hrs >= 12 ? "PM" : "AM";
    let msg = document.getElementById("msg");
    let msg1 = document.getElementById("msg1");
    let msg2 = document.getElementById("msg2");
    // console.log(hrs, min, sec);
    // if(hrs == 0){
    //     hrs == 12;
    // }
    // if(hrs > 12){
    //     hrs = hrs-12;
    // }
    if(hrs < 10){
        hrs = "0"+hrs;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0"+ sec;
    }
    document.getElementById("hour").innerHTML  = `${hrs} hours`
    document.getElementById("mint").innerHTML  = `${min} mins`
    document.getElementById("seco").innerHTML  = `${sec} secs`
    document.getElementById("AM").innerHTML=`${cho}`
    
    if(hrs>=10 && hrs<=12){
        msg.innerHTML="GRAB SOME HEALTHY BREAKFAST!!!"
        msg1.innerHTML="GOOD MORNING!! WAKE UP !!"
        msg2.src = "./"
    }else if(hrs>=12 && hrs<=16){
        msg.innerHTML="LET'S HAVE SOME LUNCH !!"
        msg1.innerHTML="GOOD AFTERNOON!! TAKE SOME SLEEP!!"
        msg2.src="./"
    }else if(hrs>=16 && hrs<=20){
        msg.innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        msg1.innerHTML="GOOD EVENING !! "
    }else{
        msg.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP  "
        msg1.innerHTML="GOOD NIGHT !!"
    }
   
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


