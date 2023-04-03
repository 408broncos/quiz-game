const questions = [
	{
		"id": 2,
		"question": "Which of the following is the correct syntax to redirect a URL using JavaScript?",
		"options": {
			"a": "window.location.href",
			"b": "document.querySelector",
			"c": "document.getElementById",
			"d": "location.href"
		},
		"answer": "a"
	},
	{
		"id": 2,
		"question": "How would you start a class element in css?",
		"options": {
			"a": "<",
			"b": "#",
			"c": ".",
			"d": "!"
		},
		"answer": "c"
	},
	{
		"id": 2,
		"question": "What is the function to start with when wanting to use a timer?",
		"options": {
			"a": "function timer",
			"b": "function math.floor",
			"c": "function timerInterval",
			"d": "function setTime"
		},
		"answer": "d"
	},
	{
		"id": 2,
		"question": "What does HTML stand for?",
		"options": {
			"a": "How to Make Language",
			"b": "Hypertext Markdown Language",
			"c": "Hypertext Markup Language",
			"d": "Hitting the Mushy Lake"
		},
		"answer": "c"
	},
	{
		"id": 2,
		"question": "What is the correct element to start with in HTML when wanting to add a picture?",
		"options": {
			"a": "<li>",
			"b": "<link>",
			"c": "<src>",
			"d": "<img>"
		},
		"answer": "a"
	},
	{
		"id": 2,
		"question": "Which object is used to hold data that represents a text form?",
		"options": {
			"a": "Alert",
			"b": "String",
			"c": "Null",
			"d": "Boolean"
		},
		"answer": "b"
	}
];

var timeLeft = 60;
var timerID;
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var startContainerEl = document.getElementById("start-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var checkAnswerEl = document.getElementById("check-answer");
var viewHighScores = document.getElementById("highscore-link");
var submitButton = document.getElementById("submit-btn");
var clearScoreButton = document.getElementById("clear-btn");
var nameField = document.getElementById("player-name");
var restartButton = document.getElementById("restart-btn");
var scoreField = document.getElementById("player-score");
var scores = JSON.parse(localStorage.getItem("scores")) || [];










