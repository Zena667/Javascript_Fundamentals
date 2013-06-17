function squareNumber(number) {
var squareNum = number*number;
console.log('The result of squaring the ' + number + ' is ' + squareNum);
return squareNum;
}

squareNumber(3);

function halfNumber(number) {
var halfNum = number / 2;
console.log('Half of ' + number + ' is ' + halfNum);
return halfNum;
}

halfNumber(5);

function percentOf(num1, num2) {
var percent = (num1/num2)*100;
console.log(num1 + ' is ' + percent + '% of ' + num2);
return percent;
}

percentOf(5, 10)

function areaOfCircle(radius) {
var area = Math.PI*squareNumber(radius);
console.log('The area for a circle with a radius ' + radius + ' is ' area.toFixed(2));
return area;
}

areOfCircle(2)

function calculator(num) {
var half = halfNum(num);
var squared = squareNumber(half);
var area = areaOfCircle(squared);
var result = percentOf(squared, area);
}

calculator(4);