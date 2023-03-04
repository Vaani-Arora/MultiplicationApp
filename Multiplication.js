const num1 = Math.ceil( Math.random()*10);
//console.log(num1);
const num2 = Math.ceil( Math.random()*10);
const question = document.getElementById("question");
const form = document.getElementById("form");
const input = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = "score: " + " " + score;

question.innerText = 'What is' + " " + num1 + " " + 'multiple by' + " " + num2 + " " + '?';

const correctAns = num1*num2 ;

form.addEventListener("submit" , ()=> {
    const userAns = +input.vale
    //console.log(userAns, typeof userAns); 
    if (userAns === correctAns){
        score++;
        updateLocalStorage();
    }
    else {
        score--;
        updateLocalStorage();
    }
 
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));

}

