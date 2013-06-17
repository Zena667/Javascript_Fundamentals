function helloWorld(arg) {
  if(arg == "pol") {
  return "Dzien dobry.";
  }
  else if(arg == "fr") {
  return "Bon jour.";
  }
  else {
    return "Hello, World";
  }
}
console.log(helloWorld("pol"));
console.log(helloWorld("en"));
console.log(helloWorld("fr"));