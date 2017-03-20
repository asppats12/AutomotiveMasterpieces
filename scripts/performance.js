window.onload = function(){
	var bugatti = document.getElementById("Bugatti");
	var ferrari = document.getElementById("Ferrari");
	var koenigsegg = document.getElementById("Koenigsegg");
	var lamborghini = document.getElementById("Lamborghini");
	var mclaren = document.getElementById("Mclaren");
	var porsche = document.getElementById("Porsche");
	
	var images = document.getElementsByClassName("logo_img");
	
	bugatti.addEventListener("mouseover",function(){images[0].src = "images/exteriors/bugatti_1.jpg"});
	bugatti.addEventListener("mouseout", function(){images[0].src = "images/logos/bugatti_logo_2.jpg"});
	
	ferrari.addEventListener("mouseover",function(){images[1].src = "images/exteriors/ferrari.jpg"});
	ferrari.addEventListener("mouseout", function(){images[1].src = "images/logos/ferrari_logo_2.jpg"});
	
	koenigsegg.addEventListener("mouseover",function(){images[2].src = "images/exteriors/koenigsegg.jpg"});
	koenigsegg.addEventListener("mouseout", function(){images[2].src = "images/logos/koenigsegg_logo.jpg"});
	
	lamborghini.addEventListener("mouseover",function(){images[3].src = "images/exteriors/lamborghini.jpg"});
	lamborghini.addEventListener("mouseout", function(){images[3].src = "images/logos/lamborghini_logo.jpg"});
	
	mclaren.addEventListener("mouseover",function(){images[4].src = "images/exteriors/mclaren.jpg"});
	mclaren.addEventListener("mouseout", function(){images[4].src = "images/logos/mclaren_logo.jpg"});
	
	porsche.addEventListener("mouseover",function(){images[5].src = "images/exteriors/porsche.jpg"});
	porsche.addEventListener("mouseout", function(){images[5].src = "images/logos/porsche_logo_2.jpg"});
}