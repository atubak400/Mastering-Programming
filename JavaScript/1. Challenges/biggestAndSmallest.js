myArray = [6,  5, 10, 57, -3, 8]
let output = {};

// First Code
function findBiggestAndSmallest(numbers) {
  
  let sortedNumbers = [];
  for (let i=0; i<numbers.length; i++) {
        sortedNumbers.push(numbers[i])
        sortedNumbers.sort(function(a,b){
          return b-a
        })
  }
output = {biggest: sortedNumbers[0], smallest: sortedNumbers[sortedNumbers.length-1]}
// It doesn't handle cases with an empty input array.
}
findBiggestAndSmallest(myArray)
console.log(output)

// Second Code
function findBiggestAndSmallest(input) {
    input.sort(function(a,b) {
      return b-a
    })
  let big = input[0]
  let small = input[input.length-1]
  if(input.length === 0){
    return {}
  } else {
  let output = {biggest: big, smallest: small}
  return output;
  }
  }
  const sorted = findBiggestAndSmallest(myArray)
  console.log(sorted)
  


  