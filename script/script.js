
const addition = document.getElementById("+");

addition.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "+";
});

const subtraction = document.getElementById("-");

subtraction.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "-"
});

const multiply = document.getElementById("*");

multiply.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "*";
});

const exponent = document.getElementById("**");

exponent.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "**";
});

const division = document.getElementById("/");

division.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "/"
});

const equals = document.getElementById("equals");

equals.addEventListener("click", (e) => {
    document.getElementById("result").innerText =  eval(document.getElementById("result").innerText);                                      
});

const clear = document.getElementById("clear");

clear.addEventListener("click", (e) => {
    document.getElementById("result").innerText = "";
});

const decimal = document.getElementById("decimal");

decimal.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "."
})

const numOne = document.getElementById("1");

numOne.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "1";
});

const numTwo = document.getElementById("2");

numTwo.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "2";
});

const numThree = document.getElementById("3");

numThree.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "3";
});

const numFour = document.getElementById("4");

numFour.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "4";
});

const numFive = document.getElementById("5");

numFive.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "5";
});

const numSix = document.getElementById("6");

numSix.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "6";
});

const numSeven = document.getElementById("7");

numSeven.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "7";
});

const numEight = document.getElementById("8");

numEight.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "8";
});

const numNine = document.getElementById("9");

numNine.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "9";
});

const zero = document.getElementById("0");

zero.addEventListener("click", (e) => {
    document.getElementById("result").innerText += "0";
});

document.addEventListener("keypress", function(event) {
    
    switch (event.code) {
      case "Numpad1":
        document.getElementById("result").innerText += "1";
        break;
      case "Numpad2":
        document.getElementById("result").innerText += "2";
        break;
      case "Numpad3":
        document.getElementById("result").innerText += "3";
        break;
      case "Numpad4":
        document.getElementById("result").innerText += "4";
        break;
      case "Numpad5":
        document.getElementById("result").innerText += "5";
        break;
      case "Numpad6":
        document.getElementById("result").innerText += "6";
        break;
      case "Numpad7":
        document.getElementById("result").innerText += "7";
        break;
      case "Numpad8":
        document.getElementById("result").innerText += "8";
        break;
      case "Numpad9":
        document.getElementById("result").innerText += "9";
        break;
      case "Numpad0":
        document.getElementById("result").innerText += "0";
        break;
      case "NumpadAdd":
        document.getElementById("result").innerText += "+";
        break;
      case "NumpadSubtract":
        document.getElementById("result").innerText += "-";
        break;
      case "NumpadMultiply":
        document.getElementById("result").innerText += "*";
        break;
      case "NumpadDivide":
        document.getElementById("result").innerText += "/";
        break;
      case "NumpadDecimal":
        document.getElementById("result").innerText += ".";
        break;
      case 8:
        document.getElementById("result").innerText = "";
        break;
      case "Equal":
      case "Enter":
      case "NumpadEnter":
        document.getElementById("result").innerText =  eval(document.getElementById("result").innerText);
        break;
        default:
        break;
    }
  });
  
