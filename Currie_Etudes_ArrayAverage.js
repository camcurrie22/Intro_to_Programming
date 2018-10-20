function array_average(numbers){
  let total = 0;
  for ( a = 0; a < numbers.length; a++){
    total = total + numbers[a]
  }
  let average = total / numbers.length
  return average
}
console.log ( array_average( [1, 2, 3, 4] ) )
