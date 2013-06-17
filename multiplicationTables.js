var multiplier = 9;
for (var x = 0; x <= 10; x++) {
    console.log(x + ' * ' + multiplier + ' = ' + (x*9));
}

for(var multiplier = 0; multiplier <= 10; multiplier++) {
    for(var i = 0; i <= 10, i++) {
        var result = multiplier * i;
        console.log(multiplier + ' * ' + i + ' = ' + result);
    }
}