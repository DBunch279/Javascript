console.log("Odds 1 - 20: \n");

function Odds()
{
    for(var i = 1; i <= 20; i++)
    {
        if(i % 2 == 1)
        {
            console.log(i);
        }
    }
}
Odds();

console.log("Mutliples Of Three: \n");

function MultiplesOfThree()
{
    for(var i = 100; i >= 0; i--)
    {
        if(i % 3 == 0)
        {
            console.log(i);
        }
    }
}
MultiplesOfThree();

console.log("Sequence: \n");

function Sequence()
{
    for(var i = 4; i >= -3.5; i -= 1.5)
    {
        console.log(i);
    }
}
Sequence();

console.log("Sigma: \n");

function Sigma()
{
    var sum = 0;
    for(var i = 1; i <= 100; i++)
    {
        console.log(i);
        sum += i;
    }
    console.log("Sum is: " + sum);
}
Sigma();

console.log("Factorial: \n");

function Factorial()
{
    var number = 12;
    for(var i = number - 1; i > 0; i--)
    {
        number = number * i;
    }
    console.log(number);
}
Factorial();
