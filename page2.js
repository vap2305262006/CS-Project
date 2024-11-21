//Welcome Message//
let username = "username101";
let pagename = "Flashcards";

console.log(`Hello! Welcome, ${username} to Study Sphere's ${pagename}!`);

//Flashcards, these will have the splice tool //
let questions = ["Let this be question 1", "Let this be question 2", "Let this be question 3"]
let answers = ["answer to question 1", "answer to question 2", "answer to question 3"];

//this could track the flashcard//
let currentIndex = 0;
let showQuestion = true; //This is a boolean//

let display = "Question: " + questions[currentIndex];

console.log(display);

//these actions will be used//
let actions = ["flip", "next", "flip", "next", "prev", "flip"];

//loop is from Q1 in lab 09 and previous lectures about JS//

for (let i = 0; i < actions.length; i++){
    let action = actions[i];
}

if (actions === "flip"){
    showQuestion = showQuestion === true ? false : true;
    display = showQuestion
    ? Question: " " + questions[currentIndex] ;
    "Answer: " + answers[currentIndex];
    console.log(display)
}