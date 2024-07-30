const buttons=document.querySelectorAll(".btn");
const blackbtn=document.getElementById("black");
const orangebtn=document.getElementById("orange");
const bluebtn=document.getElementById("blue");
const greenbtn=document.getElementById("green");
const body=document.querySelector('body');
buttons.forEach(function (btns){
// console.log(button);
btns.addEventListener("click",function(e){
       if(e.target.id==="black"){
        body.style.backgroundColor="black";
        body.style.color="white"
        blackbtn.style.backgroundColor="#6c6b6b"

       }
       if(e.target.id==="green"){
        body.style.backgroundColor="green";
        body.style.color="white"
        greenbtn.style.backgroundColor=" rgb(47, 146, 47)"

       }
       if(e.target.id==="blue"){
        body.style.backgroundColor="blue";
        bluebtn.style.backgroundColor="hsl(240, 68%, 46%)"

        body.style.color="white"
       }
       if(e.target.id==="orange"){
        orangebtn.style.backgroundColor=" rgb(199, 143, 39)"

        body.style.backgroundColor="orange";
        body.style.color="white"
       }
    })
})

