// password generator project
// copy password
const copiedSpan = document.getElementById("copySpan");
function copyText() {
  // if result password is "" or default word it does not copy anything
  if (result.innerText != "" && result.innerText != "P4$5W0rD!") {
    let range = document.createRange();
    range.selectNode(result);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    console.log();
    copiedSpan.style.display = "block";
  }
}

// to change value and progress range
const value = document.getElementById("value");
const progress = document.getElementById("progress");
const range = document.getElementById("range");

let exactValue = 0;
range.addEventListener("input", (event) => {
  exactValue = event.target.value;
  value.innerText = `${exactValue}`;
  progress.style.width = `${(exactValue * 100) / 20 - 0.6}%`;

  // changes themes acording to input's value
  // if value < 5 it sets different levels then if value >= 5;
  if (exactValue < 5 && exactValue > 2 && exactLevel > 2) {
    document.body.classList.add("weak");
    document.body.classList.remove("tooWeak");
    document.body.classList.remove("medium");
    document.body.classList.remove("strong");
    level.style.display = "block";
    level.innerText = "WEAK";
  } else if (
    exactValue < 5 &&
    exactValue > 2 &&
    exactLevel < 3 &&
    exactLevel > 0
  ) {
    document.body.classList.add("tooWeak");
    document.body.classList.remove("weak");
    document.body.classList.remove("medium");
    document.body.classList.remove("strong");
    level.style.display = "block";
    level.innerText = "TOO WEAK!";
  }
  if (exactValue < 3 && exactValue > 0 && exactLevel > 0) {
    document.body.classList.add("tooWeak");
    document.body.classList.remove("weak");
    document.body.classList.remove("medium");
    document.body.classList.remove("strong");
    level.style.display = "block";
    level.innerText = "TOO WEAK!";
  }

  if (exactValue > 4) {
    switch (exactLevel) {
      case 1:
        document.body.classList.remove("weak");
        document.body.classList.add("tooWeak");
        level.innerText = "TOO WEAK!";
        level.style.display = "block";
        break;
      case 2:
        document.body.classList.remove("tooWeak");
        document.body.classList.remove("medium");
        document.body.classList.add("weak");
        level.innerText = "WEAK";
        level.style.display = "block";
        break;
      case 3:
        document.body.classList.remove("weak");
        document.body.classList.remove("strong");
        document.body.classList.add("medium");
        level.innerText = "MEDIUM";
        level.style.display = "block";
        break;
      case 4:
        document.body.classList.remove("medium");
        document.body.classList.add("strong");
        level.innerText = "STRONG";
        level.style.display = "block";
        break;
      default:
        document.body.classList.remove("tooWeak");
        document.body.classList.remove("weak");
        document.body.classList.remove("medium");
        document.body.classList.remove("strong");
        level.style.display = "none";
    }
  }

  if (exactValue == 0 || exactLevel == 0) {
    document.body.classList.remove("tooWeak");
    document.body.classList.remove("weak");
    document.body.classList.remove("medium");
    document.body.classList.remove("strong");
    level.style.display = "none";
  }
});
// to set strength
const checkBoxes = Array.from(document.getElementsByClassName("checkbox"));
const level = document.getElementById("level");

let exactLevel = 0;

checkBoxes.forEach((Element) => {
  Element.addEventListener("change", (event) => {
    // chatching how many boxes are checked and adding exact levels;
    if (Element.checked) {
      exactLevel += 1;
    } else {
      exactLevel -= 1;
    }

    if (exactValue > 4) {
      switch (exactLevel) {
        case 1:
          document.body.classList.remove("weak");
          document.body.classList.add("tooWeak");
          level.innerText = "TOO WEAK!";
          level.style.display = "block";
          break;
        case 2:
          document.body.classList.remove("tooWeak");
          document.body.classList.remove("medium");
          document.body.classList.add("weak");
          level.innerText = "WEAK";
          level.style.display = "block";
          break;
        case 3:
          document.body.classList.remove("weak");
          document.body.classList.remove("strong");
          document.body.classList.add("medium");
          level.innerText = "MEDIUM";
          level.style.display = "block";
          break;
        case 4:
          document.body.classList.remove("medium");
          document.body.classList.add("strong");
          level.innerText = "STRONG";
          level.style.display = "block";
          break;
        default:
          document.body.classList.remove("tooWeak");
          document.body.classList.remove("weak");
          document.body.classList.remove("medium");
          document.body.classList.remove("strong");
          level.style.display = "none";
      }
    } else if (exactValue < 5 && exactValue > 2 && exactLevel > 2) {
      document.body.classList.add("weak");
      document.body.classList.remove("tooWeak");
      document.body.classList.remove("medium");
      document.body.classList.remove("strong");
      level.style.display = "block";
      level.innerText = "WEAK";
    } else if (
      exactValue < 5 &&
      exactValue > 2 &&
      exactLevel < 3 &&
      exactLevel > 0
    ) {
      document.body.classList.add("tooWeak");
      document.body.classList.remove("weak");
      document.body.classList.remove("medium");
      document.body.classList.remove("strong");
      level.style.display = "block";
      level.innerText = "TOO WEAK!";
    } else if (exactValue < 3 && exactValue > 0 && exactLevel > 0) {
      document.body.classList.add("tooWeak");
      document.body.classList.remove("weak");
      document.body.classList.remove("medium");
      document.body.classList.remove("strong");
      level.style.display = "block";
      level.innerText = "TOO WEAK!";
    } else if (exactValue == 0 || exactLevel == 0) {
      document.body.classList.remove("tooWeak");
      document.body.classList.remove("weak");
      document.body.classList.remove("medium");
      document.body.classList.remove("strong");
      level.style.display = "none";
    }
  });
});
// generate password
const uper_letters_box = document.getElementById("upperLetters");
const lower_letters_box = document.getElementById("lowerLetters");
const numbers_box = document.getElementById("numbers");
const symbols_box = document.getElementById("symbols");
const generate = document.getElementById("generate");
const result = document.getElementById("result");

const lowLetters = "abcdefghijklmnopqrstuvwxyz";
const upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const simbols = `!@#$%^&*()_-+=[]{}|;:'",.<>/?~`;

generate.addEventListener("click", () => {
  let randomArr = [];
  if (uper_letters_box.checked) {
    randomArr.push(upLetters);
  }
  if (lower_letters_box.checked) {
    randomArr.push(lowLetters);
  }
  if (numbers_box.checked) {
    randomArr.push(numbers);
  }
  if (symbols_box.checked) {
    randomArr.push(simbols);
  }
  let joinedArr = randomArr.join("");
  let splitedArr = joinedArr.split("");
  let length = splitedArr.length;
  let password = "";
  result.style.opacity = "1";
  // if password text length is 0 it sets default password again
  if (length != 0) {
    for (let i = 0; i < exactValue; i++) {
      let randomWord = splitedArr[Math.floor(Math.random() * length)];
      password += randomWord;
    }
  } else {
    password = "P4$5W0rD!";
    result.style.opacity = "0.25";
  }

  result.innerText = `${password}`;
  // hides copied text
  copiedSpan.style.display = "none";
});
