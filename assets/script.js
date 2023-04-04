//Quiz will start with 60 seconds
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

var shuffledQuestions, currentQuestionIndex;

//start button transitions into the first question
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
});

//time starts
function timeTick() {
    timeLeft--;
    timerEl.textContent = "Time; " + timeLeft;
    if(timeLeft <= 0) {
        saveScore();
    }
}

//Starting quiz
function startGame() {
    timerID = setInterval(timeTick, 1000);
    startContainerEl.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove("hide");

    //Timer starts when the start button is clicked
    timeTick();
    setNextQuestion();
};

//Next Question
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

//Questions are shown
function showQuestion(question) {
    questionEl.innerText = question.question
    question.answer.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsEl.appendChild(button)
    })
};


//Reset function
function resetState() {
    nextButton.classList.add("hide")
    checkAnswerEl.classList.add("hide")
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild)
    }
};


//select answer
function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    checkAnswerEl.classList.remove("hide");
    if (correct) {
        checkAnswerEl.innerHTML = "Correct!";
    } else {
        checkAnswerEl.innerHTML = "Incorrect";
        if (timeLeft <= 15) {
            timeLeft = 0;
        }else {
            //if answer is wrong 15 seconds will be taken out
            timeLeft -= 15;
        }
    }

    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
        checkAnswerEl.classList.remove("hide")
    }else{
        startButton.classList.remove("hide")
        saveScore();
    }
};

//shows correct answer by the buttons colors
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct");
    }else {
        element.classList.add("wrong");
    }
};

//classes are removed
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
};


//scores are saved
function saveScore() {
    clearInterval (timerID);
    timerEl.textContent = "Time: " + timeLeft;
    setTimeout(function () {
        questionContainerEl.classList.add("hide");
        document.getElementById("score-container").classList.remove("hide");
        document.getElementById("your-score").textContent = "Your final score is " + timeLeft;
    }, 2000)
};

var loadScores = function () {
    //scores are pulled from local storage

    if (!savedScores) {
        return false;
    }

    savedScores = JSON.parse(savedScores);
    var name = document.querySelector("#name-field").value;
    var newScore = {
        score: timeLeft,
        name: name
    }

    savedScores.push(newScore);
    console.log(savedScores)

    savedScores.forEach(score => {
        nameField.innerText = score.name
        scoreField.innerText = score.score
    })
};


//high scores are shown
function showHighScores(name) {
    document.getElementById("highscores").classList.remove("hide");
    document.getElementById("score-container").classList.add("hide");
    startContainerEl.classList.add("hide");
    questionContainerEl.classList.add("hide");
    if (typeof name == "string") {
        var score = {
            name, timeLeft
        }
        scores.push(score)
    }

    var highScoreEl = document.getElementById("highscore");
    highScoreEl.innerHTML = "";

    for (i = 0; 1 < scores.length; i++) {
        var div1 = document.createElement("div");
        div1.setAttribute("class", "name-div");
        div1.innerText = scores[i].name;
        var div2 = document.createElement("div");
        div2.setAttribute("class", "score-div");
        div2.innerText = scores[i].timeLeft;

        highScoreEl.appendChild(div1);
        highScoreEl.appendChild(div2);
    }

    localStorage.setItem("scores", JSON.stringify(scores));
};

viewHighScores.addEventListener("click",showHighScores);


submitButton.addEventListener("click", function (event) {
    event.preventDefault()
    var name = document.querySelector("#name-field").value;
    showHighScores(name);
});


//restart and reload
restartButton.addEventListener("click", function () {
    window.location.reload();
});


clearScoreButton.addEventListener("click", function () {
    localStorage.clear();
    document.getElementById("highscore").innerHTML = "";
});










