var displaybox = document.querySelector("#display");
var OperationPerformed = false;

var operation;
var number1;
var number2;
var flag = false;
var dotflag = false;

function press(number)
{
    if(OperationPerformed == false)
    {
        if(displaybox.innerText == 0)
        {
            displaybox.innerText = '';
        }
        if(number != '.')
        {
            displaybox.innerText = displaybox.innerText + number;
        }
        number1 = displaybox.innerText;
    }
    if(OperationPerformed == true)
    {
        if(flag == false)
        {
            displaybox.innerText = '';
            flag = true;
            dotflag = false;
        }
        if(number != '.')
        {
            displaybox.innerText = displaybox.innerText + number;
        }
        number2 = displaybox.innerText;
    }
    if(number == '.' && dotflag == false)
    {
        displaybox.innerText = displaybox.innerText + number;
        dotflag = true;
    }
}

function setOP(operand)
{
    operation = operand;
    OperationPerformed = true;
}

function calculate()
{
    var result = 0;
    switch(operation)
    {
        case '+':
            result = number1 - (-number2); //The reason this reads like this is because it seems that it was orignially trying to add to strings together EX 5 + 1 = 51
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
            default:
                break;
    }
    displaybox.innerText = result;
}

function clr()
{
    displaybox.innerText = 0;
    OperationPerformed = false;
    flag = false;
    number1 = 0;
    number2 = 0;
    dotflag = false;
}