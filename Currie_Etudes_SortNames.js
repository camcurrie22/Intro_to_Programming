let names = [
  {
    first_name: "joe",
    last_name: "Currie"
  }, {
    first_name: "Joe",
    last_name: "Currie"
  }, {
    first_name: "Cam",
    last_name: "Currie"
  }
];

let sortNames = function (a, b){
  if ( a.last_name < b.last_name){
    return -1;
  }
  if ( a.last_name > b.last_name){
    return 1;
  }
  if ( a.first_name < b.first_name){
    return -1;
  }
  if ( a.first_name > b.first_name){
    return 1
  }
return 0
}

console.log ( names.sort ( sortNames ))
