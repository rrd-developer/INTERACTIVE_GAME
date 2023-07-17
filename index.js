//YOUR FIRST INTERACTIVE GAME
let playGame = confirm("Shall we play rock,paper and scissors?");
if(playGame){
    //PLAY
    let playerChoice = prompt("Please enter rock,paper and scissors");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(
            playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scissors"){
                let computerChoice = Math.floor(Math.random() * 3 + 1);
                let computer = 
                computerChoice === 1 ?
                "rock"
                :computerChoice === 2 ?
                "paper"
                :"scissors";

                let result = 
                playerOne === computer ?
                "tie game"
                :playerOne === "rock" && computer === "paper" ?
                `playerOne : ${playerOne}\n computer : ${computer}\n computer wins`
                :playerOne === "paper" && computer === "scissors" ?
                `playerOne : ${playerOne}\n computer : ${computer}\n computer wins`
                :playerOne === "scissors" && computer === "rock" ?
                `playerOne : ${playerOne}\n computer : ${computer}\n computer wins`
                :`playerOne : ${playerOne}\n computer : ${computer}\n playerOne wins`
                alert(result);
                let playAgain = confirm("play Again?");
                playAgain? location.reload() : alert("ok,thanks for playing");



            }else{
                alert("You didn't enter rock,paper and scissores");
            }

            
        

    }else{
        alert("I guess you changed your mind,maybe next time")
    }

}else{
    alert("Oaky ,May be next time");
}