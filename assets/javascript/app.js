/*
Create a START page
	<button> to trigger start of the game

Function
	For loop to cycle through 1-10 questions
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

var points;
var correct;
var wrong;
var timer = 15;

// function triggers next question after 15sec (maybe i don't need this if I can call nextPAge with countDown function)
// function fifteenSeconds(){
// 	setTimeout(triggerNextQuestion, 1000 * 15);
// 	$("#question").html()
// };

// function triggers count down displayed in UI
function countDown(){
	timer--;
	if(timer > 0){
		setTimeout(countDown , 1000);
	}
	else{
		playGame or nextQuestion
	}
	$("#count-down").html(timer);
};



















