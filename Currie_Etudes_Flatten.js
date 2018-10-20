let arr = [[1,2],[3,4]];

newArr = arr.reduce(function(a, b){
  return a.concat(b);
});
console.log(newArr);
