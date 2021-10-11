var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var hours = document.getElementById('hour');

function getSecondsSinceStartOfDay() 
{
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() 
{
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    seconds.style.transform = "rotate("+new Date().getSeconds()*6+"deg)";
    minutes.style.transform = "rotate("+((time/60) % 60) * 6+"deg)";
    hours.style.transform = "rotate("+((time/3600) % 12) * 30+"deg";
}, 1000);
