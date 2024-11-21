//Welcome Message//
let username = "username101";
let pagename = "Flashcards";
console.log(`Hello! Welcome, ${username} to Study Sphere's ${pagename}!`);

//Flashcard//
let = flashcard = [
    "Let this be question 1 / Let this be answer to question 1" ,
    "Let this be question 2 / Let this be answer to question 2" ,
    "Let this be question 3 / Let this be answer to question 3"
]

let index = 0;

let showQuestion = 1;

//We should display one question at a time if we can in JS//
let currentFlashcard = flashcard[index];
let splitFlashcard = currentFlashcard.split("/");
let display = showQuestion ? `Question: ${splitFlashcard[0]}`: `Answer: ${splitFlashcard[1]}`;
console.log(display);