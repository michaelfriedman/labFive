/////////////////////////////////////
/* Problem 1 (this is your demo)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum (num1, num2) {
	var add = (num1 + num2);
	var str = "The sum of " + num1 + " and " + num2 + " is " + add + ".";
	console.log(str);
	var array = [add, str];
	return array;
}
// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Don"t forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 4 and 7 is 28."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(num1, num2){
	var product = (num1 * num2);
	var str = "The product of " + num1 + " and " + num2 + " is " + product + ".";
	console.log(str);
	var array = [product, str];
	return array;
}
// Here is the test for multiply(); uncomment it to run it

testMultiply(4,7);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Don"t forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(num1,num2,num3) {
	var sumOfParameters = num1 + num2 + num3;
	var productOfParameters = num1 * num2 * num3;
	var str = num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + sumOfParameters + '.';
  var str2 = 'The product of ' + num1 + ' and ' + num2 + ' and ' + num3 + ' is ' + productOfParameters + '.';
  var arr = [sumOfParameters, productOfParameters, str, str2];
	return arr;
}
// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. don"t forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
testArray = [2,3,4];
function sumArray(args){
	var sum = 0;
	var str = args[0];
	var array = [];
	for(var i = 0; i < args.length; i++){
		sum += args[i];
	}
	for(var j = 1; j < args.length; j++){

		str += ("," + args[j]);
	}

	str += " was passed in as an array of numbers, and " + sum + " is their sum.";
	console.log(str);

	return [sum, str];

}
// Here is the test for sumArray(); uncomment it to run it
testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Don"t forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(args){
	var product = args[0];
	var str = "The numbers " + args[0];
	var array = [];
	for(var k = 1; k < args.length; k++){
		product *= args[k];
	}
	for(var j = 1; j < args.length; j++){
		str += ("," + args[j]);
	}
	str += " have a product of " + product + ".";
	console.log(str);
	return [product, str];
}
// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);
// Once you get the test passing, do an a-c-p cycle, synchronize the code between both GitHubs and both laptops, and swap Driver/Navigator roles. Submit the link to the repo via Canvas.

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

function testSum() {
  if (sum(4,7)[1] === "The sum of 4 and 7 is 11.") {
    console.log("%c TEST FOR sum() PASSES", "color: green");
  } else {
    console.log("%c TEST FOR sum() FAILS", "color: red");
  }
}

function testMultiply() {
  if (multiply(5,9)[1] === "The product of 5 and 9 is 45.") {
    console.log("%c TEST FOR multiply() PASSES", "color: green");
  } else {
    console.log("%c TEST FOR multiply() FAILS", "color: red");
  }
}

function testSumAndMultiply() {
  if (sumAndMultiply(4, 7, 5)[2] === "4 and 7 and 5 sum to 16." && sumAndMultiply(4, 7, 5)[3] === "The product of 4 and 7 and 5 is 140.") {
    console.log("%c TEST FOR sumAndMultiply() PASSES", "color: green");
  } else {
    console.log("%c TEST FOR sumAndMultiply() FAILS", "color: red");
  }
}

function testSumArray() {
  if (sumArray(testArray)[1] === "2,3,4 was passed in as an array of numbers, and 9 is their sum.") {
    console.log("%c TEST FOR sumArray() PASSES", "color: green");
  } else {
    console.log("%c TEST FOR sumArray() FAILS", "color: red");
  }
}

function testMultiplyArray() {
  if (multiplyArray(testArray)[1] === "The numbers 2,3,4 have a product of 24.") {
    console.log("%c TEST FOR multiplyArray() PASSES", "color: green");
  } else {
    console.log("%c TEST FOR multiplyArray() FAILS", "color: red");
  }
}
