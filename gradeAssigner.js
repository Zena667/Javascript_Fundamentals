function assignGrade(arg) {
  if (arg > 90) {
  return "A";
  }  else if (arg > 80) {
  return "B";
  }  else if (arg > 70) {
  return "C";
  }  else if (arg > 60) {
  return "D";
  }
}

console.log('You got a grade of: ' + assignGrade(75));
console.log('You got a grade of: ' + assignGrade(55));
console.log('You got a grade of: ' + assignGrade(2));