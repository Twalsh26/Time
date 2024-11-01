const d = new Date();
let hour = d.getHours();
hour = 12
if(hour < 12){
    document.querySelector (".words").innerText = "Good Morning";
    document.querySelector ("#Picture").src = "img/sun-rays-png-13.png";
 document.getElementsByTagName("body")[0].classList.add("morning")
    
} else if (hour < 17){
    document.querySelector (".words").innerText = "Good Afternoon";
    document.querySelector ("#Picture").src = "img/4-clipart-sun-1.png";
  document.getElementsByTagName("body")[0].classList.add("Afternoon")
} else {
    document.querySelector (".words").innerText = "Good Night";
    document.querySelector ("#Picture").src = "img/purepng.com-moonmoonastronomical-bodyfifth-largest-natural-satellitenatural-satellitemoon-light-141152706663245bda.png";
document.getElementsByTagName("body")[0].classList.add("Night")
}

//let greetingElement = document.getElementById ("Greetings");
//console.log(greetingElement);


