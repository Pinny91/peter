
/*MENU FUNCTION*/
jQuery(document).ready(function(){
	if (jQuery(window).width() < 650) {
		jQuery("#small-menu").on('click', function() {
			event.preventDefault();
			jQuery("#small-menu").toggleClass("active");
			jQuery("#nav-bar ul").toggleClass("active");
		});
		jQuery('#nav-bar ul li a').on('click' ,function(){
			jQuery("#nav-bar ul").addClass("active");
			console.log("Test");
		});
	}
	else {
		jQuery("#nav-list ul").removeClass("active");
	}
	jQuery(window).resize(function() {
		if (jQuery(window).width() < 650) {
			jQuery("#nav-bar ul").addClass("active");
			console.log("size: " + jQuery(window).width());
			
			//When pressed on the menu icon -> open the menu, or close
			jQuery("#small-menu").on('click', function() {
				jQuery("#nav-bar ul").toggleClass("active");
			});
			
			//When you clicked an element from the menu, it should close
			jQuery('#nav-bar ul li a').on('click' ,function(){
				jQuery("#nav-bar ul").addClass("active");
			});
		}
		else {
			jQuery("#nav-bar ul").removeClass("active");
		}
	});	
});

	/*PROJECTS FUNCTION*/
	$(document).ready(function() {
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
	});

$(".btn").mouseup(function(){
    $(this).blur();
})


function miniGlasChange(){
	var image = document.getElementById("glas");
	var dropd = document.getElementById("glasList");
	image.src = dropd.value;	
};

function miniBumperChange(){
	var image = document.getElementById("bumper");
	var dropd = document.getElementById("bumperList");
	image.src = dropd.value;	
};

function miniPinkerChange(){
	var image = document.getElementById("pinker");
	var dropd = document.getElementById("pinkerList");
	image.src = dropd.value;	
};

function miniSpiegelChange(){
	var image = document.getElementById("spiegels");
	var dropd = document.getElementById("spiegelsList");
	image.src = dropd.value;	
};

function miniTankDopChange(){
	var image = document.getElementById("tankDop");
	var dropd = document.getElementById("tankDopList");
	image.src = dropd.value;	
};

function miniSpoilerChange(){
	var image = document.getElementById("spoiler");
	var dropd = document.getElementById("spoilerList");
	image.src = dropd.value;	
};