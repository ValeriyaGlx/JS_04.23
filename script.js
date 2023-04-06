//task 1

function getNumberInfo(){
  let number = prompt('Enter valid number');
    if(Number.isNaN(number*1) || number*1<0 || !Number.isInteger(number*1) || !number.trim()){
      console.log("Incorrect input!");
      getNumberInfo();
    } else {
      number = Number(number);
      console.log(`Number: ${number}
Factorial: ${getFactorial(number)}
Square: ${number**2}
isPrime: ${isPrime(number)}
isEven: ${number%2===0}
Delimiters: ${getDelimiters(number)}`)
    }
};

getNumberInfo();

function getFactorial(n){
    if(n===0){
       return 1;
       } else{
       return  n = n * getFactorial(n-1);
    }
}

function isPrime(n){
  if(n===0  || n===1){return false};

  for(let i=2; i<n; i++){
    if(n%i===0){
        return false;
    }
  }
  return true;
}

function getDelimiters(n){
    if(n===0){
        return 'no value';
    };
    const arr = [];
    for(let i=1; i<=n; i++){
      if(n%i===0){
        arr.push(i);
      }
    }
    return arr.reverse().join(', ');
}

//task 2

function getMatrix(){
  let simb = prompt('Enter any character set, no more than 3 characters and no less than 1.');
  let number = prompt('Enter valid number, only positive more than 0 and less than 10.');
  if(simb.length > 3 || !simb.trim() || simb.includes(' ')){
    console.log("Incorrect input!");
    getMatrix();
    return;
  }

  if(Number.isNaN(number*1) || number*1 < 1 || number*1 > 10 || !Number.isInteger(number*1) || !number.trim()){
    console.log("Incorrect input!");
    getMatrix();
    return;
  }

  let result = '';

  for (let i=1; i<=number; i++){
    for(let j=1; j<=number; j++){
      result+=`${simb} `;
    }
   result += '\n';
  }
 return console.log(result);
}

getMatrix();
