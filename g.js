let userwin=0;
let compwin=0;
let turn;

msg=document.querySelector("#msg");
win=document.querySelector("#win");
draw=document.querySelector("#draw");
loss=document.querySelector("#loss");
winner=document.querySelector(".winner");
images=document.querySelector(".images");
me=document.querySelector("#me");
you=document.querySelector("#you");
userscoreh=document.querySelector(".users>h1");
compscoreh=document.querySelector(".comp>h1");

let compChoice;
function compturn(){
   compChoice=Math.floor(Math.random() * 3);

}
// console.log("compchoice is   "+compChoice);




function playgame(userChoice){
    if(userChoice==compChoice){
        console.log("Draw");
                msg.innerHTML=("Draw");
                msg.style.backgroundColor="blue";
                msg.style.color="white";
                draw.style.visibility="visible";
                loss.style.visibility="hidden";
                win.style.visibility="hidden";
                console.log("turns  "+turn);
    }
    else if (compChoice==2 && userChoice==0 || compChoice==0 && userChoice==1 || compChoice==1 && userChoice==2) {
                console.log("user win");
                msg.innerHTML=("Congrats U win");
                userwin++;
                userscoreh.innerText=userwin;
            
                msg.style.backgroundColor="green";
                msg.style.color="white";
                win.style.visibility="visible";
                draw.style.visibility="hidden";
                loss.style.visibility="hidden";
                console.log("turns  "+turn);
            }
            else{
                console.log("computer win");
                        msg.innerHTML=("oops u loose");
                    compwin++;
                    compscoreh.innerText=compwin;
                    msg.style.backgroundColor="red"; 
                    msg.style.color="white";
                    loss.style.visibility="visible";
draw.style.visibility="hidden";
win.style.visibility="hidden";
console.log("turns  " + turn);
            }
}


choices=document.querySelectorAll(".choices")
function play(){
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
   
turn++;
      compturn();
      playgame(userChoice);
    console.log("user choose  "+userChoice);
    console.log("comp choose  "+compChoice);
   
    if(userwin==10){
      winner.style.display="block";
      me.style.display="block";
      
      images.style.display="none";
      }
      if(compwin==10) {
        winner.style.display="block";
        you.style.display="block";
        
        images.style.display="none";
      
      }
  });
})
}
play();
