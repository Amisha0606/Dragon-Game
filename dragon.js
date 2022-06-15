//ISSUE: Dragon time not reducing properly line 73


let score= document.getElementById("score");
scoreCont=0;
let start= document.getElementById("start");
let up= document.getElementById("up");
let dragon=document.getElementById("dragon");
let dino=document.getElementById("dino");
let dragonMove=document.getElementsByClassName("dragonMove");
audioDead= new Audio("gameover.mp3")

// Button attachments for Animations in Dino and Dragon

start.addEventListener("click", ()=>{
    dragon.classList.add("dragonMove");
})

//Animating the Dino
function animatedDino(){
    dino.classList.add("dinoMove");
    setTimeout(() => {
        dino.classList.remove('dinoMove')
    }, 900);
}
up.addEventListener("click", animatedDino); //from button on screen

// Code Below for keyboard attachments
document.addEventListener("keydown", e=>{
    // console.log(e.keyCode);
    if(e.keyCode==38){
        animatedDino(); //for Dino
    }
    if(e.keyCode==13){
        dragon.classList.add("dragonMove"); // For dragon
    }
    if(e.keyCode==39){
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left= (dinoX+10)+ "px";
    }
    if(e.keyCode==37){
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left= (dinoX-10)+ "px";
    }
})

// Code Below for Collision recognistion
setInterval(()=>{
    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dragonX=parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"));

    dinoY = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
    dragonY=parseInt(window.getComputedStyle(dragon, null).getPropertyValue("top"));

    differenceX= Math.abs(dinoX-dragonX);
    differenceY= Math.abs(dinoY-dragonY);

    if(differenceX<100 && differenceY<60){
        dragon.classList.remove("dragonMove");
        document.querySelector("h1").innerHTML="Game Over!";
        document.querySelector(".info").innerText= "Refresh to start again.";
        // audioDead.play();
        // setTimeout(() => {
        //     audioDead.pause();
        // }, 100);
        alert("Soory! Game Over");


    } else if (differenceX<100 && differenceY>60){
        scoreCont +=1;
        score.innerHTML= "Your Score: " +scoreCont;
        dragonDuration= parseInt(window.getComputedStyle(dragon, null).getPropertyValue('animation-duration'));
        newDuration= dragonDuration - 0.1;
        dragon.style.animationDuration = newDuration + "s";
        console.log(dragonDuration);

    }
     
},100);




//Code below for Updating score

// TO DO:
// 1. Code for collision -Done
// 2. Code for Score Update
// 3. Fix the sound
// 4. Attach keyboard for playing -Done
// 5. Make it more intresting
// 6. Button and key to stop
// 7. change innerHTML to Game Over -Done
// 8. Stop replaying the game if the game overs (IMPORTANT!)