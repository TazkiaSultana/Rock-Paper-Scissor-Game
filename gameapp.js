let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#userscore");
const compscorePara=document.querySelector("#compscore");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    //rock,paper,scissors
}
const drawgame=()=>{
    // console.log("Game was draw");
    msg.innerText="Game was Draw Play again! ";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin){
        userscore++;
        userscorePara.innerText=userscore;
        // console.log("You win");
        msg.innerText=`You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else{
        compscore++;
        compscorePara.innerText=compscore;
        // console.log("You Lose");
        msg.innerText=`You Lost. ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }

};

const playGame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    //Generate computer choice ->modular
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if(userchoice===compChoice){
        //draw
        drawgame();
    } else{
        let userwin=true; //assume use won
        if(userchoice==="rock"){//scissors,paper
            userwin=compChoice==="paper"? false:true;
        } else if(userchoice==="paper"){//rock,scissors
            userwin=compChoice==="rock"?true:false;
        } else{
            //rock,paper
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
});
