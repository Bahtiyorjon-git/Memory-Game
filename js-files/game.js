const difficulty = document.getElementById('difficulty');
const startBtn = document.getElementById('start-button');
const bigScreen = document.getElementById('showing-num-input');
const enterNumInputs = document.querySelectorAll('.entering-num-inputs');
const finishAndCheck = document.getElementById('finish-btn');
const resultShown = document.getElementById('result-shown');
const timerSpan = document.getElementById('timer-span');
const rewardImage = document.getElementById('reward-animation-image');
const rewardText = document.getElementById('reward-animation-text');
const seeRewardA = document.getElementById('see-reward-a');

const sound = new Audio("../sounds/numberSound.mp3");
function playSound() {  //every number sound
    sound.currentTime = 0; 
    sound.play();
}

const congrats = new Audio("../sounds/congratulations.mp3");
function congratulate(){
    congrats.currentTime = 0;
    congrats.play();
}
const failSound = new Audio("../sounds/fail.mp3");
function fail(){
    failSound.currentTime = 0;
    failSound.play();
}

let countDown30 = new Audio("../sounds/countDown30.mp3");


const enterNumInput1 = document.getElementById('enter-input-1');
const enterNumInput2 = document.getElementById('enter-input-2');
const enterNumInput3 = document.getElementById('enter-input-3');
const enterNumInput4 = document.getElementById('enter-input-4');
const enterNumInput5 = document.getElementById('enter-input-5');
const enterNumInput6 = document.getElementById('enter-input-6');
const enterNumInput7 = document.getElementById('enter-input-7');
const enterNumInput8 = document.getElementById('enter-input-8');
const enterNumInput9 = document.getElementById('enter-input-9');
const enterNumInput10 = document.getElementById('enter-input-10');

const enterInputDiv1 = document.getElementById('enter-input-div-1');
const enterInputDiv2 = document.getElementById('enter-input-div-2');
const enterInputDiv3 = document.getElementById('enter-input-div-3');
const enterInputDiv4 = document.getElementById('enter-input-div-4');
const enterInputDiv5 = document.getElementById('enter-input-div-5');
const enterInputDiv6 = document.getElementById('enter-input-div-6');
const enterInputDiv7 = document.getElementById('enter-input-div-7');
const enterInputDiv8 = document.getElementById('enter-input-div-8');
const enterInputDiv9 = document.getElementById('enter-input-div-9');
const enterInputDiv10 = document.getElementById('enter-input-div-10');

let result = [];



let min = 0;
let max = 9;
let randomNumbers = [];
function solid(){
    for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
}

let index = 0;
let order = 1;

setTimeout(() => {
    let intervalId = setInterval(() => {
        if (index < randomNumbers.length) {
            bigScreen.value = `${order})  ${randomNumbers[index]}`;
            playSound();
            index++;
            order++;
        } else {
            clearInterval(intervalId);
            setTimeout(() => {
                bigScreen.value = "";
            }, 1000);
        }
    }, 2000);
}, 3000);

setTimeout(() => {
    enterNumInputs.forEach(input => {
    input.removeAttribute('readonly');
    });
}, 24000);
setTimeout(() => {
  enterNumInputs.forEach(input => {
    input.setAttribute('readonly', true);
  });
}, 54000);

setTimeout(() => {
    countDown30.currentTime = 0;
    countDown30.play().catch(err => console.log("Audio error:", err));

    let count = 30;

    const interval = setInterval(() => {
    timerSpan.innerHTML = `Enter numbers in 00: ${count} <i class="fa-solid fa-circle-exclamation fa-bounce" style="color: #ff0000;"></i>`;
    count--;

    if (count < 0) {
      clearInterval(interval); 
          timerSpan.innerHTML = 'You can not enter now !!!';
    }
  }, 1000);
}, 23000);


finishAndCheck.addEventListener('click', function(){
    if(parseInt(enterNumInput1.value) === randomNumbers[0]){
        enterInputDiv1.innerHTML += '<i class="fa-solid fa-square-check fa-fade" style="color: #08f724;"></i>';
        result.push(1);
    }else {
        enterInputDiv1.innerHTML += '<i class="fa-solid fa-square-xmark fa-fade" style="color: #fa0000;"></i>';
    }

    if(parseInt(enterNumInput2.value) === randomNumbers[1]){
        enterInputDiv2.innerHTML += '<i class="fa-solid fa-square-check fa-fade" style="color: #08f724;"></i>';
        result.push(1);
    }else {
        enterInputDiv2.innerHTML += '<i class="fa-solid fa-square-xmark fa-fade" style="color: #fa0000;"></i>';
    }

    if(parseInt(enterNumInput3.value) === randomNumbers[2]){
        enterInputDiv3.innerHTML += '<i class="fa-solid fa-square-check fa-fade" style="color: #08f724;"></i>';
        result.push(1);
    }else {
        enterInputDiv3.innerHTML += '<i class="fa-solid fa-square-xmark fa-fade" style="color: #fa0000;"></i>';
    }

    if(parseInt(enterNumInput4.value) === randomNumbers[3]){
        enterInputDiv4.innerHTML += '<i class="fa-solid fa-square-check fa-fade" style="color: #08f724;"></i>';
        result.push(1);
    }else {
        enterInputDiv4.innerHTML += '<i class="fa-solid fa-square-xmark fa-fade" style="color: #fa0000;"></i>';
    }

    if(parseInt(enterNumInput5.value) === randomNumbers[4]){
        enterInputDiv5.innerHTML += '<i class="fa-solid fa-square-check fa-fade" style="color: #08f724;"></i>';
        result.push(1);
    }else {
        enterInputDiv5.innerHTML += '<i class="fa-solid fa-square-xmark fa-fade" style="color: #fa0000;"></i>';
    }

    if(parseInt(enterNumInput6.value) === randomNumbers[5]){
        enterInputDiv6.innerHTML += '<i class="fa-solid fa-square-check fa-fade" style="color: #08f724;"></i>';
        result.push(1);
    }else {
        enterInputDiv6.innerHTML += '<i class="fa-solid fa-square-xmark fa-fade" style="color: #fa0000;"></i>';
    }

    if(parseInt(enterNumInput7.value) === randomNumbers[6]){
        enterInputDiv7.innerHTML += '<i class="fa-solid fa-square-check fa-fade" style="color: #08f724;"></i>';
        result.push(1);
    }else {
        enterInputDiv7.innerHTML += '<i class="fa-solid fa-square-xmark fa-fade" style="color: #fa0000;"></i>';
    }

    if(parseInt(enterNumInput8.value) === randomNumbers[7]){
        enterInputDiv8.innerHTML += '<i class="fa-solid fa-square-check fa-fade" style="color: #08f724;"></i>';
        result.push(1);
    }else {
        enterInputDiv8.innerHTML += '<i class="fa-solid fa-square-xmark fa-fade" style="color: #fa0000;"></i>';
    }

    if(parseInt(enterNumInput9.value) === randomNumbers[8]){
        enterInputDiv9.innerHTML += '<i class="fa-solid fa-square-check fa-fade" style="color: #08f724;"></i>';
        result.push(1);
    }else {
        enterInputDiv9.innerHTML += '<i class="fa-solid fa-square-xmark fa-fade" style="color: #fa0000;"></i>';
    }

    if(parseInt(enterNumInput10.value) === randomNumbers[9]){
        enterInputDiv10.innerHTML += '<i class="fa-solid fa-square-check fa-fade" style="color: #08f724;"></i>';
        result.push(1);
    }else {
        enterInputDiv10.innerHTML += '<i class="fa-solid fa-square-xmark fa-fade" style="color: #fa0000;"></i>';
    }

    if(result.length < 8){
        resultShown.textContent = `You got ${result.length} out of 10. Unfortunately you can not get rewarded with this low result. Please don't forget to refresh the browser for the next game`;
        countDown30 = false;
        fail();
    } else {
        resultShown.textContent = `You got ${result.length} out of 10. Your result is very high and enough to get rewarded. Click the "See reward" button on the top. Don't forget to refresh the browser for the next game`;
        if(difficulty.value === '1'){
            seeRewardA.addEventListener('click', function(){
                congratulate();
                rewardImage.src = '../animals-images/parrot.jpg';
                rewardText.textContent = `Outstanding! You answered ${result.length} out of 10 correctly – just like a parrot, which ranks 4th in the animal kingdom for memory strength. 🦜 Your mind is sharp!`;
            });
        } else if(difficulty.value === '2'){
            seeRewardA.addEventListener('click', function(){
                congratulate();
                rewardImage.src = '../animals-images/chimpanzee.jpg';
                rewardText.textContent = `Whoa! ${result.length}/10 correct? You've reached chimpanzee status – the 3rd smartest memory in the animal kingdom! 🐒🔥`;
            });
        } else if (difficulty.value === '3'){
            seeRewardA.addEventListener('click', function(){
                congratulate();
                rewardImage.src = '../animals-images/dolphin.jpg';
                rewardText.textContent = `Amazing! With ${result.length}/10 correct, you’ve reached dolphin level – the 2nd smartest memory in the animal kingdom! Truly impressive!`;
            });
        } else if(difficulty.value === '4') {
            seeRewardA.addEventListener('click', function(){
                congratulate();
                rewardImage.src = '../animals-images/elephant.jpg';
                rewardText.textContent = `You conquered the toughest challenge and scored ${result.length}/10 – that’s elephant memory power, the best in the animal kingdom!`;
            });
        }
    }
    finishAndCheck.disabled = true;
});
}

startBtn.addEventListener('click', function(){
    if(difficulty.value === '0') {
        alert('Choose difficulty first');
    } else if(difficulty.value === '1'){
        alert('You chose one-digit easy mode, the game starts in 3 seconds after clicking ok !!!');
        solid();
    } else if(difficulty.value === '2'){
        alert('You chose two-digit medium mode, the game starts in 3 seconds after clicking ok !!!');
        min = 10;
        max = 99;
        solid();
    } else if(difficulty.value === '3'){
        alert('You chose three-digit hard mode, the game starts in 3 seconds after clicking ok !!!');
        min = 100;
        max = 999;
        solid();
    } else if(difficulty.value === '4'){
        alert('You chose four-digit very hard mode, the game starts in 3 seconds after clicking ok !!!');
        min = 1000;
        max = 9999;
        solid();
    }
})








