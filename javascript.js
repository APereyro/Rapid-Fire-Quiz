// We need to track which question we are currently on
var QIndex = 0;
var time = 70;
var userScores = "";
var optionA = document.getElementById("optionA").value
var optionB = document.getElementById("optionB").value
var optionC = document.getElementById("optionC").value
var optionD = document.getElementById("optionD").value


var chosenAnswer = "";

var questions = [
    {
        q:"How to make a variable",
        answers:["var","make","do it"],
        a:"var"
    },
    {
        q:"How to make a function",
        answers:["makeFunction()","createOne()","function"],
        a:"function"
    }
]
var startButton = document.getElementById("startButton");
startButton.addEventListener("click", hidingText);
var questionTitles = document.querySelector(".questionTitles")

function hidingText(){
    var boldText = document.querySelector(".boldText");
    var smallText = document.querySelector(".smallText");
    if (boldText.style.display === "none") {
        boldText.style.display = "block";
        smallText.style.display = "block";
        startButton.style.display = "block";
    } else {
        // questionTitles.innerHTML = questions[QIndex].q;
        boldText.style.display = "none";
        smallText.style.display = "none";
        startButton.style.display = "none";
        questionTitles.style.display = "block";
        showQuestion()
    } 
}

function userPickedThisChoice() {
    if(optionA){
        chosenAnswer = optionA
    }
    if(optionB){
        chosenAnswer = optionB
    }
}

function showQuestion() {
    // Check if all questions have been displayed
    if (QIndex >= questions.length) {
        questionTitles.innerHTML = "Quiz completed";
        return;
    }
    questionTitles.innerHTML = questions[QIndex].q;
}




/**
 * @description at the end of quiz we want to save a users high score. At the end we need to capture the users initials from the text area. 
 * var getInitials = document.getElementById("userInitials").value
 * const saveUsersHighScore = () => {
    localStorage.setItem(getInitials, userScored)
    }
 * 
 */



// The Questions should be stored in an array (Each One is an Object)

// A function to make sure we can start from the very beginning
// start = (i) => {
// put the time on the page
// start ther timer
// var timer = setInterval(function(){
//     time--;
    // update the page with the time.
// },1000)
// qDiv.textContent = questions[i].q
// loop over the questions[i].answers

// add the click handler to the answers button

// append these to the answers div

// }
// create a funtion to handle the button click
// function getAnswer(params) {
    // check the clicked button for the correct answer
// }
// start(QIndex)
