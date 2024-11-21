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

//Loops can be used for navigation maybe?//

let useraction = [`Flip`, `Next`, `Flip`, `Prev`, `Flip`, `Next`, `Next`, `Flip`];

//This function is using the same layout as question 1 in lab 09//
for (let i = 0; i < useraction.length; i++){
    let action = useraction[i];


    if (action === `Flip`){
        showQuestion = 1 - showQuestion;
        //these are elements that I applied from the lecture where we were taught else if, if, functions// 
        display = showQuestion ? `Question: ${splitFlashcard[0]}` : `Answer: ${splitFlashcard[1]}`;
        
        //this console log is only for this specific action for flip i believe?//
        console.log(display);
    }
    //the next function should display if action for `Next`//


    //the next function should display if action for `Prev`//
}