let timer = document.querySelector('.cBox');
let topBoxes = document.querySelectorAll('.tBox');
let allBoxes = document.querySelectorAll('.allBox');
let roundNum = document.querySelector('.roundNumber');
let amount = document.querySelectorAll('.amount');
let startBtn = document.querySelector('.startBtn');
let firstFive = document.querySelectorAll('.firstFive');
let evenOrOdds = document.querySelector('.evenOrOdds');
let sumNum = document.querySelector('.sumNum');
let boxResult = document.querySelectorAll('.boxResult');
let mainView = document.querySelector('.mainView');
let showResultsView = document.querySelector('.showResults');
let resultRound = document.querySelector('.resultRound');

// startBtn.addEventListener('click', nextRound);

let round = 69;
let mins = 0;
let sec = 0;
let nums = [];
let numsShuffle = [];
let randomNum;
let infoResult = {};

let reds = [];

nextRound();

function nextRound(){
    resetGame();
}

function resetGame(){
    timer.style.background = "none";
    round++;
    mins = 0;
    sec = 25;
    roundNum.innerHTML = round;
    for (let i = 0; i < allBoxes.length; i++) {
        let boxChild = allBoxes[i].querySelector('h1');
        if (boxChild){
            allBoxes[i].removeChild(boxChild);
        }
        if(allBoxes[i].children.length){
            allBoxes[i].children[0].style.display = "block";
        }
        allBoxes[i].style.background = "rgba(20, 19, 19, 0.5)";
    }
    nums = [];
    numsShuffle = [];
    startTime();
}

function startTime(){
    let loop = setInterval(() => {
        timer.innerHTML = `<h1 class="time">0${mins} : ${sec}</h1>`;
        if(sec === 0 && mins >= 0){
            if(sec === 0 && mins === 0){
                clearInterval(loop);
                roundNum.innerHTML = round;
                timer.innerHTML =  `<h1 class="time"> READY ? </h1>`;
                timer.style.background = "yellowgreen";

                createNums();
            }else{
                mins--;
                sec = 59;
                timer.innerHTML = `<h1 class="time">0${mins} : ${sec}</h1>`;
                sec--;
            }
        }else{
            if(sec < 10){
                timer.innerHTML = `<h1 class="time">0${mins} : 0${sec}</h1>`;
            }
            sec--;
        }    
    }, 1000);
}

function createNums(){
    for (let i = 1; i < 49; i++) {
        nums.push(i);
    }
    getRandomNums();
}

function getRandomNums(){

    while(nums.length > 13){
        let rand = Math.floor(Math.random() * nums.length);
        numsShuffle.push(nums[rand]);
        nums.splice(rand, 1);
    }
    displayWinNums();
}

function displayWinNums(){
    console.log(numsShuffle);



    let counter = 0;
    let loop = setInterval(() => {
        if(counter === numsShuffle.length){
            clearInterval(loop);
            timer.style.background = "yellowgreen";
            timer.innerHTML = "";
            showResults();
            // resetGame();
            resetAmountColor();
        }else{

            switch (numsShuffle[counter]) {
                case 1:
                case 9:
                case 17:
                case 25:
                case 33:
                case 41:
                    timer.style.background = "red";
                    allBoxes[counter].style.background = "red";
                    if(counter >= 5){
                        amount[counter - 5].style.color = "white";
                    } 
                    break;

                case 2:
                case 10:
                case 18:
                case 26:
                case 34:
                case 42:
                    timer.style.background = "green";
                    allBoxes[counter].style.background = "green";
                    if(counter >= 5){
                        amount[counter - 5].style.color = "white";
                    }
                    break;

                case 3:
                case 11:
                case 19:
                case 27:
                case 35:
                case 43:
                    timer.style.background = "blue";
                    allBoxes[counter].style.background = "blue";
                    if(counter >= 5){
                        amount[counter - 5].style.color = "white";
                    }
                    break;

                case 4:
                case 12:
                case 20:
                case 28:
                case 36:
                case 44:
                    timer.style.background = "purple";
                    allBoxes[counter].style.background = "purple";
                    if(counter >= 5){
                        amount[counter - 5].style.color = "white";
                    }
                    break;

                case 5:
                case 13:
                case 21:
                case 29:
                case 37:
                case 45:
                    timer.style.background = "burlywood";
                    allBoxes[counter].style.background = "burlywood";
                    if(counter >= 5){
                        amount[counter - 5].style.color = "white";
                    }
                    break;

                case 6:
                case 14:
                case 22:
                case 30:
                case 38:
                case 46:
                    timer.style.background = "yellow";
                    allBoxes[counter].style.background = "yellow";
                    if(counter >= 5){
                        amount[counter - 5].style.color = "white";
                    }
                    break;

                case 7:
                case 15:
                case 23:
                case 31:
                case 39:
                case 47:
                    timer.style.background = "orange";
                    allBoxes[counter].style.background = "orange";
                    if(counter >= 5){
                        amount[counter - 5].style.color = "white";
                    }
                    break;

                case 8:
                case 16:
                case 24:
                case 32:
                case 40:
                case 48:
                    timer.style.background = "black";
                    allBoxes[counter].style.background = "black";
                    if(counter >= 5){
                        amount[counter - 5].style.color = "white";
                    }
                    break;

                default:
                    break;
            }
            timer.innerHTML =  `<h1 class="showNums animate__animated animate__tada"> ${numsShuffle[counter]} </h1>`;
            allBoxes[counter].innerHTML = `<h1 class="outputNums"> ${numsShuffle[counter]} </h1>`;

            // radi mi ali trebo bi naci bolji nacin da ne opterecivam kod sa ovom foreach petljom
            boxResult.forEach(number => {
                if (number.innerHTML == numsShuffle[counter]) {
                    number.classList.add("activeNumResult");
                }
            });
        
            counter++;

        }
        
    }, 2500);

}

function showResults(){
    mainView.style.display = "none";
    showResultsView.style.display = "flex";
    resultRound.innerHTML = round;
    let allFirstFive = [];
    let sumFirstFive = 0;
    let even = [];
    let odds = [];

    for (let i = 0; i < 5; i++) {
        firstFive[i].innerHTML = numsShuffle[i];
        allFirstFive.push(numsShuffle[i]);
    }

    for (let i = 0; i < allFirstFive.length; i++) {
        if (allFirstFive[i] % 2 === 0) {
            even.push(allFirstFive[i]);
        }else{
            odds.push(allFirstFive[i]);
        }
        sumFirstFive += allFirstFive[i];
    }
    if (sumFirstFive <= 122) {
        sumNum.innerHTML = sumFirstFive + " UNDER";
    }else{
        sumNum.innerHTML = sumFirstFive + " OVER";
    }
    if (even.length > odds.length) {
        evenOrOdds.innerHTML = "EVEN";
    }else{
        evenOrOdds.innerHTML = "ODDS";
    }
    // tribam rijesit opciju za opciju koja nosi duple kuglice
    // za dodavanje aktivnih boja na rezultate mi se nalazi u funkciji displayWins

    setTimeout(restartResults, 15000);

}

function restartResults(){
    boxResult.forEach(number => {
        number.classList.remove("activeNumResult");
    });
    mainView.style.display = "block";
    showResultsView.style.display = "none";
    resetGame();
}

function resetAmountColor(){
    for (let i = 0; i < amount.length; i++) {
        amount[i].style.color = "rgba(0, 0, 0, 0.297)";
    }
}
