
function findTheSmallestInteger(str: string){

    for (let i = 0; i < str.length; i++) {
      let currentNumber = parseInt(str.slice(0, i + 1));
      let nextExpected = currentNumber + 1;
      let sequence = currentNumber.toString()


      while (sequence.length < str.length) {
        sequence += nextExpected;
        nextExpected++;
    }

    if(sequence===str){
      return currentNumber
    }
    }
}

console.log(findTheSmallestInteger("121122123"))
console.log(findTheSmallestInteger("9899100"));
