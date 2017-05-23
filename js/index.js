
/*MENU FUNCTION*/
$(document).ready(function(){
	if ($(window).width() < 650) {
		$("#small-menu").on('click', function() {
			event.preventDefault();
			$("#small-menu").toggleClass("active");
			$("#nav-bar ul").toggleClass("active");
		});
			$('#nav-bar ul li a').on('click' ,function(){
			$("#nav-bar ul").addClass("active");
			resetClick();
		});
	}
	else {
		$("#nav-list ul").removeClass("active");
	}
	$(window).resize(function() {
		if ($(window).width() < 650) {
			$("#small-menu").on('click', function() {
				$("#small-menu").toggleClass("active");
				$("#nav-bar ul").toggleClass("active");
			});
			$('#nav-bar ul li a').on('click' ,function(){
				$("#nav-bar ul").addClass("active");
			});
		}
		else {
			$("#nav-list ul").removeClass("active");
		}
	});	
});




$(document).ready(FotoSelect());
$(document).ready(AutoSelect());

	/*Auto FUNCTION*/


$(".btn").mouseup(function(){
    $(this).blur();
})

	/*foto-function*/
function FotoSelect() {
	$('.foto-list > li > a').click(function(){
		event.preventDefault();//stop browser to take action for clicked anchor
		var active_tab_selector = $('.foto-list > li.active-img > a').attr('href');	
		var actived_nav = $('.foto-list > li.active-img');				
		actived_nav.removeClass('active-img');
		$(this).parents('li').addClass('active-img');
		
		$(active_tab_selector).removeClass('active-img-big');
		$(active_tab_selector).addClass('non-active-img');
			
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('non-active-img');
		$(target_tab_selector).addClass('active-img-big');
	});
};
function AutoSelect() {
			$('.project-list > li > a').click(function(){
			event.preventDefault();//stop browser to take action for clicked anchor
						
			//get displaying tab content jQuery selector
			var active_tab_selector = $('.project-list > li.pr-active > a').attr('href');					
						
			//find actived navigation and remove 'active' css
			var actived_nav = $('.project-list > li.pr-active');
			actived_nav.removeClass('pr-active');
						
			//add 'active' css into clicked navigation
			$(this).parents('li').addClass('pr-active');
						
			//hide displaying tab content
			$(active_tab_selector).removeClass('pr-active');
			$(active_tab_selector).addClass('pr-hide');
						
			//show target tab content
			var target_tab_selector = $(this).attr('href');
			$(target_tab_selector).removeClass('pr-hide');
			$(target_tab_selector).addClass('pr-active');
			 });
	};
		
function miniGlasChange(){
	var imageFront = document.getElementById("glasFront");
	var imageSide = document.getElementById("glasSide");
	var imageBack = document.getElementById("glasBack");
	var dropd = document.getElementById("glasList");
	if(dropd.value == "vDonkerGlas") {
		imageFront.src = "pics/miniStukken/frontDonkerGlas.png";	
		imageSide.src = "pics/miniStukken/sideDonkerGlas.png";	
		imageBack.src = "pics/miniStukken/backDonkerGlas.png";	
	} 
	else {
		imageFront.src = "";	
		imageSide.src = "";	
		imageBack.src = "";	
	}
};

function miniFrontBumperChange(){
	var imageFront = document.getElementById("frontBumperFront");
	var imageSide = document.getElementById("frontBumperSide");
	
/*	The frontbumper is not visible at the back view */
/*	var imageBack = document.getElementById(""); */ 

	var dropd = document.getElementById("frontBumperList");
	if(dropd.value == "vFrontBumperJCWkit") {
		imageFront.src = "pics/miniStukken/frontBumperJCWkit.png";	
		imageSide.src = "pics/miniStukken/sideBumperFrontJCWkit.png";	
	} 
	else if(dropd.value == "vFrontBumperS") {
		imageFront.src = "pics/miniStukken/frontBumperCooperS.png";	
		imageSide.src = "pics/miniStukken/sideBumperFrontCooperS.png";	
	} 
	else {
		imageFront.src = "";	
		imageSide.src = "";	
	}	
};
function miniBackBumperChange(){
	var imageBack = document.getElementById("backBumperBack");
	var imageSide = document.getElementById("backBumperSide");
	
/*	The frontbumper is not visible at the back view */
/*	var imageFront = document.getElementById(""); */ 

	var dropd = document.getElementById("backBumperList");
	if(dropd.value == "vBackBumperJCWkit") {
		imageBack.src = "pics/miniStukken/backBumperJCWkit.png";	
		imageSide.src = "pics/miniStukken/sideBumperBackJCWkit.png";	
	} 
	else if(dropd.value == "vBackBumperJCW") {
		imageBack.src = "pics/miniStukken/backBumperJCW.png";	
		imageSide.src = "pics/miniStukken/sideBumperBackJCWkit.png";	
	} 
	else if(dropd.value == "vBackBumperCooperS") {
		imageBack.src = "pics/miniStukken/backBumperCooperS.png";	
		imageSide.src = "pics/miniStukken/sideBumperBackCooperS.png";	

	}
	else {
		imageBack.src = "";	
		imageSide.src = "";	
	}	
};
function miniSideBumperChange(){
	var imageSide = document.getElementById("sideBumperSide");
	
/*	The frontbumper is not visible at the back view */
/*	var imageFront = document.getElementById(""); */ 

	var dropd = document.getElementById("sideBumperList");
	if(dropd.value == "vSideBumperJCWkit") {
		imageSide.src = "pics/miniStukken/sideBumperSideJCWkit.png";	
	} 
	else {
		imageSide.src = "";	
	}	
};

function miniSpiegelChange(){
	var imageFront = document.getElementById("spiegelsFront");
	var imageSide = document.getElementById("spiegelsSide");
	var imageBack = document.getElementById("spiegelsBack");
	var dropd = document.getElementById("spiegelsList");

	if (dropd.value == "vSpiegelsWhite") {
		imageFront.src = "pics/miniStukken/frontSpiegelsWhite.png";	
		imageSide.src = "pics/miniStukken/sideSpiegelsWhite.png";	
		imageBack.src = "pics/miniStukken/backSpiegelsWhite.png";	
	}
	else if (dropd.value == "vSpiegelsBlack") {
		imageFront.src = "pics/miniStukken/frontSpiegelsBlack.png";	
		imageSide.src = "pics/miniStukken/sideSpiegelsBlack.png";	
		imageBack.src = "pics/miniStukken/backSpiegelsBlack.png";	
	}
	else if (dropd.value == "vSpiegelsRed") {
		imageFront.src = "pics/miniStukken/frontSpiegelsRed.png";	
		imageSide.src = "pics/miniStukken/sideSpiegelsRed.png";	
		imageBack.src = "pics/miniStukken/backSpiegelsRed.png";	
	}
	else if (dropd.value == "vSpiegelsSilver") {
		imageFront.src = "pics/miniStukken/frontSpiegelsSilver.png";	
		imageSide.src = "pics/miniStukken/sideSpiegelsSilver.png";	
		imageBack.src = "pics/miniStukken/backSpiegelsSilver.png";	
	}
	else if (dropd.value == "vSpiegelsChrome") {
		imageFront.src = "pics/miniStukken/frontSpiegelsChrome.png";	
		imageSide.src = "pics/miniStukken/sideSpiegelsChrome.png";	
		imageBack.src = "pics/miniStukken/backSpiegelsChrome.png";	 //TODO : Chrome spiegels back.
	}
	else {
		imageFront.src = "";	
		imageSide.src = "";	
		imageBack.src = "";			
	}
	
};

function miniDakChange(){
	var imageFront = document.getElementById("dakFront");
	var imageSide = document.getElementById("dakSide");
	var imageBack = document.getElementById("dakBack");
	
	var dropdDak = document.getElementById("dakList");
	var dropdSpoiler = document.getElementById("spoilerList");

	if (dropdSpoiler.value == "vSpoilerJCW") {
		if (dropdDak.value == "vDakWhite") {
			imageFront.src = "pics/miniStukken/frontDakWhite.png";	
			imageSide.src = "pics/miniStukken/sideDakJCWkitWhite.png";	
			imageBack.src = "pics/miniStukken/backDakJCWkitWhite.png";	
		}
		else if (dropdDak.value == "vDakBlack"){
			imageFront.src = "pics/miniStukken/frontDakBlack.png";	
			imageSide.src = "pics/miniStukken/sideDakJCWkitBlack.png";	
			imageBack.src = "pics/miniStukken/backDakJCWkitBlack.png";	
		}
		else if (dropdDak.value == "vDakRed"){
			imageFront.src = "pics/miniStukken/frontDakRed.png";	
			imageSide.src = "pics/miniStukken/sideDakJCWkitRed.png";	
			imageBack.src = "pics/miniStukken/backDakJCWkitRed.png";	
		}
		else { //TODO: blauwe spoiler nog aan toe te voegen
			imageFront.src = "";	
			imageSide.src = "pics/miniStukken/sideSpoilerJCW.png";	
			imageBack.src = "pics/miniStukken/backSpoilerJCW.png";	
		}		
	}
	else if (dropdSpoiler.value == "vSpoilerCooperS") {
		if (dropdDak.value == "vDakWhite") {
			imageFront.src = "pics/miniStukken/frontDakWhite.png";	
			imageSide.src = "pics/miniStukken/sideDakCooperSWhite.png";	
			imageBack.src = "pics/miniStukken/backDakCooperSWhite.png";	
		}
		else if (dropdDak.value == "vDakBlack"){
			imageFront.src = "pics/miniStukken/frontDakBlack.png";	
			imageSide.src = "pics/miniStukken/sideDakCooperSBlack.png";	
			imageBack.src = "pics/miniStukken/backDakCooperSBlack.png";	
		}
		else if (dropdDak.value == "vDakRed"){
			imageFront.src = "pics/miniStukken/frontDakRed.png";	
			imageSide.src = "pics/miniStukken/sideDakCooperSRed.png";	
			imageBack.src = "pics/miniStukken/backDakCooperSRed.png";	
		}
		else { //TODO: blauwe spoiler nog aan toe te voegen
			imageFront.src = "";	
			imageSide.src = "pics/miniStukken/sideSpoilerCooperS.png";	
			imageBack.src = "pics/miniStukken/backSpoilerCooperS.png";	
		}				
	}
	else {
		if (dropdDak.value == "vDakWhite") {
			imageFront.src = "pics/miniStukken/frontDakWhite.png";	
			imageSide.src = "pics/miniStukken/sideDakWhite.png";	
			imageBack.src = "pics/miniStukken/backDakWhite.png";	
		}
		else if (dropdDak.value == "vDakBlack"){
			imageFront.src = "pics/miniStukken/frontDakBlack.png";	
			imageSide.src = "pics/miniStukken/sideDakBlack.png";	
			imageBack.src = "pics/miniStukken/backDakBlack.png";	
		}
		else if (dropdDak.value == "vDakRed"){
			imageFront.src = "pics/miniStukken/frontDakRed.png";	
			imageSide.src = "pics/miniStukken/sideDakRed.png";	
			imageBack.src = "pics/miniStukken/backDakRed.png";	//TODO: Gewoon rood dak back
		}
		else if (dropdDak.value == "vDakSilver"){
			imageFront.src = "pics/miniStukken/frontDakSilver.png";	
			imageSide.src = "pics/miniStukken/sideDakSilver.png";	
			imageBack.src = "pics/miniStukken/backDakSilver.png";	
		}
		else {
			imageFront.src = "";	
			imageSide.src = "";	
			imageBack.src = "";	
		}
	}
};

function miniPinkerChange(){
	var imageSide = document.getElementById("pinkerSide");
	var dropd = document.getElementById("pinkerList");
	if(dropd.value == "vPinkersJCWkit") {
		imageSide.src = "pics/miniStukken/sidePinkerJCWkit.png";
	}
	else if(dropd.value == "vPinkersJCW") {
		imageSide.src = "pics/miniStukken/sidePinkerJCW.png";
	}
	else if(dropd.value == "vPinkersCooperS") {
		imageSide.src = "pics/miniStukken/sidePinkerCooperS.png";
		
	}
	else if(dropd.value == "vPinkersSeven") {
		imageSide.src = "pics/miniStukken/sidePinkerSeven.png";
		
	}
	else {
		imageSide.src = "";	
	}	
};

function miniTankDopChange(){
	var imageSide = document.getElementById("tankDopSide");
	var dropd = document.getElementById("tankDopList");
	if(dropd.value == "vTankDopCooperS") {
		imageSide.src = "pics/miniStukken/sideTankDopCooperS.png";
	}

	else {
		imageSide.src = "";	
	}		
};

function miniVelgenChange(){
	var imageSide = document.getElementById("velgenSide");
	var dropd = document.getElementById("velgenList");
	
	if(dropd.value == "vVelgenConeSilver") {
		imageSide.src = "pics/miniStukken/sideVelgenConeSilver.png";
	}
	else if(dropd.value == "vVelgenConeWhite") {
		imageSide.src = "pics/miniStukken/sideVelgenConeWhite.png";
	}
	else if(dropd.value == "vVelgenCosmosBlack") {
		imageSide.src = "pics/miniStukken/sideVelgenCosmosBlack.png";

	}
	else if(dropd.value == "vVelgenCosmosSilver") {
		imageSide.src = "pics/miniStukken/sideVelgenCosmosSilver.png";

	}
	else if(dropd.value == "vVelgenCupSilver") {
		imageSide.src = "pics/miniStukken/sideVelgenCupSilver.png";

	}
	else if(dropd.value == "vVelgenTantacleSilver") {
		imageSide.src = "pics/miniStukken/sideVelgenTantacleSilver.png";

	}
	else if(dropd.value == "vVelgenLoopSilver") {
		imageSide.src = "pics/miniStukken/sideVelgenLoopSilver.png";

	}
	else if(dropd.value == "vVelgenVictoryBlack") {
		imageSide.src = "pics/miniStukken/sideVelgenVictoryBlack.png";

	}
	else if(dropd.value == "vVelgenYoursVanity2Tone") {
		imageSide.src = "pics/miniStukken/sideVelgenYoursVanity2Tone.png";
	}
	else {
		imageSide.src = ""
	}
}




function miniMotorStripesChange(){
	var imageSide = document.getElementById("motorStripesSide");
	var imageFront = document.getElementById("motorStripesFront");
	var dropd = document.getElementById("motorStripesList");
	if(dropd.value == "vMotorStripesWhite") {
		imageSide.src = "pics/miniStukken/sideMotorWhite.png";
		imageFront.src = "pics/miniStukken/frontMotorWhite.png";
	}
	else if(dropd.value == "vMotorStripesBlack") {
		imageSide.src = "pics/miniStukken/sideMotorBlack.png";
		imageFront.src = "pics/miniStukken/frontMotorBlack.png";

	}
	else if(dropd.value == "vMotorStripesSilver") {
		imageSide.src = "pics/miniStukken/sideMotorSilver.png";
		imageFront.src = "pics/miniStukken/frontMotorSilver.png";
	}

	else {
		imageSide.src = "";	
		imageFront.src = "";
	}		
};



function miniMotorKapChange(){
	var imageFront = document.getElementById("motorKapFront");
	var dropd = document.getElementById("motorKapList");
	if(dropd.value == "vMotorKapCooperS") {
		imageFront.src = "pics/miniStukken/frontMotorCooperS.png";
	}

	else {
		imageFront.src = "";	
	}		
};

var partList = document.getElementById("partList");



// mailing

/*var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/pinnewaert@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: "json",
		contentType: "application/json; charset=utf-8",

		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		}
	});
});
*/




























