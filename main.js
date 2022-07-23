let timer = document.querySelector(".cBox");
let topBoxes = document.querySelectorAll(".tBox");
let allBoxes = document.querySelectorAll(".allBox");
let roundNum = document.querySelector(".roundNumber");
let amount = document.querySelectorAll(".amount");
let startBtn = document.querySelector(".startBtn");
let firstFive = document.querySelectorAll(".firstFive");
let evenOrOdds = document.querySelector(".evenOrOdds");
let sumNum = document.querySelector(".sumNum");
let boxResult = document.querySelectorAll(".boxResult");
let mainView = document.querySelector(".mainView");
let showResultsView = document.querySelector(".showResults");
let resultRound = document.querySelector(".resultRound");

// select user interface
// dots for all nums with same color selecet
let selectRedDot = document.querySelector(".user-redDot");
let selectGreenDot = document.querySelector(".user-greenDot");
let selectBlueDot = document.querySelector(".user-blueDot");
let selectPurpleDot = document.querySelector(".user-purpleDot");
let selectBrownDot = document.querySelector(".user-brownDot");
let selectYellowDot = document.querySelector(".user-yellowDot");
let selectOrangeDot = document.querySelector(".user-orangeDot");
let selectBlackDot = document.querySelector(".user-blackDot");
function addListenerToDots(){
  selectRedDot.addEventListener("click", () => {
    selectNumsByColor("red");
  });
  selectGreenDot.addEventListener("click", () => {
    selectNumsByColor("green");
  });
  selectBlueDot.addEventListener("click", () => {
    selectNumsByColor("blue");
  });
  selectPurpleDot.addEventListener("click", () => {
    selectNumsByColor("purple");
  });
  selectBrownDot.addEventListener("click", () => {
    selectNumsByColor("brown");
  });
  selectYellowDot.addEventListener("click", () => {
    selectNumsByColor("yellow");
  });
  selectOrangeDot.addEventListener("click", () => {
    selectNumsByColor("orange");
  });
  selectBlackDot.addEventListener("click", () => {
    selectNumsByColor("black");
  });
}
addListenerToDots();
//  all nums same color
let allRedBox = document.querySelectorAll(".user-boxRed");
let allGreenBox = document.querySelectorAll(".user-boxGreen");
let allBlueBox = document.querySelectorAll(".user-boxBlue");
let allPurpleBox = document.querySelectorAll(".user-boxPurple");
let allBrownBox = document.querySelectorAll(".user-boxBrown");
let allYellowBox = document.querySelectorAll(".user-boxYellow");
let allOrangeBox = document.querySelectorAll(".user-boxOrange");
let allBlackBox = document.querySelectorAll(".user-boxBlack");
let forAllSelected = document.querySelectorAll(".for-select");

// selectors for right user view
let userViewTicket = document.querySelector(".user-viewTickets");
let userViewBalls = document.querySelector(".user-viewBalls");
let confirmBtn = document.querySelector(".confirmBtn");
confirmBtn.addEventListener("click", confirmTicket);
let successfulTicketsView = document.querySelector(".user-successfulTickets");
// let successBallsView = document.querySelector(".user-successBalls");

let round = 69;
let mins = 0;
let sec = 0;
let lucky = {};
// lucky.nums = [];
// lucky.numsShuffle = [];
// let randomNum;
// ****************************
userTicket = {
  clickOnDot: false,
  isSelectedNumsFull: false,
  selectedNums: [],
  activTickets: {
    ticketNo1: {
      round: round,
      activeNums: [],
      winnNums: [],
    },
  },
};

let infoResult = {};
// let userTicket = {};
// userTicket.isSelectedNumsFull = false;
// userTicket.selectedNums = [];
// userTicket.activTickets={};
// userTicket.activTickets.ticketNo1={};
// userTicket.activTickets.ticketNo1.round = 0;
// userTicket.activTickets.ticketNo1.activeNums =[];
// userTicket.activTickets.ticketNo1.winnNums =[];

function selectNumsByColor(color) {
  console.log(userTicket);
  // console.log(userTicket.selectedNums.length);
  // console.log(color);
  // console.log(userTicket.activTickets.length);

  switch (color) {
    case "red":
      for (let i = 0; i < allRedBox.length; i++) {
        if (
          !allRedBox[i].classList.contains("user-activeNumResult") &&
          userTicket.isSelectedNumsFull === false
        ) {
          allRedBox[i].classList.add("user-activeNumResult");
          userTicket.selectedNums.push(parseInt(allRedBox[i].innerHTML));
        } else if (allRedBox[i].classList.contains("user-activeNumResult")) {
          allRedBox[i].classList.remove("user-activeNumResult");
          userTicket.selectedNums = [];
        }
      }
      break;

    case "green":
      for (let i = 0; i < allGreenBox.length; i++) {
        if (
          !allGreenBox[i].classList.contains("user-activeNumResult") &&
          userTicket.isSelectedNumsFull === false
        ) {
          allGreenBox[i].classList.add("user-activeNumResult");
          userTicket.selectedNums.push(parseInt(allGreenBox[i].innerHTML));
        } else {
          allGreenBox[i].classList.remove("user-activeNumResult");
          userTicket.selectedNums = [];
        }
      }
      break;

    case "blue":
      for (let i = 0; i < allBlueBox.length; i++) {
        if (
          !allBlueBox[i].classList.contains("user-activeNumResult") &&
          userTicket.isSelectedNumsFull === false
        ) {
          allBlueBox[i].classList.add("user-activeNumResult");
          userTicket.selectedNums.push(parseInt(allBlueBox[i].innerHTML));
        } else {
          allBlueBox[i].classList.remove("user-activeNumResult");
          userTicket.selectedNums = [];
        }
      }
      break;

    case "purple":
      for (let i = 0; i < allPurpleBox.length; i++) {
        if (
          !allPurpleBox[i].classList.contains("user-activeNumResult") &&
          userTicket.isSelectedNumsFull === false
        ) {
          allPurpleBox[i].classList.add("user-activeNumResult");
          userTicket.selectedNums.push(parseInt(allPurpleBox[i].innerHTML));
        } else {
          allPurpleBox[i].classList.remove("user-activeNumResult");
          userTicket.selectedNums = [];
        }
      }
      break;

    case "brown":
      for (let i = 0; i < allBrownBox.length; i++) {
        if (
          !allBrownBox[i].classList.contains("user-activeNumResult") &&
          userTicket.isSelectedNumsFull === false
        ) {
          allBrownBox[i].classList.add("user-activeNumResult");
          userTicket.selectedNums.push(parseInt(allBrownBox[i].innerHTML));
        } else {
          allBrownBox[i].classList.remove("user-activeNumResult");
          userTicket.selectedNums = [];
        }
      }
      break;

    case "yellow":
      for (let i = 0; i < allYellowBox.length; i++) {
        if (
          !allYellowBox[i].classList.contains("user-activeNumResult") &&
          userTicket.isSelectedNumsFull === false
        ) {
          allYellowBox[i].classList.add("user-activeNumResult");
          userTicket.selectedNums.push(parseInt(allYellowBox[i].innerHTML));
        } else {
          allYellowBox[i].classList.remove("user-activeNumResult");
          userTicket.selectedNums = [];
        }
      }
      break;

    case "orange":
      for (let i = 0; i < allOrangeBox.length; i++) {
        if (
          !allOrangeBox[i].classList.contains("user-activeNumResult") &&
          userTicket.isSelectedNumsFull === false
        ) {
          allOrangeBox[i].classList.add("user-activeNumResult");
          userTicket.selectedNums.push(parseInt(allOrangeBox[i].innerHTML));
        } else {
          allOrangeBox[i].classList.remove("user-activeNumResult");
          userTicket.selectedNums = [];
        }
      }
      break;

    case "black":
      for (let i = 0; i < allBlackBox.length; i++) {
        if (
          !allBlackBox[i].classList.contains("user-activeNumResult") &&
          userTicket.isSelectedNumsFull === false
        ) {
          allBlackBox[i].classList.add("user-activeNumResult");
          userTicket.selectedNums.push(parseInt(allBlackBox[i].innerHTML));
        } else {
          allBlackBox[i].classList.remove("user-activeNumResult");
          userTicket.selectedNums = [];
        }
      }
      break;

    default:
      break;
  }
  checkisSelectedNumsFull();
  // console.log(userTicket.selectedNums.length);
  insertNumsInUserView();
}

function insertNumsInUserView() {
  // console.log(userTicket.selectedNums);
  let boxes = ``;
  if (userTicket.isSelectedNumsFull) {
    userViewTicket.classList.remove("hide");
    userTicket.selectedNums.forEach((num) => {
      boxes += `<div class="user-boxView">${num}</div>`;
    });
    // do tu doso ssad moram napravit da uplacen listic pređw dole i spremim ga u uplacene
  } else {
    userViewTicket.classList.add("hide");
  }
  userViewBalls.innerHTML = boxes;
  // console.log(userTicket.selectedNums);
}

function confirmTicket() {
  // console.log(confirmBtn);
  let box = ``.trim();
  successfulTicketsView.classList.remove("hide");
  userTicket.selectedNums.forEach((num) => {
    box += `<div class="user-boxSuccess">${num}</div>`;
  });
  let template = `

  <div class="user-successTicketWrapper">
                    
    <div class="user-successBalls">
      ${box}
    </div>
      <div class="user-stakeSuccess ">
      <h3>Stake</h3> <span>1,00</span>
    </div> 
  </div>
  `.trim();
  successfulTicketsView.innerHTML += template;
  userViewTicket.classList.add("hide");

  addNumsInUserTicket();
}

function checkisSelectedNumsFull() {
  if (userTicket.selectedNums.length === 6) {
    userTicket.isSelectedNumsFull = true;
  } else {
    userTicket.isSelectedNumsFull = false;
    console.log(userTicket.isSelectedNumsFull, "tajj");
    addNumsInUserTicket();
  }
}

function addNumsInUserTicket() {
  userTicket.activTickets.ticketNo1.activeNums = userTicket.selectedNums;
  userTicket.selectedNums = [];
  userTicket.isSelectedNumsFull = false;
  onlyOneTicketPerUser();
  resetAllSelectedNums();
  console.log(userTicket, "cili iz addNumsa");
}


// TODO: sam stao 22.07 sad moram provjerit koliko je korisnik dobio, odnosno koji innerHtml je imao kada je bio zdanji push, i tribam napravit da nije push kada pogodim nroj nego da odradim slice

function checkingWinnNumbers(currWinnNumber) {
  // console.log(currWinnNumber, "iz funkcije");
  if (
    userTicket.activTickets.ticketNo1.activeNums.find(
      (num) => num === currWinnNumber
    )
  ) {
    let currentNum = 0;
    currentNum = userTicket.activTickets.ticketNo1.activeNums.find(
      (num) => num === currWinnNumber
    );
    userTicket.activTickets.ticketNo1.winnNums.push(currentNum);
    if (currentNum > 0) {
      // console.log(
      //   "dobitni i veci od 0",
      //   userTicket.activTickets.ticketNo1.winnNums
      // );
      let allActivNums = document.querySelectorAll(".user-boxSuccess");
      // console.log(allActivNums);
      allActivNums.forEach((accNum) => {
        if (parseInt(accNum.innerHTML) === currentNum) {
          accNum.classList.add("acive-winn");
        }
      });
    }
  }
}
function onlyOneTicketPerUser(){
  if(userTicket.activTickets.ticketNo1.activeNums.length > 0){
      selectRedDot.replaceWith(selectRedDot.cloneNode(true));
      console.log(userTicket.activTickets.ticketNo1.activeNums.length);
      console.log(userTicket.activTickets.ticketNo1.winnNums.length);
  }
  else{
    // TODO 23.07 tu sam stao tribam odredit da se samo jedan listic moze odigrat, odnosno kad se jedan uplati da se skine listener sa svih do sljedece runde
    addListenerToDots();
  }
}

// restart aktivnih listica
function resetActivTicket(){
  // console.log("skidam vidljivost");
  if(!successfulTicketsView.classList.contains("hide")){
    successfulTicketsView.classList.add("hide");
    let successTicketwrapper = document.querySelector(".user-successTicketWrapper");
    successfulTicketsView.removeChild(successTicketwrapper)
    userTicket.activTickets.ticketNo1.activeNums = []; 
    userTicket.activTickets.ticketNo1.winnNums = []; 
  }
}

function resetAllSelectedNums(){
  forAllSelected.forEach((select) => {
    select.classList.remove("user-activeNumResult");
  })
}
// staro

startBtn.addEventListener("click", nextRound);

// nextRound();

function nextRound() {
  resetGame();
}

function resetGame() {
  timer.style.background = "none";
  round++;
  mins = 0;
  sec = 1;
  roundNum.innerHTML = round;
  for (let i = 0; i < allBoxes.length; i++) {
    let boxChild = allBoxes[i].querySelector("h1");
    if (boxChild) {
      allBoxes[i].removeChild(boxChild);
    }
    if (allBoxes[i].children.length) {
      allBoxes[i].children[0].style.display = "block";
    }
    allBoxes[i].style.background = "rgba(20, 19, 19, 0.5)";
  }
  if (userTicket.activTickets.ticketNo1.activeNums.length > 0) {
    userTicket.activTickets.ticketNo1.round = round;
  } else {
    console.log("You have no payments for this round");
  }
  lucky.noRound = round;
  lucky.numsShuffle = [];
  lucky.nums = [];
  startTime();
}

function startTime() {
  console.log("na startu", userTicket);
  let loop = setInterval(() => {
    timer.innerHTML = `<h1 class="time">0${mins} : ${sec}</h1>`;
    if (sec === 0 && mins >= 0) {
      if (sec === 0 && mins === 0) {
        clearInterval(loop);
        roundNum.innerHTML = round;
        timer.innerHTML = `<h1 class="time"> READY ? </h1>`;
        timer.style.background = "yellowgreen";

        createNums();
      } else {
        mins--;
        sec = 59;
        timer.innerHTML = `<h1 class="time">0${mins} : ${sec}</h1>`;
        sec--;
      }
    } else {
      if (sec < 10) {
        timer.innerHTML = `<h1 class="time">0${mins} : 0${sec}</h1>`;
      }
      sec--;
    }
  }, 1000);
}

function createNums() {
  for (let i = 1; i < 49; i++) {
    lucky.nums.push(i);
  }
  getRandomNums();
}

function getRandomNums() {
  while (lucky.nums.length > 13) {
    let rand = Math.floor(Math.random() * lucky.nums.length);
    lucky.numsShuffle.push(lucky.nums[rand]);
    lucky.nums.splice(rand, 1);
  }
  displayWinNums();
}

function displayWinNums() {
  console.log(lucky);
  console.log(lucky.numsShuffle);

  let counter = 0;
  let loop = setInterval(() => {
    if (counter === lucky.numsShuffle.length) {
      clearInterval(loop);
      timer.style.background = "yellowgreen";
      timer.innerHTML = "";
      showResults();
      // resetGame();
      resetAmountColor();
    } else {
      switch (lucky.numsShuffle[counter]) {
        case 1:
        case 9:
        case 17:
        case 25:
        case 33:
        case 41:
          timer.style.background = "red";
          allBoxes[counter].style.background = "red";
          if (counter >= 5) {
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
          if (counter >= 5) {
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
          if (counter >= 5) {
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
          if (counter >= 5) {
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
          if (counter >= 5) {
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
          if (counter >= 5) {
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
          if (counter >= 5) {
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
          if (counter >= 5) {
            amount[counter - 5].style.color = "white";
          }
          break;

        default:
          break;
      }
      timer.innerHTML = `<h1 class="showNums animate__animated animate__tada"> ${lucky.numsShuffle[counter]} </h1>`;
      allBoxes[
        counter
      ].innerHTML = `<h1 class="outputNums"> ${lucky.numsShuffle[counter]} </h1>`;

      let currWinnNumber = lucky.numsShuffle[counter];
      // za provjerit imam li u odabranim brojevima
      if (userTicket.activTickets.ticketNo1.activeNums.length > 0) {
        checkingWinnNumbers(currWinnNumber);
      }

      boxResult.forEach((number) => {
        if (number.innerHTML == lucky.numsShuffle[counter]) {
          number.classList.add("activeNumResult");
        }
      });

      counter++;
    }
  }, 500);
}

function showResults() {
  mainView.style.display = "none";
  showResultsView.style.display = "flex";
  resultRound.innerHTML = round;
  localStorage.setItem("resultsCurrentRound", JSON.stringify(lucky));

  let allFirstFive = [];
  let sumFirstFive = 0;
  let even = [];
  let odds = [];

  for (let i = 0; i < 5; i++) {
    firstFive[i].innerHTML = lucky.numsShuffle[i];
    allFirstFive.push(lucky.numsShuffle[i]);
  }

  for (let i = 0; i < allFirstFive.length; i++) {
    if (allFirstFive[i] % 2 === 0) {
      even.push(allFirstFive[i]);
    } else {
      odds.push(allFirstFive[i]);
    }
    sumFirstFive += allFirstFive[i];
  }
  if (sumFirstFive <= 122) {
    sumNum.innerHTML = sumFirstFive + " UNDER";
  } else {
    sumNum.innerHTML = sumFirstFive + " OVER";
  }
  if (even.length > odds.length) {
    evenOrOdds.innerHTML = "EVEN";
  } else {
    evenOrOdds.innerHTML = "ODDS";
  }
  // tribam rijesit opciju za opciju koja nosi duple kuglice
  // za dodavanje aktivnih boja na rezultate mi se nalazi u funkciji displayWins
  setTimeout(restartResults, 5000);
}

function restartResults() {
  boxResult.forEach((number) => {
    number.classList.remove("activeNumResult");
  });
  mainView.style.display = "block";
  showResultsView.style.display = "none";
  resetActivTicket();
  resetGame();
}

function resetAmountColor() {
  for (let i = 0; i < amount.length; i++) {
    amount[i].style.color = "rgba(0, 0, 0, 0.297)";
  }
}
