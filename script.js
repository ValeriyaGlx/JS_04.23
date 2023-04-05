//task 1

function getNumberInfo(){
  let number = prompt('Enter number');
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