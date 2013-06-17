function calculateAge(birthYear) {
  var age = (new Date().getFullYear()) - birthYear;
  console.log('You are either ' + age + ' or ' + (age - 1));
}

calculateAge(2000);
calculateAge(1980);
calculateAge(1982);