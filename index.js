class Calculator {
  constructor(preveousNumber, currentNumber) {
    this.preveousNumber = preveousNumber || "";
    this.currentNumber = currentNumber || "";
    this.sing = "";
  }

  allClear() {
    this.preveousNumber = "";
    this.currentNumber = "";
    this.sing = "";
  }

  deleteOne() {
    if (this.currentNumber === "" && this.preveousNumber === "") {
      return;
    }

    this.currentNumber = this.currentNumber.substring( 0, this.currentNumber.length - 1);

    if (
      this.currentNumber === "" &&
      this.sing === "" &&
      this.preveousNumber === ""
    ) {
      this.currentNumber = "0";
    }

    this.showOnScreen(result, formula);
  }

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
    if(this.currentNumber === "-" && number === "0" ||
       this.currentNumber === "-" && number === "." ||
       this.currentNumber === "-" && number === "00"
       ){
      number = "0."
    }
    if(this.currentNumber === "-0"){
      this.currentNumber = '';
      number = -number;
    }

    if (this.currentNumber.length > 14) {
      alert("number is too long");
      return;
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
      this.calculate();
    }

    if(this.currentNumber.endsWith('.')){
      this.currentNumber = this.currentNumber.substring(0, this.currentNumber.length-1)
    }

    if(this.currentNumber=== "-0"){
      this.currentNumber= "0"
    }

    this.sing = sing;
    this.preveousNumber = this.currentNumber;
    this.currentNumber = "";
  }

  switch() {
    if (this.currentNumber === "" || this.currentNumber === "0") {
      return;
    }
    this.currentNumber = -this.currentNumber + "";
    this.showOnScreen(result, formula);
  }

  calculate() {
    let current = parseFloat(this.currentNumber);
    let prev = parseFloat(this.preveousNumber);
    if (this.currentNumber === "" && this.preveousNumber === "") {
      return;
    }

    if (!this.currentNumber) {
      this.currentNumber = this.preveousNumber;
      this.preveousNumber = "";
      this.sing = "";
      return;
    }

    switch (this.sing) {
      case "+":
        this.currentNumber = (current + prev).toFixed(8);
        break;
      case "-":
        this.currentNumber = (prev - current).toFixed(8);
        break;
      case "/":
        if (current === 0) {
          alert("you can’t divide by zero");
          this.currentNumber = "";
          return;
        }
        this.currentNumber = (prev / current).toFixed(8);
        break;
      case "x":
        this.currentNumber = (current * prev).toFixed(8);
        break;

      default:
        return;
    }
    this.currentNumber = this.currentNumber + "";
    if (this.currentNumber !== "0") {
      this.currentNumber = this.currentNumber.replace(/0*$/, "");
    }
    if (this.currentNumber.endsWith(".")) {
      this.currentNumber = this.currentNumber.substring(
        0,
        this.currentNumber.length - 1
      );
    }
    if (this.currentNumber.length > 14) {
      this.currentNumber = this.currentNumber.substring(0, 15);
    }
    this.preveousNumber = "";
    this.sing = "";
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
const changeOperand = document.querySelector(".changeOperand");
const equal = document.querySelector(".equal");
const formula = document.querySelector(".formula");
const result = document.querySelector(".result");
const AC = document.querySelector(".clearAll");
const deleteButton = document.querySelector(".delete");

buttonsNumber.forEach((el) => el.addEventListener("click", addValue));
buttonsSign.forEach((el) => el.addEventListener("click", addSign));
equal.addEventListener("click", getEqually);
AC.addEventListener("click", clearAll);
changeOperand.addEventListener("click", switchOperand);
deleteButton.addEventListener("click", deleteOne);

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
  calculator.showOnScreen(result, formula);
}

function clearAll() {
  formula.textContent = "";
  result.textContent = "";
  calculator.allClear();
}

function switchOperand() {
  calculator.switch();
}

function deleteOne() {
  calculator.deleteOne();
}
