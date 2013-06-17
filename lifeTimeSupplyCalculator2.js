function calculateSupply(age, amountPerDay) {
  var maxAge = 100;
  var lifeTimeConsume = (maxAge - age) * (amountPerDay * 365);
  console.log('You will need ' + lifeTimeConsume + ' to last you until the ripe old age of ' + maxAge);
}
calculateSupply(22, 3);
calculateSupply(64, 2.5);
calculateSupply(99, 7);
