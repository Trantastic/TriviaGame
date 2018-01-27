var correct = 0;
var incorrect = 0;
var count = 0;
var timer = 11;
var questionCycle;

// Objects in an array. Holds questions, answers, and options
var triviaBank = [{
        "question": "Which famous Pomeranian (proclaimed as the World’s Cutest Dog) has over 17 million Facebook likes?",
        "answer": "Boo",
        "options": ["Boo", "Toto", "Lassie", "Bobo"]
    },
    {
        "question": "What is the term when a doggo stretches out on their belly with their back paws out?",
        "answer": "Sploot",
        "options": ["Toot", "Scoot", "Sploot", "Chilling"]
    },
    {
        "question": "Contrary to the myth, dogs can see in color. Which shades of color can dogs see?",
        "answer": "Blue, yellow, and green",
        "options": ["Blue and red", "Only blue", "Blue, yellow, and red", "Blue, yellow, and green"]
    },
    {
        "question": "What family friendly Disney movie depicts 2 dogs and a cat on an incredible journey through the wilderness back to their owners in San Francisco?",
        "answer": "Homeward Bound",
        "options": ["The Incredible Journey", "Homeward Bound", "The Lost Pets", "Cujo"]
    },
    {
        "question": "Which breed of dog is the most popular in the United States?",
        "answer": "Labrador Retriever",
        "options": ["Golden Retriever", "Labrador Retriever", "American Bulldog", "German Shepherd"]
    },
    {
        "question": "Popular in gifs, where do you “boop” a dog?",
        "answer": "Their nose",
        "options": ["Their eye", "Their paw", "Their nose", "Their butt"]
    },
    {
        "question": "Which internet term for dogs does not belong?",
        "answer": "Purrito",
        "options": ["Pupperino", "Fluffers", "Loaf", "Purrito"]
    },
    {
        "question": "What popular twitter account popularized the phrase “they’re good dogs Brent” and has since exploded into a popular meme?",
        "answer": "WeRateDogs",
        "options": ["WeRateDogs", "DogsAreAwesome", "DogWatcher", "ThoughtsOfDog"]
    },
    {
        "question": "Popularly known as the doge meme, which breed of dog is depicted in this meme? (Hint: Most of the time this meme consists of just the dog’s head or facial expression with multi-colored text in Comic Sans)",
        "answer": "Shiba Inu",
        "options": ["Golden Retriever", "Chihuahua", " Siberian Husky", "Shiba Inu"]
    },
    {
        "question": "Which fact is true about dogs?",
        "answer": "All of the above.",
        "options": ["They are a Hooman’s best friend.", "Are better than cats.", "Dogs can read facial expressions.", "All of the above."]
    }
];

var resultImages = ['<iframe src="https://giphy.com/embed/GNZm74drwTkDm" width="480" height="357" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/GNZm74drwTkDm">via GIPHY</a></p>',
    '<iframe src="https://giphy.com/embed/u8B3oAJRmAgIU" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pup-u8B3oAJRmAgIU">via GIPHY</a></p>',
    '<iframe src="https://giphy.com/embed/K3xt5Z4FxCLsY" width="480" height="313" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dog-walking-K3xt5Z4FxCLsY">via GIPHY</a></p>',
    '<iframe src="https://giphy.com/embed/LdPoviVCWgLf2" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/LdPoviVCWgLf2">via GIPHY</a></p>',
    '<iframe src="https://giphy.com/embed/26FeXjgN0RbzXqfx6" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/what-japan-song-26FeXjgN0RbzXqfx6">via GIPHY</a></p>',
    '<iframe src="https://giphy.com/embed/lABlHNPhzBQgE" width="480" height="327" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/boop-snoot-updoots-lABlHNPhzBQgE">via GIPHY</a></p>',
    '<iframe src="https://giphy.com/embed/2k353aEp9K6EU" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/time-purrito-2k353aEp9K6EU">via GIPHY</a></p>',
    '<img src="assets/images/weRateDogs.jpg">',
    '<img src="https://i.imgflip.com/13zni4.jpg">',
    '<iframe src="https://giphy.com/embed/26FPqut4lzK3AECEo" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cheezburger-dog-cage-fluff-26FPqut4lzK3AECEo">via GIPHY</a></p>'
];

startGame();

// Creates the start button, which triggers game start
function startGame() {
    // Resets variables if game is called again
    var correct = 0;
    var incorrect = 0;
    // Clears out previous content
    $("section").empty();
    $("#start-img").html('<a href="https://imgflip.com/i/23dssx"><img src="https://i.imgflip.com/23dssx.jpg" title="made at imgflip.com"/></a>');
    $("#start").html("<button>Click to Start</button>");
    $("#start").on("click", function() {
        //Erases start button when trivia starts
        $("section").empty();
        $("#questions").html("<div>" + triviaBank[count].question + "</div>");
        for (var i = 0; i < 4; i++) {
            $("#options").append("<button>" + triviaBank[count].options[i] + "</button>");
        }
        // New question every 15 sec

        var questionCycle = setInterval(nextQuestion, 1000 * 11);
        countDown();
        initiateAnswer();
    });
}

function nextQuestion() {
    count++;
    $("section").empty();

    if (timer === 0 && count <= 9) {
        $("#questions").html("<div>" + triviaBank[count].question + "</div>");
        timer = 11;
        countDown();
        initiateAnswer();
        // Empties the div with previous answer options
        $("#options").empty();
    }
    //Goes straight to results page after 10 questions
    else if (count === 10) {
        $("section").empty();
        clearInterval(questionCycle);
        results();
    }
    // This will display options dependant on var count
    for (var i = 0; i < 4; i++) {
        $("#options").append("<button>" + triviaBank[count].options[i] + "</button>");
    }
}

// Function triggers count down displayed in UI
function countDown() {
        timer--;

        if (timer > 0) {
            setTimeout(countDown, 1000);
            initiateAnswer();
        } else if (timer === 0) {
            clearInterval(questionCycle);
            initiateAnswer();
        }
        $("#count-down").html("<div><b>Time Left: " + timer + "<b></div>");
}

// Triggers results page with correct/incorrect
function results() {
    $("section").empty();
    $("#correct").html("<div>You got " + correct + " correct!</div>");
    $("#incorrect").html("<div>You got " + incorrect + " incorrect!</div>");
    $("#result-gif").html('<iframe src="https://giphy.com/embed/3boPPdHk2ueo8" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dog-puppy-dachshund-3boPPdHk2ueo8">via GIPHY</a></p>');
    $("#again").html("<button>Play Again?</button");
    // Calls startGame if clicked
    $("#again").on("click", startGame);
    clearInterval(questionCycle);
    // resets in case player wants to play again
    var count = 0;
}

function initiateAnswer() {
    if (timer === 0) {
        $("section").empty();
        $("#incorrect").append("You ran out of time. The right answer is " + triviaBank[count].answer + "!");
        $("#correct").append(resultImages[count]);
        incorrect++;
        clearInterval(questionCycle);
    }
    $("button").on("click", function() {
        if ($(this)[0].innerText === triviaBank[count].answer) {
            $("section").empty();
            $("#correct").append("Woohoo! Congratulations. You got it right!");
            $("#correct").append(resultImages[count]);
            correct++;
            clearInterval(questionCycle);
        } else {
            $("section").empty();
            $("#incorrect").append("You got it wrong. The right answer is " + triviaBank[count].answer + "!");
            $("#correct").append(resultImages[count]);
            incorrect++;
            clearInterval(questionCycle);
        }
    });
}