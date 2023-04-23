class Calculator {
  constructor(preveousNumber, currentNumber) {
    this.preveousNumber = preveousNumber || "";
    this.currentNumber = currentNumber || "";
    this.sing = "";
    this.finish = false;
  }

  allClear() {
    this.preveousNumber = "";
    this.currentNumber = "";
    this.sing = "";
  }

  deleteOne() {}

  appendNumber(number) {
    if (
      (this.currentNumber === "" && number === ".") ||
      (this.currentNumber === "0" && number === ".")
    ) {
      this.currentNumber = "0" + number;
      return;
    }
    if (this.currentNumber.includes(".") && number === ".") {
      return;
    }
    if (this.currentNumber === "" && number === "00") {
      number = "0";
    }
    if (this.currentNumber === "0" && number === "00") {
      return;
    }
    if (this.currentNumber === "0" && number === "0") {
      return;
    }
    if (this.currentNumber === "0") {
      this.currentNumber = "";
    }
    if (this.currentNumber.length > 14) {
        console.log('>14');
      return;
      //think
    }
    this.currentNumber = this.currentNumber + number;
  }

  appendSing(sing) {
    if (this.currentNumber === "" && this.preveousNumber === "") {
      return;
    }
    if (this.sing && sing && this.preveousNumber && !this.currentNumber) {
      this.sing = sing;
      return;
    }
    if (this.sing && this.preveousNumber && this.currentNumber) {
      this.calculate()
    }
    this.sing = sing;
    this.preveousNumber = this.currentNumber;
    this.currentNumber = "";
  }

  calculate() {
    let current = parseFloat(this.currentNumber);
    let prev = parseFloat(this.preveousNumber)
    if (this.currentNumber === "" && this.preveousNumber === "") {
      return;
    }

    console.log(prev, this.sing, current);
    switch (this.sing) {
      case "+":
        this.currentNumber = current + prev;
        break;
      case "-":
        this.currentNumber = prev - current;
        break;
      case "/":
        if(current === 0){
            alert('you can’t divide by zero');
            this.currentNumber = ''
            return;
        }
        this.currentNumber = (prev / current).toFixed(10);
        break;
      case "x":
        this.currentNumber = (current * prev).toFixed(10);
        break;

      default:
        return;
    }
    this.currentNumber = this.currentNumber + '';
    this.currentNumber = this.currentNumber.replace(/0*$/,"")
    if(this.currentNumber.endsWith('.')){
      this.currentNumber = this.currentNumber.substring(0, this.currentNumber.length-1)
    }
    console.log(this.currentNumber);

    this.preveousNumber = '';
    this.sing = '';
    console.log(this.currentNumber + "");
  }

  showOnScreen(res, form) {
    let strRes = "";
    let strForm = "";
    strForm = this.preveousNumber + " " + this.sing;
    strRes = this.currentNumber;
    res.textContent = strRes;
    form.textContent = strForm;
  }
}

const calculator = new Calculator();

const buttonsNumber = document.querySelectorAll(".numberButton");
const buttonsSign = document.querySelectorAll(".signButton");
const equal = document.querySelector(".equal");
const formula = document.querySelector(".formula");
const result = document.querySelector(".result");
const AC = document.querySelector(".clearAll");

buttonsNumber.forEach((el) => el.addEventListener("click", addValue));
buttonsSign.forEach((el) => el.addEventListener("click", addSign));
equal.addEventListener("click", getEqually);
AC.addEventListener("click", clearAll);

function addValue(e) {
  const key = e.target.textContent;
  calculator.appendNumber(key);
  calculator.showOnScreen(result, formula);
}

function addSign(e) {
  const key = e.target.textContent;
  calculator.appendSing(key);
  calculator.showOnScreen(result, formula);
}

function getEqually() {
  calculator.calculate();
  calculator.showOnScreen(result,formula)
}

function clearAll() {
  formula.textContent = "";
  result.textContent = "";
  calculator.allClear();
}
