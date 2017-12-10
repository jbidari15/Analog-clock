var secondHand=document.querySelector(".secondHand") ;
var minuteHand = document.querySelector(".minuteHand");
var hourHand  = document.querySelector(".hourHand");

var digitalHour = document.getElementById("h");
var digitalMinutes = document.getElementById("m");
var digitalSeconds = document.getElementById("s");
function setDate(){
	var nowDate = new Date();
	var nowSecond = nowDate.getSeconds();
	var secondDegrees = ((360/60)*nowSecond)+90;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	var nowMinute = nowDate.getMinutes();
	var minuteDegrees = ((360/60)*nowMinute)+90;
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

	var nowHour=nowDate.getHours();
	var hourDegrees= ((360/60)*nowHour)+90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	h.innerHTML = nowHour;
	m.innerHTML = nowMinute;
	s.innerHTML = nowSecond;
	
}
setInterval(setDate,1000);

