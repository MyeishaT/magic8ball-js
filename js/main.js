let question = document.getElementById('question');
let answers = [
    'magic8ball_1.png',
    'magic8ball_2.png',
    'magic8ball_3.png',
    'magic8ball_4.png',
    'magic8ball_5.png',
    'magic8ball_6.png',
    'magic8ball_7.png',
    'magic8ball_8.png',
    'magic8ball_9.png',
    'magic8ball_10.png',
    'magic8ball_11.png',
    'magic8ball_12.png',
    'magic8ball_13.png',
    'magic8ball_14.png',
    'magic8ball_15.png',
    'magic8ball_16.png',
    'magic8ball_17.png',
    'magic8ball_18.png',
    'magic8ball_19.png',
    'magic8ball_20.png'
]
let answer = document.getElementById('magic8ball');

// console.log(question);
// console.log(answers);

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }
  
function ask(){
    if(question.value === ""){
        alert("Sorry, please ask again!");
    }
    else{
        answer.src = `../img/`+ answers[getRandomIndex(answers.length)]
     }
    // console.log(answer.src);
    }
