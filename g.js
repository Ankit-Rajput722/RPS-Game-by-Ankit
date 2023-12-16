// // console.log("ankit");
let userwin=0;
let compwin=0;

msg=document.querySelector("#msg");
win=document.querySelector("#win");
draw=document.querySelector("#draw");
loss=document.querySelector("#loss");

userscoreh=document.querySelector(".users>h2");
compscoreh=document.querySelector(".comp>h2");

let compChoice;
function compturn(){
   compChoice=Math.floor(Math.random() * 3);

}
// console.log("compchoice is   "+compChoice);




function playgame(userChoice){
    if(userChoice==compChoice){
        console.log("Draw");
                msg.innerHTML=("Draw             because comp choose "+compChoice);
                msg.style.backgroundColor="blue";
                msg.style.color="white";
                draw.style.visibility="visible";
                loss.style.visibility="hidden";
                win.style.visibility="hidden";

    }
    else if (compChoice==2 && userChoice==0 || compChoice==0 && userChoice==1 || compChoice==1 && userChoice==2) {
                console.log("user win");
                msg.innerHTML=("Congrats U win            because comp choose  "+compChoice);
                userwin++;
                userscoreh.innerText=userwin;
            
                msg.style.backgroundColor="green";
                msg.style.color="white";
                win.style.visibility="visible";
                draw.style.visibility="hidden";
                loss.style.visibility="hidden";
            }
            else{
                console.log("computer win");
                        msg.innerHTML=("oops u loose         beacuse comp choose  "+compChoice);
                    compwin++;
                    compscoreh.innerText=compwin;
                    msg.style.backgroundColor="red"; 
                    msg.style.color="white";
                    loss.style.visibility="visible";
draw.style.visibility="hidden";
win.style.visibility="hidden";
            }
}
choices=document.querySelectorAll(".choices")
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      compturn();
      playgame(userChoice);
    console.log("user choose  "+userChoice);
    console.log("comp choose  "+compChoice);
    });
  });














  
















// function compturn(){
//     const genCompChoice = () => {
//         // const options = ["rock", "paper", "scissors"];
//         const randIdx = Math.floor(Math.random() * 3);
//         // return options[randIdx];
//         return randIdx;
//       };
//      compChoice=genCompChoice();
//     console.log("compchoice  "+compChoice);
// }
// compturn();












// //  let userchoicer;
// //  let userchoicep;
// //  let userchoices;
// // //  userchoicer=document.addEventListener("click", myFunction0);                                  //document.querySelector("#rock");
// // //  userchoicep=document.addEventListener("click", myFunction1);                                                                                   //document.querySelector("#paper")
// // //  userchoices=document.addEventListener("click", myFunction2);                                                                                   //document.querySelector("#scissor")

// // function myFunction0() {
// //     document.getElementById("rock");
// //     // console.log(userchoicer);
// //   }

// //   function myFunction1() {
// //     document.getElementById("paper");
// //     // console.log("paper")
// //   }

// //   function myFunction2() {
// //     document.getElementById("Scissor");
// //     // console.log("scissor")
// //   }

// // compchoicer=0;  //document.querySelector("#rock");
// // compchoicep=1;    //document.querySelector("#paper")
// // compchoices=2;     //document.querySelector("#scissor")
// // function play(){
//     // userchoice=prompt("pick the choice in 0 1 2");



// //  userchoicer=document.querySelector("#rock").document.addEventListener("click", myFunction0);

// // userchoicep=document.querySelector("#paper").document.addEventListener("click", myFunction1);
// // userchoices=document.querySelector("#Scissor").document.addEventListener("click", myFunction2);


// // compchoice=Math.floor(Math.random() * 3);
// const CompChoice = () => {
//     const options = ["rock", "paper", "scissors"];
//     const randIdx = Math.floor(Math.random() * 3);
//     return options[randIdx];
//   };

// userchoicer=document.querySelector("#rock")
// console.log(userchoicer);

// userchoicep=document.querySelector("#paper")
// console.log(userchoicep);

// userchoices=document.querySelector("#Scissor")
// console.log(userchoices);
// // userchoice.forEach((choice) => {
// //     choice.addEventListener("click", () =>{
// // const uchoicer=choice.getAttribute("id");
// // console.log("choice was clicked", uchoicer);
// //     });
// // });



// msg=document.querySelector("#msg");

// userscoreh=document.querySelector(".users>h2");
// compscoreh=document.querySelector(".comp>h2");



// //     // if(userchoice==0){
// //     //     console.log("user choose rock")
// //     // }
// //     // else if(userchoice==1){
// //     //     console.log("user choose paper")
// //     // }
// //     // else if(userchoice==2){
// //     // console.log("user choose scisors")
// //     // }
// //     // else{
// //     //     console.log("invalid choice. plz choose again")  
// //     // // }
//     // compchoicer=0;
//     // compchoicep=1;
//     // compchoices=2;
// //     // console.log(compchoice)
// //     // if(compchoicer==0){
// //     //     console.log("computer choose rock")
// //     // }
// //     // else if(compchoicep==1){
// //     //     console.log("computer choose paper")
// //     // }
// //     // else if(compchoices==2){
// //     // console.log("computer choose scisors")
// //     // }

// //    function play(){
// //     if(uchoice==rock && compchoice==0 || uchoice==paper && compchoice==1 || uchoice==Scissor && compchoice==2){
// //         console.log("Draw");
// //         msg.innerHTML=("Draw");
// //         msg.style.backgroundColor="blue";
// //     }
// //     // else if (computerinput==2 && userinput==0 || computerinput==0 && userinput==1 || computerinput==1 && userinput==2 ) {

// //     else if (compchoices==userchoicer || compchoicer==userchoicep || compchoicep==userchoices) {
// //         console.log("user win");
// //         msg.innerHTML=("Congrats U win");
// //         userwin++;
// //         userscoreh.innerText=userwin;
    
// //         msg.style.backgroundColor="green";
    
// //     }
// //     else {
// //         console.log("computer win");
// //         msg.innerHTML=("oops u loose");
// //     compwin++;
// //     compscoreh.innerText=compwin;
// //     msg.style.backgroundColor="red";
    
// //     }

// //    }
// //    console.log(userwin);
//     // console.log(compwin);
// // play();
// // console.log(userwin);
// // console.log(compwin);
// // }
// // setInterval(play,5);
//     // uchoic2=prompt("pick the choice in 0 1 2");








