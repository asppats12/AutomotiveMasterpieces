window.onload = function(){
	var bentley = document.getElementById("Bentley");
	var bmw = document.getElementById("BMW");
	var jaguar = document.getElementById("Jaguar");
	var mercedes = document.getElementById("Mercedes");
	var rolls_royce = document.getElementById("Rolls_Royce");
	var tesla = document.getElementById("Tesla");
	
	var images = document.getElementsByClassName("logo_img");
	
	bentley.addEventListener("mouseover",function(){images[0].src = "images/exteriors/bentley.jpg"});
	bentley.addEventListener("mouseout", function(){images[0].src = "images/logos/bentley_logo.png"});
	
	bmw.addEventListener("mouseover",function(){images[1].src = "images/exteriors/bmw.jpg"});
	bmw.addEventListener("mouseout", function(){images[1].src = "images/logos/bmw_logo.jpg"});
	
	jaguar.addEventListener("mouseover",function(){images[2].src = "images/exteriors/jaguar.jpg"});
	jaguar.addEventListener("mouseout", function(){images[2].src = "images/logos/jaguar_logo.png"});
	
	mercedes.addEventListener("mouseover",function(){images[3].src = "images/exteriors/mercedes_benz.jpg"});
	mercedes.addEventListener("mouseout", function(){images[3].src = "images/logos/mercedes_logo.png"});
	
	rolls_royce.addEventListener("mouseover",function(){images[4].src = "images/exteriors/rolls_royce.jpg"});
	rolls_royce.addEventListener("mouseout", function(){images[4].src = "images/logos/rolls_royce_logo_2.jpg"});
	
	tesla.addEventListener("mouseover",function(){images[5].src = "images/exteriors/tesla.jpg"});
	tesla.addEventListener("mouseout", function(){images[5].src = "images/logos/tesla_logo.png"});
} 