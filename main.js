let timer = document.querySelector('.cBox');
let topBoxes = document.querySelectorAll('.tBox');
let allBoxes = document.querySelectorAll('.allBox');


let mins = 0;
let sec = 11;
let nums = [];
let numsShuffle = [];
let randomNum;



stratTime();

function stratTime(){
    let loop = setInterval(() => {
        timer.innerHTML = `<h1 class="timer">0${mins} : ${sec}</h1>`;
        if(sec === 0 && mins >= 0){
            if(sec === 0 && mins === 0){
                clearInterval(loop);
                timer.innerHTML =  `<h1 class="time"> Good luck </h1>`;
                timer.style.background = "yellowgreen";
                createNums();
            }else{
                mins--;
                sec = 59;
                timer.innerHTML = `<h1 class="time">0${mins} : ${sec}</h1>`;
                sec--;
            }
        }else{
            sec--;
            if(sec < 10){
                timer.innerHTML = `<h1 class="time">0${mins} : 0${sec}</h1>`;
            }
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
            timer.innerHTML =  `<h1 class="time"> The End </h1>`;

        }else{

            switch (numsShuffle[counter]) {
                case 1:
                case 9:
                case 17:
                case 25:
                case 33:
                case 41:
                    timer.style.background = "red";

                    break;

                case 2:
                case 10:
                case 18:
                case 26:
                case 34:
                case 42:
                    timer.style.background = "green";
                    break;

                case 3:
                case 11:
                case 19:
                case 27:
                case 35:
                case 43:
                    timer.style.background = "blue";
                    break;

                case 4:
                case 12:
                case 20:
                case 28:
                case 36:
                case 44:
                    timer.style.background = "purple";
                    break;

                case 5:
                case 13:
                case 21:
                case 29:
                case 37:
                case 45:
                    timer.style.background = "burlywood";
                    break;

                case 6:
                case 14:
                case 22:
                case 30:
                case 38:
                case 46:
                    timer.style.background = "yellow";
                    break;

                case 7:
                case 15:
                case 23:
                case 31:
                case 39:
                case 47:
                    timer.style.background = "orange";
                    break;

                case 8:
                case 16:
                case 24:
                case 32:
                case 40:
                case 48:
                    timer.style.background = "black";
                    break;

                default:
                    break;
            }

            // timer.style.background = "linear-gradient(rgba(252, 251, 251, 0.5), rgba(10, 10, 10, 0.5))";
            timer.innerHTML =  `<h1 class="time"> ${numsShuffle[counter]} </h1>`;
            // ovo dole radi ali moram napravit za ostale kuglice
            // topBoxes[counter].innerHTML = `<h1 class="outputNums"> ${numsShuffle[counter]} </h1>`; 
           

            
            counter++;
        }
        
    }, 1000);
}
