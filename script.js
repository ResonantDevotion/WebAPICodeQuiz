// variable to assign player points
let points = 0;

// variable to assign questions with associated answers
let questions = [
    {
        name: 'document.getElementById is followed with...',
        choices: ['(#element)', '("element")', '(element)'],
        answer: '("element")',
    },
    {
        name: 'How do you add an attribute to HTML w JS',
        choices: ['variable.setAttribute', 'variable.SetAttribute', 'variable.style.attribute'],
        answer: 'variable.setAttribute',
    }
]

// Assigning variables to elements in the HTML to use here in JS.
let startButton = document.getElementById('start')
let startDiv = document.getElementById('start-screen')
let questionS = document.getElementById('questions')
let questionTitle = document.getElementById('question-title')
let choices = document.getElementById('choices')
let endScreen = document.getElementById('end-screen')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')

//linking to html timer ID
let time = document.getElementById('time');

//Setting the initial countdown time
let timeLeft = 60;

//Making the countdown function
function setTime(){
    let timerInterval = setInterval (function(){
        //So the timer knows to reduce in time
        timeLeft --;

        time.textContent = timeLeft;

        if (timeLeft === 0){
            //stops the timer from counting down further than 0
            clearInterval(timerInterval);
        };

        // if (answer == false){
        //     timeLeft = timeLeft - setInterval(5000)
        // };

    // Defines the countdown rate out of miliseconds
    }, 1000);
}


// Variable to use as question number indicator to loop through questions.
let counter = 0


// Event listener on start button so that quiz starts on click
startButton.addEventListener('click', function () {

    setTime();

    //The start page disappears and question 'page' appears
    startDiv.classList.add("hide");
    questionS.classList.remove("hide");

    //Assigns variable to first question and links it to Q array.
    let firstQuestion = questions[0];

    //Fills in the content of the html Q title with the Question.
    questionTitle.textContent = firstQuestion.name;

    //Fills in the content of the html buttons w the 1st Q choices.
    button1.textContent = firstQuestion.choices[0];
    button2.textContent = firstQuestion.choices[1];
    button3.textContent = firstQuestion.choices[2];

    // 
    button1.addEventListener('click', function (){
        if 
    })



})




let nextQuestion = function(params) {
    counter++;

    if (counter >= questions.length){
        endScreen.classList.remove("hide");
        questionS.classList.add("hide");
        return;
    }

    let currentQuestion = questions[counter];
    questionTitle.textContent = currentQuestion.name;

    button1.textContent = currentQuestion.choices[0];
    button2.textContent = currentQuestion.choices[1];
    button3.textContent = currentQuestion.choices[2];


}















button1.addEventListener('click', nextQuestion);
button2.addEventListener('click', nextQuestion);
button3.addEventListener('click', nextQuestion);


//Timer
//Local storage score
//Check answers
//display scores



// Question 1 
// let questionOne = document.createElement (firstQuestion);
// questionOne.textContent = "How do you create a timer using Javascript?";
// document.body.location of startQuiz button.appendChild(questionOne);

