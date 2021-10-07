console.log("Food: \n");

function alwaysHungry(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] == "food")
        {
            console.log("yummy");
        }
        else
        {
            console.log("I'm hungry");
        }
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

console.log("High Pass: \n");

function highPass(arr, cutoff)
{
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] > 5)
        {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

console.log("Better than average: \n");

function betterThanAverage(arr)
{
    var sum = 0;
    for(var i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    sum = sum / arr.length;
    var count = 0;
    for(var j = 0; j < arr.length; j++)
    {
        if(arr[j] > sum)
        {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

console.log("Array Reverse: \n");

function reverse(arr)
{
    var reverseArray = [];
    for(var i = 0; i < arr.length; i++)
    {
        reverseArray[i] = arr[(arr.length-1) - i];
    }
    return reverseArray;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

console.log("Fibonacci Array: \n");

function fibonacciArray(n)
{
    var fibArr = [0, 1];
    var numbers = n - 2;
    for(var i = 0; i < numbers; i++)
    {
        nextvalue = (fibArr[fibArr.length-1]) + (fibArr[fibArr.length-2]);
        fibArr.push(nextvalue);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);