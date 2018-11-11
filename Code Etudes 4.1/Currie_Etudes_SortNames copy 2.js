let notes = [
  {
    note: "A",
    begins: 0,
    duration: 3
  }, {
    note: "B",
    begins: 0,
    duration: 3
  }, {
    note: "C",
    begins: 1.5,
    duration: 1.5
  }
];

let sortNotes = function (a, b){
  if ( a.begins < b.begins){
    return -1;
  }
  if ( a.begins > b.begins){
    return 1;
  }
  if ( a.duration < b.duration){
    return -1;
  }
  if ( a.duration > b.duration){
    return 1
  }
return 0
}

let sorted_notes = notes.sort ( sortNotes )
console.log(sorted_notes)

function play_piano(my_song){
  for ( let i = 0; i<sorted_notes.length){
    console.log("play" + " " + sorted_notes.note)
  }
}
