let numo = [1, 2, 5, 10, 20, 50, 100, 250]
//ES5 Callback
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

//refactor to ES2015
const double = arr => arr.map(val => val*2);

//refactor the following to ES2015
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

//ES2015 refactor:
const squareAndFindEvens = numbers => numbers.map(num => num**2).filter(square => square % 2 === 0)