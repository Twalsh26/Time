const d = new Date();
let hour = d.getHours();
hour = 12
if(hour < 12){
    document.querySelector (".words").innerText = "Good Morning";
    document.querySelector ("#Picture").src = "img/sun-rays-png-13.png";
    document.querySelector(".Night").classList.add("d-none");
  document.querySelector(".Afternoon").classList.add("d-none");
    
} else if (hour < 17){
    document.querySelector (".words").innerText = "Good Afternoon";
    document.querySelctor ("#Picture").src = "img/4-clipart-sun-1.png";
    document.querySelector(".Night").classList.add("d-none");
  document.querySelector(".morning").classList.add("d-none");
} else {
    document.querySelctor (".words").innerText = "Good Night";
    document.querySelctor ("#Picture").src = "img/purepng.com-moonmoonastronomical-bodyfifth-largest-natural-satellitenatural-satellitemoon-light-141152706663245bda.png";
    document.querySelector(".morning").classList.add("d-none");
  document.querySelector(".Afternoon").classList.add("d-none");
}

//let greetingElement = document.getElementById ("Greetings");
//console.log(greetingElement);


