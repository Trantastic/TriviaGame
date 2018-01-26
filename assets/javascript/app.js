var correct = 0;
var incorrect = 0;
var count = 0;
var timer = 11;
var questionCycle;

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
	$("div").empty();
	$("#start-gif").html('<iframe src="https://giphy.com/embed/l41YtpfA6fY3Fj1Re" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/jonny-skater-dog-sk8r-l41YtpfA6fY3Fj1Re">via GIPHY</a></p>');
	$("#start").html("<button>Click to Start</button>");
	$("#start").on("click", function(){
		//Erases start button when trivia starts
		$("div").empty();
		$("#questions").html("<div>" + triviaBank[count].question + "</div>");
		for(var i = 0; i < 4; i++){
				$("#options").append("<button>" + triviaBank[count].options[i] + "</button>");
			}
		// New question every 15 sec
		var questionCycle = setInterval(nextQuestion, 1000 * 11);
		countDown();	
	});
}

function nextQuestion(){
	count++;

	if(timer === 0 && count !== 9){
		timer = 11;
		countDown();
		// Empties the div with previous answer options
		$("#options").empty();
	}
	//Goes straight to results page after 10 questions
	else if(count === 9){
		clearInterval(questionCycle);
		results();
		return;
	}

	$("#questions").html("<div>" + triviaBank[count].question + "</div>");
	// This will display options dependant on var count
	for(var i = 0; i < 4; i++){
		$("#options").append("<button>" + triviaBank[count].options[i] + "</button>");
	}
}

// Function triggers count down displayed in UI
function countDown(){
	timer--;

	if(timer > 0){
		setTimeout(countDown , 1000);
		// call function to show gif/image page
	}
	$("#count-down").html("<div>Time Left: " + timer + "</div>");
}

// Triggers results page with correct/incorrect
function results(){
	$("div").empty();
	$("#correct").html("<div>You got " + correct + " correct!</div>");
	$("#incorrect").html("<div>You got " + incorrect + " incorrect!</div>");
	$("#result-gif").html('<iframe src="https://giphy.com/embed/3boPPdHk2ueo8" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dog-puppy-dachshund-3boPPdHk2ueo8">via GIPHY</a></p>');
	$("#again").html("<button>Play Again?</button");
		$("#again").on("click", startGame);
}







