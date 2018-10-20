function reverse_array (array){
  let rev_array = [];
  for ( let a = array.length - 1; a >= 0; a-- ){
    rev_array.push(array[a])
  }
  return rev_array
}
console.log (reverse_array([1, 2, 3, 4]))
