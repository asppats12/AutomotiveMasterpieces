function setId(id){
	localStorage.setItem("page_id", id);
	return true;
}

function load_page(){
	switch(localStorage.getItem("page_id")){
		case '1':
			startSlideshow(localStorage.getItem("page_id"));
			document.title = "Bugatti Veyron Super Sport";
			document.getElementById("car").innerHTML = "Bugatti Veyron Super Sport";
			
			document.getElementById("video").src = "https://www.youtube.com/embed/pcYCAVRpThc";
			
			document.getElementById("intro").innerHTML = "Bugatti continued the brand tradition of developing Super Sport versions of successful models with the Veyron 16.4 Super Sport. The Veyron 16.4 Super Sport expanded the limits of possibility in the automotive sector even further and set new benchmarks.";
			document.getElementById("second").innerHTML = "1,200 hp, a maximum torque of 1,500 Nm, acceleration from 0 to 100 km/h in 2.5 seconds and a top speed of 415 km/h – these were the performance specs that amazed and inspired experts and car fans throughout the world when this supercar was launched in 2010. But that was not all. The same year, the Super Sport fulfilled the strict requirements of Guinness World Records and set a new world speed record for road cars of 431.072 km/h. Despite numerous attempts to dethrone the Super Sport from its status as the fastest production supercar, the Bugatti remains unbeaten to this day.";
			document.getElementById("third").innerHTML = "The Veyron 16.4 Super Sport is completely sold out.";
			
			document.getElementById("horsepower").innerHTML = "1200bhp";
			document.getElementById("acceleration").innerHTML = "2.5sec 0-60mph";
			document.getElementById("topspeed").innerHTML = "265mph";
			document.getElementById("price").innerHTML = "$2.4 million USD";
			break;
		case '2':
			startSlideshow(localStorage.getItem("page_id"));
			document.title = "Ferrari La Ferrari";
			document.getElementById("car").innerHTML = "Ferrari La Ferrari";
			
			document.getElementById("video").src = "https://www.youtube.com/embed/TEnNaUg6Vm4";
			
			document.getElementById("intro").innerHTML = "The LaFerrari needs few superlatives. It is Ferraris' most ambitious project yet, pushing the boundaries of technology for a road car. It gathers together the marque's greatest technical capabilities from both GT and Formula 1 engineering, delivering the highest performance ever reached by a production Ferrari. And yet, the cause is noble. All this advanced technology will filter to the rest of the Ferrari model range.";
			document.getElementById("second").innerHTML = "The Ferrari LaFerrari - or just LaFerrari if you will - is the apogee of Ferrari’s current roadcar programme: a carbon, two-seat hypercar that melds a 6.3-litre Ferrari V12 with a KERS-esque battery pack and electric motor to give 950bhp and 663lb ft of torque. As you might expect, it looks like a spaceship, and drives like the best Ferrari ever made. Which in terms of useable horsepower, it is. Only 499 have been built, available only to serious Ferrari collectors, and they’re all sold out. A car so fantastic the company decided to make it definitive (it is literally called The Ferrari)";
			document.getElementById("third").innerHTML = "it has a V12 with KERS electrification that amounts to 950bhp of pure industrial awesomeness.";
			
			document.getElementById("horsepower").innerHTML = "789bhp";
			document.getElementById("acceleration").innerHTML = "2.5 0-60mph";
			document.getElementById("topspeed").innerHTML = "218mph";
			document.getElementById("price").innerHTML = "$1.4 million USD";
			break;
		case '3':
			startSlideshow(localStorage.getItem("page_id"));
			document.title = "Koenigsegg Agera R";
			document.getElementById("car").innerHTML = "Koenigsegg Agera R";
			
			document.getElementById("video").src="https://www.youtube.com/embed/RUfkyMCDYhU";
			
			document.getElementById("intro").innerHTML = "The Koenigsegg Agera R was produced between 2011 and 2014. 18 examples of the Agera R were produced during that time. The Agera R built upon the features and functionality of the Agera with new, unique solutions to enhance both performance and visual appearance even further.";
			document.getElementById("second").innerHTML = "Enhancements included: visible carbon on the front bonnet and bumper, new front side winglets, an all-new Aero exhaust, increased engine power with a raised RPM limit. Koenigsegg was the first Hypercar manufacturer to take steps toward green technology with the release of the biofuel CCXR in 2007. The Agera R, based on the critically acclaimed Agera, follows in the footsteps of the CCXR as it also runs on biofuel.";
			document.getElementById("third").innerHTML = "The Agera R’s fuel system has enough flow capacity to generate 1140hp and 1200Nm of torque on E85 and E100 biofuel. As there is less energy content per given volume in these biofuels compared to normal petrol, the fuel system has to manage a flow that is similar to a 2000hp petrol engine, which means that the Agera R’s return-less fuel system had the highest capacity of any car in production at the time.";
			
			document.getElementById("horsepower").innerHTML = "1140bhp";
			document.getElementById("acceleration").innerHTML = "2.8 0-60mph";
			document.getElementById("topspeed").innerHTML = "273mph(Theoretical)";
			document.getElementById("price").innerHTML = "$1.5 million USD";
			break;
		case '4':
			startSlideshow(localStorage.getItem("page_id"));
			document.title = "Lamborghini Aventador";
			document.getElementById("car").innerHTML = "Lamborghini Aventador";
			
			document.getElementById("video").src="https://www.youtube.com/embed/0QjF6A3Zwkk";
			
			document.getElementById("intro").innerHTML = "Brutally powerful and obscenely flamboyant, the Aventador is unburdened by reality. Crazy expensive and crazy fast, it’s capable of amazing performance without feeling like it’s going to snap-spin into a ditch, which is refreshing in a supercar. Available as a coupe (or roadster), it has a 6.5-liter 691-hp V-12, a 7-speed automated manual transmission and all-wheel drive. For the ultimate, the Superveloce has 740 hp and a claimed top speed of 217 mph. In our testing, it did 0-60 in 2.7 seconds.";
			document.getElementById("second").innerHTML = "Soon after the Aventador unveiling, Lamborghini announced that it had already sold over 12 of the production vehicles, with deliveries starting in the second half of 2011.";
			document.getElementById("third").innerHTML = "In keeping with Lamborghini tradition, the Aventador is named after a fighting bull. Aventador was a bull that fought particularly valiantly in the bull ring of Zaragoza, Spain in 1993. The bull which the Aventador is named after earned the Trofeo de la Peña La Madroñera for its courage in the arena.";
			
			document.getElementById("horsepower").innerHTML = "740bhp";
			document.getElementById("acceleration").innerHTML = "2.9sec 0-60mph";
			document.getElementById("topspeed").innerHTML = "217mph";
			document.getElementById("price").innerHTML = "$402,000 USD";
			break;
		case '5':
			startSlideshow(localStorage.getItem("page_id"));
			document.title = "Mclaren P1";
			document.getElementById("car").innerHTML = "Mclaren P1";
			
			document.getElementById("video").src="https://www.youtube.com/embed/zj29plvUkqA";
			
			document.getElementById("intro").innerHTML = "The best-looking cars are the ones with real substance as well as style. The McLaren P1™ is a stunning piece of automotive design, but you won’t find any needless ornaments or frivolous styling features on it. Every surface has been designed to work, every part given the same aerodynamic consideration as if it was part of an aircraft or a Formula 1™ car.";
			document.getElementById("second").innerHTML = "Despite its strictly limited production, the McLaren P1™ underwent a comprehensive test programme, designed to ensure that the car and its state-of-the-art powertrain could deliver its extraordinary breadth of capability anywhere an owner might choose to take it. Prototypes, and the engineering team, travelled the world to ensure the car could function in the hottest and coldest climates. And, of course, the toughest environment of all – Germany’s Nürburgring Nordschleife, and the need to meet the project target of a sub-seven-minute lap.";
			document.getElementById("third").innerHTML = "Although the McLaren P1™ is one of the most technically complex cars ever created, the systems all work together to deliver both performance and driver reward.";
			
			document.getElementById("horsepower").innerHTML = "903bhp";
			document.getElementById("acceleration").innerHTML = "2.8sec 0-60mph";
			document.getElementById("topspeed").innerHTML = "217mph(Electronically Limited)";
			document.getElementById("price").innerHTML = "$1.3 million USD";
			break;
		case '6':
			startSlideshow(localStorage.getItem("page_id"));
			document.title = "Porsche 918 Spyder";
			document.getElementById("car").innerHTML = "Porsche 918 Spyder";
			
			document.getElementById("video").src="https://www.youtube.com/embed/vlgJV37KUz4";
			
			document.getElementById("intro").innerHTML = "It took Porsche years to develop a worthy successor to the vaunted Carrera GT supercar, but at last, the 918 is here—and it’s a plug-in hybrid! With a combined 887 hp and 944 lb-ft of torque from its mid-mounted V-8 and electric motors—one at each axle—the 918 delivers Bugatti-like acceleration, tenacious handling, and a 211-mph top end. And of course, it’s every bit as exotic-looking as any near-million-dollar supercar should be, with a low-slung, targa body, and ultra-futuristic cabin.";
			document.getElementById("second").innerHTML = "The 2015 Porsche 918 Spyder delivers unheralded levels of both performance and efficiency in a supercar.";
			
			document.getElementById("horsepower").innerHTML = "887bhp";
			document.getElementById("acceleration").innerHTML = "2.6sec 0-60mph";
			document.getElementById("topspeed").innerHTML = "218mph";
			document.getElementById("price").innerHTML = "$887,000 USD";
			break;
		case '7':
			startSlideshow(localStorage.getItem("page_id"));
			document.title = "Bentley Continental GT";
			document.getElementById("car").innerHTML = "Bentley Continental GT";
			
			document.getElementById("video").src = "https://www.youtube.com/embed/2_VIn0fgbNs";
			document.getElementById("intro").innerHTML = "The luxury of spontaneity – the freedom to take to the open road on your own terms. No other car on the road today exempliﬁes the spirit of life’s grand tour more than the Bentley Continental GT.";
			document.getElementById("second").innerHTML = "The new model sports an even more powerful W12 twin turbo engine, up to 590 PS from 575 PS, and an innovative variable displacement system that creates more power, but with lower emissions than ever before.";
			document.getElementById("third").innerHTML = "Alongside this increased performance is a suite of reﬁnements to create the most luxurious travelling experience. They include a new, more sculpted and sporty steering wheel allowing the driver’s hands to ﬁt, and connect, more closely with the car. There’s an optional semi-aniline hide that forms the enhanced straight-ﬂute seating for an even more luxurious travelling experience. Supercar speed meets handcrafted luxury.";
			
			document.getElementById("horsepower").innerHTML = "521bhp";
			document.getElementById("acceleration").innerHTML = "3.9sec 0-60mph";
			document.getElementById("topspeed").innerHTML = "188mph";
			document.getElementById("price").innerHTML = "$257,254 USD";
			break;
		case '8':
			startSlideshow(localStorage.getItem("page_id"));
			document.title = "BMW 7 Series";
			document.getElementById("car").innerHTML = "BMW 7 Series";
			
			document.getElementById("video").src="https://www.youtube.com/embed/XyQ42lBkStU";
			
			document.getElementById("intro").innerHTML = "The new BMW 7 Series represents our take on contemporary luxury. We consider technical innovation and a high quality of all details as indispensable as the emotional form language and the atmosphere of wellbeing of the interior. During the design process, we worked with the idea of ‘Technological Poetry’ – the feeling of a perfect interaction between progressive technology and its translation into design.” – Karim Habib, Head of Design BMW Automobiles.";
			document.getElementById("second").innerHTML = "The search for pioneering innovations is the driving force for the BMW engineers. With functions such as BMW Gesture Control, they are setting further future-orientated standards in the BMW 7 Series. In addition, with BMW Touch Command, a tablet for controlling key functions has been integrated into a BMW vehicle for the first time.";
			document.getElementById("third").innerHTML = "The BMW 7 Series extends typical BMW driving pleasure to include the enjoyment of being driven. Passengers who occupy the luxurious seats in the rear enjoy a generous amount of space. Optional Active Comfort Drive chassis technology offers a driving experience of unrestricted comfort and dynamics in every situation. Ambient light design and innovative comfort and entertainment functions ensure a supreme level of relaxed travelling pleasure.";
			
			document.getElementById("horsepower").innerHTML = "320bhp";
			document.getElementById("acceleration").innerHTML = "4.8sec 0-60mph";
			document.getElementById("topspeed").innerHTML = "155mph";
			document.getElementById("price").innerHTML = "$83,000 USD";
			break;
		case '9':
			startSlideshow(localStorage.getItem("page_id"));
			document.title = "Jaguar XJ";
			document.getElementById("car").innerHTML = "Jaguar XJ";
			
			document.getElementById("video").src="https://www.youtube.com/embed/Z-bvpJxb27Y";
			
			document.getElementById("intro").innerHTML = "The assertive styling includes an imposing, upright front grille with mesh detail, full LED headlights and eye-catching LED taillights with a distinctive pinstripe graphic. The powerful character of the XJ is reflected in the low, wide stance and long, taut waistline.";
			document.getElementById("second").innerHTML = "In the exceptionally refined XJ, you’ll discover a quality of craftsmanship that sets it apart. You never just travel in an XJ – you are transported to another place.";
			document.getElementById("third").innerHTML = "Dynamic performance is built into every XJ engine to help ensure outstanding performance. For responsive, whisper-smooth gear changes, a state-of-the-art 8-speed automatic transmission is mated to all three XJ engines.";
			
			document.getElementById("horsepower").innerHTML = "340bhp";
			document.getElementById("acceleration").innerHTML = "5.1sec 0-60mph";
			document.getElementById("topspeed").innerHTML = "124mph";
			document.getElementById("price").innerHTML = "$75,000 USD";
			break;
		case '10':
			startSlideshow(localStorage.getItem("page_id"));
			document.title = "Mercedes-Benz S Class";
			document.getElementById("car").innerHTML = "Mercedes-Benz S Class";
			
			document.getElementById("video").src="https://www.youtube.com/embed/XyQ42lBkStU";
			
			document.getElementById("intro").innerHTML = "For generations, one car has stood at the pinnacle of automobiles. Its majestic presence reflects both the pride of its occupants, and the power of its innovations. The S-Class leads the industry into tomorrow with innovations that change the tide, and a design that will stand the test of time. Strong, powerful and majestic, it’s also efficient and sleek. An S-Class Sedan doesn't merely stand out in a crowd. It stands above and ahead.";
			document.getElementById("second").innerHTML = "S-Class powerplant choices include five biturbo engines: a Direct Injection V-6, two Direct Injection V-8s, and a pair of superlative V-12s. With stronger torque and greater efficiency, the S-Class engines accelerate the pace of progress. Each of them employs numerous advanced technologies to turn less fuel into more energy, for power to spare with fewer emissions left behind. An ECO Start/Stop system saves even more fuel at stoplights.";
			document.getElementById("third").innerHTML = "Intuitive, and artfully sculpted, controls offer 16-way power adjustment of the heated front seats. But that’s just the beginning of its available comforts. The armrests, doors and rear seats are also heated. The seats can add side support in corners or offer a “hot stone” massage. They can offer cooling ventilation. And with twin individual seats available, the rear cabin rivals the comforts of first-class air travel.";
			
			document.getElementById("horsepower").innerHTML = "449bhp";
			document.getElementById("acceleration").innerHTML = "4.4sec 0-60mph";
			document.getElementById("topspeed").innerHTML = "132mph";
			document.getElementById("price").innerHTML = "$96,000 USD";
			break;
		case '11':
			startSlideshow(localStorage.getItem("page_id"));
			document.title = "Rolls Royce Phantom";
			document.getElementById("car").innerHTML = "Rolls Royce Phantom";
			
			document.getElementById("video").src="https://www.youtube.com/embed/VsuLizanYs0";
			
			document.getElementById("intro").innerHTML = "The signature Rolls-Royce, the essence of the marque. With its powerful stance, iconic proportions and state-of-the-art technology, Phantom is a timeless interpretation of the modern luxury motor car. The Spirit of Ecstasy leads the way – with a sense of purpose and presence.";
			document.getElementById("second").innerHTML = "When you commission your own Phantom, you choose what statement to make. Create a magical star-filled night sky with 800 individual fibre optic lights hand-fitted into the roof lining. Look sharp with pinstripe tyres and watch holders in the rear door panniers. Whatever personality you wish to project, our Bespoke team can realise it for you.";
			document.getElementById("third").innerHTML = "Sixty pairs of highly skilled hands. That’s the level of artisanship that goes into building every Phantom at the Home of Rolls-Royce. Each detail matters – the five coats of paint on the bodyshell, the bookmatched veneers and the hand-stitched leatherwork. Perfection is our benchmark.";
			
			document.getElementById("horsepower").innerHTML = "453bhp";
			document.getElementById("acceleration").innerHTML = "5.7sec 0-60mph";
			document.getElementById("topspeed").innerHTML = "155mph";
			document.getElementById("price").innerHTML = "$420,000 USD";
			break;
		case '12':
			startSlideshow(localStorage.getItem("page_id"));
			document.title = "Tesla Model S";
			document.getElementById("car").innerHTML = "Tesla Model S";
			
			document.getElementById("intro").innerHTML = "Model S is designed from the ground up to be the safest, most exhilarating sedan on the road. With unparalleled performance delivered through Tesla's unique, all-electric powertrain, Model S accelerates from 0 to 100 kph in as little as 2.7 seconds. Model S comes with Autopilot capabilities designed to make your highway driving not only safer, but stress free.";
			document.getElementById("second").innerHTML = "Dual Motor Model S is a categorical improvement on conventional all-wheel drive systems. With two motors, one in the front and one in the rear, Model S digitally and independently controls torque to the front and rear wheels. The result is unparalleled traction control in all conditions.";
			
			document.getElementById("video").src="https://www.youtube.com/embed/AOdsTuaJEfc";
			document.getElementById("horsepower").innerHTML = "532mph";
			document.getElementById("acceleration").innerHTML = "2.7sec 0-60mph";
			document.getElementById("topspeed").innerHTML = "155mph";
			document.getElementById("price").innerHTML = "$67,000 USD";
			break;
	}
	return true;
}

function startSlideshow(page_id){
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	switch(page_id){
		case '1':
			img1.src = "images/exteriors/bugatti.jpg";
			img2.src = "images/exteriors/bugatti_2.jpg";
			img3.src = "images/interiors/bugatti.jpg";
			break;
		case '2':
			img1.src = "images/exteriors/ferrari_3.jpg";
			img2.src = "images/exteriors/ferrari_2.jpg";
			img3.src = "images/interiors/ferrari.jpg";
			break;
		case '3':
			img1.src = "images/exteriors/agera_1.jpg";
			img2.src = "images/exteriors/agera.jpg";
			img3.src = "images/interiors/agera.jpeg";
			break;
		case '4':
			img1.src = "images/exteriors/aventador_2.jpg";
			img2.src = "images/exteriors/aventador.jpg";
			img3.src = "images/interiors/aventador.jpg";
			break;
		case '5':
			img1.src = "images/exteriors/mclaren_1.jpg";
			img2.src = "images/exteriors/mclaren_2.jpg";
			img3.src = "images/interiors/mclaren.jpg";
			break;
		case '6':
			img1.src = "images/exteriors/porsche_2.jpg";
			img2.src = "images/exteriors/porsche_1.jpg";
			img3.src = "images/interiors/porsche.jpg";
			break;
		case '7':
			img1.src = "images/exteriors/bentley_1.jpeg";
			img2.src = "images/exteriors/bentley_2.jpg";
			img3.src = "images/interiors/bentley.jpg";
			break;
		case '8':
			img1.src = "images/exteriors/bmw_1.jpg";
			img2.src = "images/exteriors/bmw_2.jpg";
			img3.src = "images/interiors/bmw.jpg";
			break;
		case '9':
			img1.src = "images/exteriors/jaguar_1.jpg";
			img2.src = "images/exteriors/jaguar_2.jpg";
			img3.src = "images/interiors/jaguar.jpg";
			break;
		case '10':
			img1.src = "images/exteriors/s_class.jpg";
			img2.src = "images/exteriors/s_class_1.jpg";
			img3.src = "images/interiors/s_class.jpg";
			break;
		case '11':
			img1.src = "images/exteriors/rolls_royce_1.jpg";
			img2.src = "images/exteriors/rolls_royce_2.jpg";
			img3.src = "images/interiors/rolls_royce.jpg";
			break;
		case '12':
			img1.src = "images/exteriors/tesla_1.jpg";
			img2.src = "images/exteriors/tesla_2.jpg";
			img3.src = "images/interiors/tesla.jpg";
			break
	}	
}

var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		if (n > slides.length) {slideIndex = 1} 
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; 
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block"; 
		dots[slideIndex-1].className += " active";
	}