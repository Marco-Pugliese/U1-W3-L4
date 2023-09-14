const numbersTo76 = document.getElementById("numbers");
for (let i = 0; i < 78; i++) {
  const allDivs = document.createElement("div");
  allDivs.innerHTML = i + 1;
  allDivs.classList.add("created");
  allDivs.classList.add("selected");
  numbersTo76.append(allDivs);
}

const playBtn = document.getElementById("btn");
let count = 0;
playBtn.addEventListener("click", () => {
  count++;
  if (count > 0) {
    playBtn.innerText = "EXTRACT";
  }
});
let y = 1;

playBtn.addEventListener("click", () => {
  if (y < 2) {
    const personalCard = document.getElementById("personal-card");
    for (let i = 0; i < 24; i++) {
      const allDivs = document.createElement("div");
      allDivs.innerHTML = Math.floor(Math.random() * 77) + 1;
      allDivs.classList.add("created");
      allDivs.classList.add("selected");
      personalCard.append(allDivs);
    }
  }
  y++;
});
let x = 0;
playBtn.addEventListener("click", () => {
  if (x > 0) {
    const allLeft = document.querySelectorAll("#numbers .selected");
    const x = Math.floor(Math.random() * allLeft.length);
    allLeft[x].classList.remove("selected");
  }
  x++;
});

playBtn.addEventListener("click", (e) => {
  const tableValue = document.querySelectorAll("#numbers div:not(.selected)");
  const cardValue = document.querySelectorAll("#personal-card .created");

  // for (let i = 0; i < cardValue.length; i++)
  for (let i = 0; i < tableValue.length; i++) {
    for (let y = 0; y < cardValue.length; y++) {
      if (cardValue[y].innerText === tableValue[i].innerText) {
        cardValue[y].classList.add("bingo");
      }
    }
  }
});
let restartCount = 0;
playBtn.addEventListener("click", () => {
  const bingoed = document.querySelectorAll(".bingo");
  if (bingoed.length === 24) {
    restartCount++;
    if (restartCount > 0) {
      playBtn.innerText = "Play Again";
      const titleH1 = document.getElementById("title");
      titleH1.classList.toggle("bigger");
    }
    if (restartCount > 1) {
      const allDivs = document.querySelectorAll("#numbers .created");
      const allMyNums = document.querySelectorAll("#personal-card .created");
      for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].classList.add("selected");
      }
      for (let y = 0; y < allMyNums.length; y++) {
        allMyNums[y].classList.remove("bingo");
      }
      const titleH1 = document.getElementById("title");

      restartCount = 0;
      playBtn.innerText = "Press To Start";
    }
  }
});
