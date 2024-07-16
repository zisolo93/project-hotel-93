const weiter = document.getElementById("wellcoming");
const talkbox = document.getElementById("talkbox");
const list = document.getElementById("list");
const foodcon = document.getElementById("foodcon");
const hname = document.getElementById("hname");
const message = document.getElementById("talk1");
const orderL = document.getElementById("orderList");
const clap = document.getElementById("clap");
const nightLightCon = document.getElementById("nightLightCon");
const dayLightCon = document.getElementById("dayLightCon");

const body = document.getElementById("body");
const im1 = document.getElementById("im1");
const im2 = document.getElementById("im2");
const im3 = document.getElementById("im3");
const im4 = document.getElementById("im4");
const im5 = document.getElementById("im5");
const im6 = document.getElementById("im6");
const im7 = document.getElementById("im7");
const im8 = document.getElementById("im8");
const im9 = document.getElementById("im9");
const im10 = document.getElementById("im10");
const im11 = document.getElementById("im11");
const im12 = document.getElementById("im12");
const link = document.querySelectorAll(".links");
const foodlink = document.getElementById("foodlink");
const drinklink = document.getElementById("drinklink");
const roomlink = document.getElementById("roomlink");
const discription = document.getElementsByClassName("discription");
const language = document.getElementById("language");
const amdiscription = document.getElementsByClassName("amdiscription");

let orderNo;
let foodCoice;
let ordertrack=true;
let i=0;
let x=-200;
im1.addEventListener("click",order);
im2.addEventListener("click",order);
im3.addEventListener("click",order);
im4.addEventListener("click",order);
im5.addEventListener("click",order);
im6.addEventListener("click",order);
im7.addEventListener("click",order);
im8.addEventListener("click",order);
im9.addEventListener("click",order);
im10.addEventListener("click",order);
im11.addEventListener("click",order);
im12.addEventListener("click",order);
clap.addEventListener("click",orderListFun);
nightLightCon.addEventListener("click",nightMode);
dayLightCon.addEventListener("click",lightMode);
window.addEventListener("DOMContentLoaded",weiterMan)
language.addEventListener("click",languageFun);
function order(){
    i++;
    foodCoice=this.name;
    orderNo = this.id;
    if(i>5){
        orderListFun();
        ordertrack=false;
    }
    if(ordertrack==true){
        orderL.innerHTML +="<li>"+foodCoice+"</li>";
    }
    
    console.log(i);
    switch(orderNo){
        case "im1":
            foodCoice=this.name;
            
            break;
        case "im2":
            foodCoice=this.name;
            console.log(foodCoice);
            break;
        case "im3":
            foodCoice=this.name;
         
            break;
        default:
            console.log("eror");
            
    }
}

function weiterMan() {
    
    let clap = setTimeout(()=>{
        
       
        weiter.style.left=x+"px";
        weiter.style.visibility = "visible";

    },1000)
    setTimeout(()=>{
        msg();
    },6000);
    let back = setTimeout(()=>{
        
       clearInterval(clap);
        weiter.style.left=x+"px";
        weiter.style.visibility = "hidden";
        

    },12000)
}

function msg(){
    message.innerHTML = ` i will back when you'r rady to order fill comfortabele to call me<br>
    just clap👏 if u want me`
}

function orderListFun(){
    
    
    if(ordertrack==false){
        weiter.style.visibility = "visible";
        message.innerHTML = `sorry sir you can't order above this we produce five dishs 
        to one tabel if u want order above this try special order call`;
        setTimeout(()=>{
            weiter.style.visibility = "hidden";
        },5000);
    }
    else if(i==0){
        weiter.style.visibility = "visible";
        message.innerHTML = `you dosen't order why you bother me for nothing if u wanna
        play game am busy for that if only want some thing call me not for play sir`;
        setTimeout(()=>{
            weiter.style.visibility = "hidden";
        },5000);

    }

    else{
        console.log(foodCoice.length);
        weiter.style.visibility = "visible";
        message.innerHTML = `your order is start prepairing now you can play
        our games unti your order is ready this is free <br> Have  fun with our game🤩`;
        setTimeout(()=>{
            weiter.style.visibility = "hidden";
        },5000);
    }
}
function nightMode(){
    body.style.backgroundImage = "url('dark.jpg')";
    nightLightCon.style.visibility = "hidden";
    dayLightCon.style.visibility = "visible";
    hname.style.borderColor = "white";
    foodcon.style.color = "white";
    for(let i=0;i<12;i++){
    document.getElementsByClassName("amdiscription")[i].style.color = "white";
    document.getElementsByClassName("amdiscription")[i].style.textShadow = "white";
        document.getElementsByClassName("discription")[i].style.color = "white";
    }
}
function lightMode(){
    body.style.backgroundImage = "url('back93.jpg')";
    nightLightCon.style.visibility = "visible";
    dayLightCon.style.visibility = "hidden";
    for(let i=0;i<12;i++){
        document.getElementsByClassName("amdiscription")[i].style.color = "red";
        document.getElementsByClassName("discription")[i].style.color = "seagreen";
    }
}
displayH();
function displayH(){
    let dlight = 0;
   let ditime= setInterval(()=>{
     switch (dlight){
        case 0:
            hname.style.color = "orange";
            dlight=1;
            break;
        case 1:
            hname.style.color = "cyan";
            dlight=2;
            break;
     
        case 2:
            hname.style.color = "blue";
            dlight=3;
            break;
        case 3:
            hname.style.color = "rgb(32, 218, 212)";
            dlight=4;
            break;
        case 4:
            hname.style.color = "seagreen";
            dlight=0;
            break;
       }  
     
     
     displayH();
     clearInterval(ditime);
    },300);
}
function languageFun(){
    
    let currentLang = language.value;
 switch(currentLang){
    case "Amharic":
        for(let i=0;i<12;i++){
            document.getElementsByClassName("amdiscription")[i].style.visibility = "visible";
            document.getElementsByClassName("discription")[i].style.visibility = "hidden";
        }
        
        
        
        break;
    case "English":
        for(let i=0;i<12;i++){
            document.getElementsByClassName("amdiscription")[i].style.visibility = "hidden";
            document.getElementsByClassName("discription")[i].style.visibility = "visible";
        }
        break;
 }
}
