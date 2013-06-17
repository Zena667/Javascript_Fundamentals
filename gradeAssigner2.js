function assignGrade(arg) {
  if (arg > 90) {
  return "A";
  }  else if (arg > 80) {
  return "B";
  }  else if (arg > 70) {
  return "C";
  }  else if (arg > 60) {
  return "D";
  } else {
    return 'F';
  }
}
for(var x = 60; x <= 100; x++) {
  console.log('For ' + x + ' you got a ' + assignGrade(x));    
}


"For 89, you got a B. For 90, you got an A."