var correct;
var wrong;
var count = 0;
var timer = 11;

// Objects in an array. Holds questions, answers, and options
var triviaBank = 
[{"question": "Which famous Pomeranian (proclaimed as the World’s Cutest Dog) has over 17 million Facebook likes?",
"answer": "Boo",
"options": ["Boo", "Toto", "Lassie", "Bobo"]},
{"question": "What is the term when a doggo stretches out on their belly with their back paws out?",
"answer": "Sploot",
"options": ["Toot", "Scoot", "Sploot", "Chilling"]},
{"question": "Contrary to the myth, dogs can see in color. Which shades of color can dogs see?",
"answer": "Blue, yellow, and green",
"options": ["Blue and red", "Only blue", "Blue, yellow, and red", "Blue, yellow, and green"]},
{"question": "What family friendly Disney movie depicts 2 dogs and a cat on an incredible journey through the wilderness back to their owners in San Francisco?",
"answer": "Homeward Bound",
"options": ["The Incredible Journey", "Homeward Bound", "The Lost Pets", "Cujo"]},
{"question": "Which breed of dog is the most popular in the United States?",
"answer": "Labrador Retriever",
"options": ["Golden Retriever", "Labrador Retriever", "American Bulldog", "German Shepherd"]},
{"question": "Popular in gifs, where do you “boop” a dog?",
"answer": "Their nose",
"options": ["Their eye", "Their paw", "Their nose", "Their butt"]},
{"question": "Which internet term for dogs does not belong?",
"answer": "Purrito",
"options": ["Pupperino", "Fluffers", "Loaf", "Purrito"]},
{"question": "What popular twitter account popularized the phrase “they’re good dogs Brent” and has since exploded into a popular meme?",
"answer": "WeRateDogs",
"options": ["WeRateDogs", "DogsAreAwesome", "DogWatcher", "ThoughtsOfDog"]},
{"question": "Popularly known as the doge meme, which breed of dog is depicted in this meme? (Hint: Most of the time this meme consists of just the dog’s head or facial expression with multi-colored text in Comic Sans)",
"answer": "Shiba Inu",
"options": ["Golden Retriever", "Chihuahua"," Siberian Husky", "Shiba Inu"]},
{"question": "Which fact is true about dogs?",
"answer": "All of the above.",
"options": ["They are a Hooman’s best friend.", "Are better than cats.", "Have evolved to recognize pointing and reading facial expressions.", "All of the above."]}];
startGame();
// Creates the start button, which triggers game start
function startGame(){
	$("#start").html("<button>Click to Start</button>");
	$("#start").on("click", function(){
		//Erases start button when trivia starts
		$("#start").empty();
		$("#questions").html("<div>" + triviaBank[count].question + "</div>");
		// New question every 15 sec
		var questionCycle = setInterval(nextQuestion, 1000 * 11);

		count++;

		countDown();

			// This will display options dependant on var count
			$("#options").append("<button>" + triviaBank[count].options[i] + "</button>");		
	});
}

function nextQuestion(){
	console.log(count);
	count++;
	

	if(timer === 0){
		timer = 11;
		countDown();
	}
	$("#questions").html("<div>" + triviaBank[count].question + "</div>");

	// if(count === 10){
	// clearInterval(questionCycle);
	// 	//call function for result page
	// }

}

// function triggers count down displayed in UI
function countDown(){
	timer--;
	console.log(timer);
	
	// setInterval(countDown, 1000);
	if(timer > 0){
		setTimeout(countDown , 1000);
		// call function to show gif/image page
	}
	// if timer runs out go on to next page
	// if(timer === 0){
	// 	// call function to show gif/image page
	// 	timer = 5;
	// 	// countDown();
	// }

	$("#count-down").html(timer);
}








