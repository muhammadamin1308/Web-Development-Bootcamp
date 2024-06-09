// Leap year checker
function isLeap(year) {
    let leap = console.log("Leap year.");
    let notLeap = console.log("Not leap year.");
  
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return leap;
        } else {
          return notLeap;
        }
      } else {
        return leap;
      }
    } else {
      return notLeap;
    }
  }
  
  
  //FizzBuzz
  let output = []
  let count = 0
  
  function fizzBuzz(){
      count++
      if(count % 3 === 0 && count % 5 === 0){
          output.push("FizzBuzz")
      }
      else if(count % 3 === 0){
          output.push("Fizz")
          // console.log(output.length)
      }else if(count % 5 === 0){
          output.push("Buzz")
      } else{
              output.push(count)
      }
      console.log(output)
  }
  fizzBuzz()
  
  //99 bottles of water
  count = 100
  while(count >= 1){
      console.log( count + " bottles of water on the wall, " + count + " bottles of water. Take 1 down, pass it around, " + (count - 1) + " bottles of water on the wall.")
      count--
  }

// Fibbonaci

function fibonacciGenerator (n) {
  let output = []
 if(n === 1){
     output = [0]
 }else if(n === 2){
     output = [0, 1]
 } else{
     output = [0, 1]
     for(let i = 2; i < n; i++){
         output.push(output[output.length - 2] + output[output.length - 1]) 
     }
 }
  return output
}

fibonacciGenerator(10)