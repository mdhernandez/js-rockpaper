function game(){
	
	$(document).ready(function(){
	    
	  $("#choices img").click(function(){
		  
		  let choose = $(this).attr("src");
		  let p = playerTranslate(choose)
		  let c = computerPlay();
		  
		  
		  let pChoice = "You chose " + p;
		  let cChoice = "The computer chose " + c;
		  $("#playdiv").text(pChoice);
	  
		  $("#compdiv").text(cChoice);
		  let res = playRound(p, c);
		  $("#result").text(res);
		 
	    switch(p){
		  case "Rock":
		    $("#play").html("<div><img src = \"images/rock.jpg\" id = \"play-pic\" ></div>");	
		    break;
		  case "Scissors":
		    $("#play").html("<div><img src = \"images/scissors.jpg\" ></div>");	
		    break;
		  case "Paper":
		    $("#play").html("<div><img src = \"images/paper.jpg\" id = \"comp-pic\" align = \"right\"></div>");	
		    break;
	  }
      
	  $("#vs").html("<h1>Versus</h1>");
	  
	    switch(c){
		  case "Rock":
		    $("#comp").html("<img src = \"images/rock.jpg\">")
		    break;
		  case "Scissors":
		    $("#comp").html("<img src = \"images/scissors.jpg\">")
		    break;
		  case "Paper":
		    $("#comp").html("<img src = \"images/paper.jpg\">")
		    break;
	  }
	});
	  $("#again").click(function(){
		 location.reload(); 
	  });
	});
	
	
}

function computerPlay(){
	let num = Math.floor((Math.random() * 3) + 1);
	let choice = ""
	switch(num){
		case 1:
		  choice = "Rock";
		  break;
		case 2:
		  choice = "Scissors";
		  break;
		case 3:
		  choice = "Paper";
		  break;
		default:
		  choice = "None";
	}
	return choice;
}

function playerTranslate(choice){
	let pChoice = choice.slice(7,-4);
	
	switch(pChoice){
		case "rock":
		  str = "Rock";
		  break;
		case "scissors":
		  str = "Scissors";
		  break;
		case "paper":
		  str = "Paper";
		  break;
		default:
		  str = "None"
	}
	return str;
}

function playerPlay(){
	
	let choice = prompt("Choose Rock, Paper, or Scissors");
	let pChoice = choice.toLowerCase();
	while( !(pChoice == "rock" || pChoice == "scissors" || pChoice =="paper")){
		choice = prompt("Choose Rock, Paper, or Scissors");
		pChoice = choice.toLowerCase();
	}
	let str = ""
	switch(pChoice){
		case "rock":
		  str = "Rock";
		  break;
		case "scissors":
		  str = "Scissors";
		  break;
		case "paper":
		  str = "Paper";
		  break;
		default:
		  str = "None"
	}
	return str;
}

function playRound(playerChoice, computerChoice){
	if(playerChoice == null || computerChoice == null){
		return;
	}
	
	if(playerChoice == "None" || computerChoice == "None"){
		return; //do more with this
	}
	
	let result = "";
	switch(playerChoice){
		case "Rock":
		  switch(computerChoice){
			  case "Rock":
			    result = "Draw";
			    break;
			  case "Scissors":
			    result = "Win";
			    break;
			  case "Paper":
			    result = "Lose";
			    break;
		  }
		  break;
		case "Paper":
		  switch(computerChoice){
			  case "Rock":
			    result = "Win";
			    break;
			  case "Scissors":
			    result = "Lose"
			    break;
			  case "Paper":
			    result = "Draw";
			    break;
		  }
		  break;
		case "Scissors":
		  switch(computerChoice){
			  case "Rock":
			    result = "Lose";
			    break;
			  case "Scissors":
			    result = "Draw";
			    break;
			  case "Paper":
			    result = "Win";
			    break;
		  }
		  break;
	}
	
	
	let r = ""
	if (result == "Draw"){
	  r = "Draw"
	}
	else{
	  r = "You " + result + "!";
	}
	return r;
}

game();