// btn for testing to start the timer
let startBtn = document.querySelector(".startBtn");

let timer = document.querySelector(".cBox");
let topBoxes = document.querySelectorAll(".tBox");
let allBoxes = document.querySelectorAll(".allBox");
let roundNum = document.querySelector(".roundNumber");
let amount = document.querySelectorAll(".amount");
let firstFive = document.querySelectorAll(".firstFive");
let evenOrOdds = document.querySelector(".evenOrOdds");
let sumNum = document.querySelector(".sumNum");
let boxResult = document.querySelectorAll(".boxResult");
let mainView = document.querySelector(".mainView");
let showResultsView = document.querySelector(".showResults");
let resultRound = document.querySelector(".resultRound");
let headerCurrentAmount = document.querySelector(".headerCurrentAmount");
let userResultRound  = document.querySelector(".user-resultRound");

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
let successfulTicketsView = document.querySelector(".user-successfulTickets");
let roundUserTicket = document.querySelector(".user-noOfRoundInfo");
// let successBallsView = document.querySelector(".user-successBalls");

// setting startup parameters
let startAmount = 200;
headerCurrentAmount.innerHTML = startAmount;
let currentRound = 27;
userResultRound.innerHTML = currentRound + 1;
let lucky = {};
// lucky.nums = [];
// let randomNum;
// ****************************
userTicket = {
  clickOnDot: false,
  isSelectedNumsFull: false,
  selectedNums: [],
  activTickets: {
    ticketNo1: {
      round: currentRound + 1,
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

nextRound();
function selectDot() {
  let colorId =Number(this.id);
  switch (colorId) {
    case 1:
      selectNumsByColor("red");
      break;

    case 2:
      selectNumsByColor("green");
      break;

    case 3:
      selectNumsByColor("blue");
      break;

    case 4:
      selectNumsByColor("purple");
      break;

    case 5:
      selectNumsByColor("brown");
      break;

    case 6:
      selectNumsByColor("yellow");
      break;

    case 7:
      selectNumsByColor("orange");
      break;

    case 8:
      selectNumsByColor("black");
      break;

    default:
      break;
  }
}
function addListenerToDots() {
  selectRedDot.addEventListener("click", selectDot);
  selectGreenDot.addEventListener("click", selectDot);
  selectBlueDot.addEventListener("click", selectDot);
  selectPurpleDot.addEventListener("click", selectDot);
  selectBrownDot.addEventListener("click", selectDot);
  selectYellowDot.addEventListener("click", selectDot);
  selectOrangeDot.addEventListener("click", selectDot);
  selectBlackDot.addEventListener("click", selectDot);
}
addListenerToDots();

// select all nums
let selectedNums = document.querySelectorAll(".for-select");
selectedNums.forEach(num => {
  num.addEventListener("click", selectNum)
})




function selectNum(){
  // insertNumsInUserView();
  let currentSelected = Number(this.innerHTML);
  console.log(userTicket.selectedNums.length);

  if (!userTicket.isSelectedNumsFull && !this.classList.contains("user-activeNumResult")) {
    console.log("u ifu");
    
    if (userTicket.selectedNums.length === 6 ) {
      userTicket.isSelectedNumsFull = true;
      console.log("pun", userTicket.selectedNums );
      console.log(userTicket,"iz IOFF selectNum");
    }else{
      this.classList.add("user-activeNumResult");
      userTicket.selectedNums.push(currentSelected);
      if(userTicket.selectedNums.length > 0){
        insertSelectedNumInUserView()
      }
    }
    
    console.log(userTicket,"iz ifa selectNum");

  }else if(this.classList.contains("user-activeNumResult")){
    this.classList.remove("user-activeNumResult")
    // console.log(userTicket.selectedNums, "prije...");
    // console.log(userTicket.selectedNums.length, "prije...");
    for (let i = 0; i < userTicket.selectedNums.length; i++) {
      if(userTicket.selectedNums[i] === currentSelected){
        userTicket.selectedNums.splice(i, 1)
      }
    }
    if(userTicket.selectedNums.length < 6 ){
      userTicket.isSelectedNumsFull = false;
    }
    insertSelectedNumInUserView()
    // console.log(userTicket.selectedNums, "poslije...");
    // console.log(userTicket.selectedNums.length, "poslije...");
  }
}

function insertSelectedNumInUserView(){
  console.log("izz insertSelectedNumInUserView", userTicket.selectedNums);
  if(userTicket.selectedNums.length === 0){
    userViewTicket.classList.add("hide");
  }
  else{
    let boxes = ``;
    if (!userTicket.isSelectedNumsFull) {
      userViewTicket.classList.remove("hide");
      userTicket.selectedNums.forEach((num) => {
      boxes += `<div class="user-boxView">${num}</div>`;
      });
      if(userTicket.selectedNums.length === 6){
        confirmBtn.addEventListener("click", confirmTicket);
        confirmBtn.style.cursor = "pointer"
      }
      else{
        confirmBtn.removeEventListener("click", confirmTicket);
        confirmBtn.style.cursor = "not-allowed"
      }
    } else {
      userViewTicket.classList.add("hide");
    }
    userViewBalls.innerHTML = boxes;
    roundUserTicket.innerHTML = userTicket.activTickets.ticketNo1.round;
  }
    // console.log(userTicket.selectedNums);
}



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
  } else {
    userViewTicket.classList.add("hide");
  }
  userViewBalls.innerHTML = boxes;
  roundUserTicket.innerHTML = userTicket.activTickets.ticketNo1.round;
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
    <div class="user-successInfo">
        <h3>Round :</h3>
        <span class="user-successRound">${userTicket.activTickets.ticketNo1.round}</span>
    </div>
    <div class="user-stakeSuccess ">
      <h3>Stake</h3>
      <h2 class="user-stakeSuccessWinn hide"> WINNN </h2> 
      <span>1,00</span>
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
    // console.log(userTicket.isSelectedNumsFull, "tajj");
    addNumsInUserTicket();
  }
}

function addNumsInUserTicket() {
  let currAmount = document.querySelector(".headerCurrentAmount");
  let amountAfterConfirm = Number(currAmount.innerHTML) - 1;
  currAmount.innerHTML = amountAfterConfirm;
  userTicket.activTickets.ticketNo1.activeNums = userTicket.selectedNums;
  userTicket.selectedNums = [];
  userTicket.isSelectedNumsFull = false;
  onlyOneTicketPerUser();
  resetAllSelectedNums();
  // console.log(userTicket, "cili iz addNumsa");
}


function checkingWinnNumbers(currWinnNumber, counter) {
  // console.log(currWinnNumber, "iz funkcije");
  // console.log(counter, "iz koji je izaso funkcije");
  if (userTicket.activTickets.ticketNo1.activeNums.find((num) => num === currWinnNumber)) {
    userTicket.activTickets.ticketNo1.winnNums.push(currWinnNumber);
    if((userTicket.activTickets.ticketNo1.activeNums.length === 6) && (userTicket.activTickets.ticketNo1.winnNums.length === 6) && (userTicket.activTickets.ticketNo1.round === currentRound)){
      checkingWinnAmount(currWinnNumber, counter);
    }
    let allActivNums = document.querySelectorAll(".user-boxSuccess");
    allActivNums.forEach((accNum) => {
      if ((parseInt(accNum.innerHTML) === currWinnNumber) && (userTicket.activTickets.ticketNo1.round === currentRound)) {
        accNum.classList.add("acive-winn");
      }
    });
  }
}
function checkingWinnAmount(lastWinn, counter){
  let winnValue;
  switch (counter) {
    case 5:
      winnValue = 10000;
      calcWin(winnValue);
      break;
    case 6:
      winnValue = 7500;
      calcWin(winnValue);
      break;
    case 7:
      winnValue = 5000;
      calcWin(winnValue);
      break;
    case 8:
      winnValue = 2500;
      calcWin(winnValue);
      break;
    case 9:
      winnValue = 1000;
      calcWin(winnValue);
      break;
    case 10:
      winnValue = 500;
      calcWin(winnValue);
      break;
    case 11:
      winnValue = 300;
      calcWin(winnValue);
      break;
    case 12:
      winnValue = 200;
      calcWin(winnValue);
      break;
    case 13:
      winnValue = 150;
      calcWin(winnValue);
      break;
    case 14:
      winnValue = 100;
      calcWin(winnValue);
      break;
    case 15:
      winnValue = 90;
      calcWin(winnValue);
      break;
    case 16:
      winnValue = 80;
      calcWin(winnValue);
      break;
    case 17:
      winnValue = 70;
      calcWin(winnValue);
      break;
    case 18:
      winnValue = 60;
      calcWin(winnValue);
      break;
    case 19:
      winnValue = 50;
      calcWin(winnValue);
      break;
    case 20:
      winnValue = 40;
      calcWin(winnValue);
      break;
    case 21:
      winnValue = 30;
      calcWin(winnValue);
      break;
    case 22:
      winnValue = 25;
      calcWin(winnValue);
      break;
    case 23:
      winnValue = 20;
      calcWin(winnValue);
      break;
    case 24:
      winnValue = 15;
      calcWin(winnValue);
      break;
    case 25:
      winnValue = 10;
      calcWin(winnValue);
      break;
    case 26:
      winnValue = 9;
      calcWin(winnValue);
      break;
    case 27:
      winnValue = 8;
      calcWin(winnValue);
      break;
    case 28:
      winnValue = 7;
      calcWin(winnValue);
      break;
    case 29:
      winnValue = 6;
      calcWin(winnValue);
      break;
    case 30:
      winnValue = 5;
      calcWin(winnValue);
      break;
    case 31:
      winnValue = 4;
      calcWin(winnValue);
      break;
    case 32:
      winnValue = 3;
      calcWin(winnValue);
      break;
    case 33:
      winnValue = 2;
      calcWin(winnValue);
      break;
    case 34:
      winnValue = 1;
      calcWin(winnValue);
      break;
  
    default:
      break;
  }
}


function calcWin(winnValue){
  let winInfo = document.querySelector(".user-stakeSuccessWinn");
  if (winInfo.classList.contains("hide")) {
    winInfo.classList.remove("hide");
    console.log(winnValue, " iz calc ste dobili" , headerCurrentAmount.innerHTML);
    setTimeout(() => {
      let amountBefore = Number(headerCurrentAmount.innerHTML);
      let updatedWinn = winnValue + amountBefore;
      headerCurrentAmount.innerHTML = updatedWinn;
      winInfo.innerHTML = "WINN PAID OUT"
    }, 3000);   
    // TODO 28.07 zavrseno sve sta sam planiro, tu stao, sad moram napravit mogucnost za odabir pojedninacnih brojeva na klik
  }
}
function removeClicksAndView(){
  selectedNums.forEach(num => {
    num.removeEventListener("click", selectNum)
  })
  selectRedDot.removeEventListener("click", selectDot);
  selectGreenDot.removeEventListener("click", selectDot);
  selectBlueDot.removeEventListener("click", selectDot);
  selectPurpleDot.removeEventListener("click", selectDot);
  selectBrownDot.removeEventListener("click", selectDot);
  selectYellowDot.removeEventListener("click", selectDot);
  selectOrangeDot.removeEventListener("click", selectDot);
  selectBlackDot.removeEventListener("click", selectDot);

  userViewTicket.classList.add("hide");
  resetAllSelectedNums()
  userTicket.selectedNums = [];
}


function onlyOneTicketPerUser() {
  if (userTicket.activTickets.ticketNo1.activeNums.length > 0) {
    // selectRedDot.replaceWith(selectRedDot.cloneNode(true));
    removeClicksAndView()
    // console.log(userTicket.activTickets.ticketNo1.activeNums.length);
    // console.log(userTicket.activTickets.ticketNo1.winnNums.length);
  } 
}

// restart aktivnih listica
function resetActivTicket() {
  // console.log("skidam vidljivost");
  if (!successfulTicketsView.classList.contains("hide")) {
    successfulTicketsView.classList.add("hide");
    let successTicketwrapper = document.querySelector(
      ".user-successTicketWrapper"
    );
    successfulTicketsView.removeChild(successTicketwrapper);
    userTicket.activTickets.ticketNo1.activeNums = [];
    userTicket.activTickets.ticketNo1.winnNums = [];
    userTicket.activTickets.ticketNo1.round = currentRound + 1;
    addListenerToDots();
    selectedNums.forEach(num => {
      num.addEventListener("click", selectNum)
    })
  }
}

function resetAllSelectedNums() {
  forAllSelected.forEach((select) => {
    select.classList.remove("user-activeNumResult");
  });
}
// staro

// startBtn.addEventListener("click", nextRound);

// nextRound();

function nextRound() {
  resetGame();
}

function resetGame() {
  timer.style.background = "none";
  currentRound++;
  userTicket.activTickets.ticketNo1.round = currentRound;
  userResultRound.innerHTML = currentRound + 1;
  mins = 0;
  sec = 35;
  roundNum.innerHTML = currentRound;
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
    userTicket.activTickets.ticketNo1.round = currentRound;
  } else {
    console.log("You have no payments for this round");
  }
  lucky.noRound = currentRound;
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
        roundNum.innerHTML = currentRound;
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
  

  // * if you want it to throw out numbers from 2 onwards
  // while (lucky.nums.length > 13) {
  //   let rand = lucky.nums[0];
  //   lucky.numsShuffle.push(lucky.nums[rand]);
  //   lucky.nums.splice(rand, 1);
  // }

  displayWinNums();
}

function displayWinNums() {
  console.log(lucky);
  console.log(lucky.numsShuffle);
  removeClicksAndView()

  let counter = 0;
  let loop = setInterval(() => {
    if (counter === lucky.numsShuffle.length) {
      clearInterval(loop);
      timer.style.background = "yellowgreen";
      timer.innerHTML = "";
      showResults();
      selectedNums.forEach(num => {
        num.addEventListener("click", selectNum)
      })
      addListenerToDots()
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
        checkingWinnNumbers(currWinnNumber, counter);
      }

      boxResult.forEach((number) => {
        if (number.innerHTML == lucky.numsShuffle[counter]) {
          number.classList.add("activeNumResult");
        }
      });

      counter++;
    }
  }, 1500);
}

function showResults() {
  mainView.style.display = "none";
  showResultsView.style.display = "flex";
  resultRound.innerHTML = currentRound;
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
  setTimeout(restartResults, 15000);
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
