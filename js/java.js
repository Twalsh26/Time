const d = new Date();
let hour = d.getHours();
hour = 2
if(hour < 12){
    document.getElementById ("Greetings").innerText = "Good Morning";
    document.getElementById ("Picture").src = "img/sun-rays-png-13.png";
    
} else if (hour < 17){
    document.getElementById ("Greetings").innerText = "Good Afternoon";
    document.getElementById ("Picture").src = "img/4-clipart-sun-1.png";
} else {
    document.getElementById ("Greetings").innerText = "Good Night";
    document.getElementById ("Picture").src = "img/purepng.com-moonmoonastronomical-bodyfifth-largest-natural-satellitenatural-satellitemoon-light-141152706663245bda.png";
}

//let greetingElement = document.getElementById ("Greetings");
//console.log(greetingElement);


