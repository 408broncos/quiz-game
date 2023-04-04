# quiz-game

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Javascript    | [https://www.w3schools.com/js/js_timing.asp](https://www.w3schools.com/js/js_timing.asp)  
| Javascript    | [https://www.w3schools.com/js/js_window_screen.asp](https://www.w3schools.com/js/js_window_screen.asp) 
| Javascript    | [https://stackoverflow.com/questions/38669034/adding-subtracting-time-from-a-countdown-in-javascript](https://stackoverflow.com/questions/38669034/adding-subtracting-time-from-a-countdown-in-javascript) 
| Javascript    | [https://www.w3schools.com/js/js_functions.asp](https://www.w3schools.com/js/js_functions.asp) 


## Description 

[Visit the Deployed Site](https://408broncos.github.io/quiz-game/)

For this project I was given a new task that, in my opinion, was a lot more difficult than the other homework assignments I was given. In this homework we were told that our user was wanting a timed quiz that would display questions and have a list of multiple choices. If an answer was chosen for a question, and the answer was wrong, a set amount of seconds, 15 in my project, would be subtracted from the timer. When the answer was correct it would transition to the next question and so forth till the questions are done or you subtract too much time. At the end of the quiz a score would be displayed and an option to save your score and write your name under the score.


## Code Examples

Here I will be showing a couple of examples of some codes I was stuck on but eventually discovered the solutions.

Here are the examples:


```js
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
            timeLeft -= 15;
        }
    }
};
```

For this I was really struggling with, first, where to even start. Second once I discovered what I needed to look up and research I struggled how to incorporate what I was reading to what I was trying to make. I soon discovered that I need to create seperate variables for each corresponding element. I also realised I needed to make my if and else statments with the correct string attachments. And then lastly, write out how much time I wanted to take out with every incorrect answer.

Here is another example that I struggled with:

```js
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


```
In this code the same thing with the code shown above, happened here. I spent a long time figuring out where to even start and how to implement all of my research into what I was creating. I realised that I needed a way to grab the "highscore" and add a "score-container" class so that I could continue adding my variables. After adding the variables I was then able to add my if statment to have the name and timeLeft as the high score.

## Usage 

For usages I found that all of the websites I used and past activities to be extremely useful, I think more so with the activities. 

## Learning Points 


This project for me really taught me how to be patient and always look up questions when I'm feeling lost. I was also able to learn a lot about new functions, methods and also a huge plus, I was able to learn how to make a timed quiz.


## Author Info

### Jordan Cardenas 

* [LinkedIn](https://www.linkedin.com/in/jordan-cardenas-87a58520b/)
* [Github](https://github.com/408broncos)

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
