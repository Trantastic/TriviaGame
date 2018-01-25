/*
Create a START page
	<button> to trigger start of the game


		Each question triggers 15sec timer
		Radio buttons for choices A-D
			If/else statements
				if === correct answer
					points++
					call function to show congratulating page
						call timer to trigger next question after 5sec
				
				else if player runs out of time
					call function to show player is wrong and correct answer
						call timer to trigger next question after 5sec
				else
					wrong++
					call function to show player is wrong and correct answer
						call timer to trigger next question after 5sec
		End of loop trigger endOfGame function
			Display:
				You got x out of x correct
				Answers correct: x
				Answers wrong: x
				Do you want to play again?
					<button> to trigger loop function without
					refreshing page


*/
var correct;
var wrong;
var count = 1;
var timer = 5;
var questionCycle;

var questionBank = ["Which famous Pomeranian (proclaimed as the World’s Cutest Dog) has over 17 million Facebook likes?", 
"What is the term when a doggo stretches out on their belly with their back paws out?", 
"Contrary to the myth, dogs can see in color. Which shades of color can dogs see?", 
"What family friendly Disney movie depicts 2 dogs and a cat on an incredible journey through the wilderness back to their owners in San Francisco?", 
"Which breed of dog is the most popular in the United States?", 
"Popular in gifs, where do you “boop” a dog?", 
"Which internet term for dogs does not belong?", 
"What popular twitter account popularized the phrase “they’re good dogs Brent” and has since exploded into a popular meme?", 
"Popularly known as the doge meme, which breed of dog is depicted in this meme? (Hint: Most of the time this meme consists of just the dog’s head or facial expression with multi-colored text in Comic Sans)", 
"Which fact is true about dogs?"];

// Click events to start or restart game
$("#start").on("click", startGame);
$("#next").on("click", nextQuestion);


function startGame(){
	$("#questions").html("<div>" + questionBank[0] + "</div>");
	var questionCycle = setInterval(nextQuestion, 1000 * 5);
	countDown();
}

function nextQuestion(){
	$("#questions").html("<div>" + questionBank[count] + "</div>");
	count++;

	// if(count === 10){
	// clearInterval(questionCycle);
	// 	//call function for result page
	// }

}

// function triggers count down displayed in UI
function countDown(){
	timer--;
	console.log(timer);
	
	if(timer > 0){
		setTimeout(countDown , 1000);
		// call function to show gif/image page
	}
	// if timer runs out go on to next page
	else if(timer === 0){
		// call function to show gif/image page
		timer = 5;
		countDown();
	}

	$("#count-down").html(timer);
}








