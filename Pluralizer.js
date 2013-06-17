function pluralize(noun, number) {
  if(noun != "sheep" && noun != "geese") {
    if(number > 1) {
        console.log(number + noun + "s");
    }
    else
        console.log(number + noun)
  }
}

console.log(pluralize("dog", 5));
console.log(pluralize("cat", 1));