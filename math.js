function double(number){
  return(2*number);
}

console.log(double(14));

function square(number){
  return(number*number);
}
console.log(square(4));

function isEven(number){
  if (number%2 == 0){
    return true;
  }
  else{
    return false;
  }
}
console.log(isEven(15));
console.log(isEven(2.5));
console.log(isEven(4.0));

function squareIsEven(number){
  return (isEven(square(number)));
}
for (let i = 0; i <= 20; i++){
  console.log(squareIsEven(i));
}

function timesTen(number){
  return number*10;
}
console.log(timesTen(8));
