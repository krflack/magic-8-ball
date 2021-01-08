$(document).ready(function(){

var magic8Ball = {};
magic8Ball.listOfAnswers = ["yes", "no", "maybe", "not today", "we will see", "wait"];

$("#answer").hide();

//define the method
magic8Ball.askQuestion = function(question)
{
	$("#answer").hide();
	$("#answer").fadeIn(4000);
	//create a random number
	var randomNumber = Math.random();
	//make the random number between 0 and the number in your array
	var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
	//round down the number to be a whole number
	var randomIndex = Math.floor(randomNumberForListOfAnswers);
	//use that number to index a random number from the answers array
	var answer = this.listOfAnswers[randomIndex];

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

$("#answer").text(answer);

	console.log(question);
	console.log(answer);
};

//question when button clicked
var onClick = function () {
	$("#answer").hide();

	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
//wait half a second before showing prompt
	setTimeout(
		function() {
			//show prompt
	var question = prompt("Ask a Yes/No question!");
	$("#8ball").effect("shake");
	magic8Ball.askQuestion(question);
		}, 500);
};

$("#questionButton").click( onClick );
//magic8Ball.askQuestion("Am I cool?");

});
