// Controls the chevorns when settings expand and collapse
function chevronClick(){

	var className = $(this).children('i');

	if ($(className).attr('class') == 'glyphicon glyphicon-chevron-down') {
		$(className).attr('class','glyphicon glyphicon-chevron-up');
		console.log($(className).attr('class', 'glyphicon glyphicon-chevron-up'));
	} else {
		$(className).attr('class','glyphicon glyphicon-chevron-down');
	}


}

$(function() {
	$('#setting-expansions').click(chevronClick);
	$('#setting-strategy').click(chevronClick);
	$('#setting-race').click(chevronClick);
});



// enables and disables expansions
var seEnabled = 0;
var sottEnabled = 0;

function toggleExpansions(e){
	if ($(this).attr('id') =='setting-se') {
		if ($(this).text() == "Disabled") {
			seEnabled = 1;
			$(this).text('Enabled');
			$(this).attr('class', 'btn btn-success');
		} else { // set to disabled
			seEnabled = 0;
			$(this).text('Disabled');
			$(this).attr('class', 'btn btn-danger');

		}
	} else { // then it's SotT
		if ($(this).text() == "Disabled") {
			sottEnabled = 1;
			$(this).text('Enabled');
			$(this).attr('class', 'btn btn-success');
		} else { // else disabled
			console.log('please no');
			sottEnabled = 0;
			$(this).text('Disabled');
			$(this).attr('class', 'btn btn-danger');

		}
	}
	
	renderExpansionContent();

}



$(function() {
	$('#setting-se').click(toggleExpansions);
	$('#setting-sott').click(toggleExpansions);

});


function renderExpansionContent() {

	if ((seEnabled == 1) && (sottEnabled == 1)) {
		// hides notice
		$('#sc-no-expansions').attr('style','display:none'); 
		//enables player race choices
		$('.se-option').prop('disabled', false);
		$('.sott-option').prop('disabled', false);

		//Easiest way is to just reset html
		resetStrategyCards()

		// Simple means they do not have any sott cards as well. So simply enable these se ones 
		// (1-Leadership, 2-Diplomacy II, 4-Production, 6-Warfare II, 7-Technology II)
		//$('.seSimple').attr('style','display:inline-block');

		$('#se-races').attr('style','display:block');
		$('#sott-races').attr('style','display:block');


	} else if ((seEnabled == 1) && (sottEnabled == 0)) {
		// hides notice
		$('#sc-no-expansions').attr('style','display:none');
		//enables se and disables sott player race choices
		$('.se-option').prop('disabled', false);
		$('.sott-option').prop('disabled', true);

		// Simple means they do not have any sott cards as well. So simply enable these se ones 
		// (1-Leadership, 2-Diplomacy II, 4-Production, 6-Warfare II, 7-Technology II)
		$('.seSimple').attr('style','display:inline-block');

		// Toggle Expansion Races
		$('#se-races').attr('style','display:block');
		$('#sott-races').attr('style','display:none');


//Begin SE removal and SotT Reorganization

		$('.seComplex').attr('style','display:inline-block');
		$('.sottComplex').attr('style','display:none');
		$('.bothDisable').attr('style','display:inline-block');

		// Card 3
		$('#sottIndicator3-1').remove();
		$('#sottIndicator3-2').remove();
		$('#sottIndicator3-3').remove();
		$('#sottIndicator3Disable').attr('data-slide-to', '1');
		$('#sottDisableSlide3-1').remove();
		$('#sottDisableSlide3-2').remove();
		$('#sottDisableSlide3-3').remove();
		
		// Card 5
		$('#sottIndicator5-1').remove();
		$('#sottDisableSlide5-1').remove();

		// Card 8
		$('#seIndicator8').remove();
		$('#sottDisableSlide8-1').remove();


//End SE removal and SotT Reorganization



	} else if ((seEnabled == 0) && (sottEnabled == 1)) {
		//hides notice
		$('#sc-no-expansions').attr('style','display:none');
		// disables se and enables sott player race choices
		$('.se-option').prop('disabled', true);
		$('.sott-option').prop('disabled', false);

		// Simple means they do not have any sott cards as well. So simply disable these se ones 
		// (1-Leadership, 2-Diplomacy II, 4-Production, 6-Warfare II, 7-Technology II)
		$('.seSimple').attr('style','display:none');

		//Toggle Expansion Races
		$('#se-races').attr('style','display:none');
		$('#sott-races').attr('style','display:block');


//Begin SE removal and SotT Reorganization

		$('.seComplex').attr('style','display:none');
		$('.sottComplex').attr('style','display:inline-block');
		$('.bothDisable').attr('style','display:inline-block');

		//Card 3
		$('#seDisableSlide3').remove(); // Removes entire SE slides
		$('#sottIndicator3Disable').remove(); // Removes individual SE indicator
		$('#sottIndicator3-1').attr('data-slide-to', '1'); // Renumbers data-slide-to attribute to compensate for removing it in the line above.
		$('#sottIndicator3-1').attr('data-slide-to', '2');
		$('#sottIndicator3-1').attr('data-slide-to', '3');

		//Card 5
		$('#seDisableSlide5').remove();
		$('#sottIndicator5Disable').remove();
		$('#sottIndicator5').attr('data-slide-to', '1');

		//Card 8
		$('#seDisableSlide8-1').remove();
		$('#seDisableSlide8-2').remove();
		$('#sottIndicator8Disable-1').remove();
		$('#sottIndicator8Disable-2').remove();
		$('#sottIndicator8').attr('data-slide-to', '1');

//End SE removal and SotT Reorganization




	} else { // Therefore - if (seEnabled == 0) && (sottEnabled == 0)

		resetStrategyCards();

		$('#sc-no-expansions').attr('style','display:block'); // show users why no other strategy card options
		// disables se and sott player choices
		$('.se-option').prop('disabled', true);
		$('.sott-option').prop('disabled', true);

		// Simple means they do not have any sott cards as well. So simply disable these se ones 
		// (1-Leadership, 2-Diplomacy II, 4-Production, 6-Warfare II, 7-Technology II)
		$('.seSimple').attr('style','display:none');

		//Toggle Expansion Races
		$('#se-races').attr('style','display:none');
		$('#sott-races').attr('style','display:none');




$('.bothDisable').attr('style','display:none');

	}


}


function resetStrategyCards() {
	//Begin reset
		for (i=1; i<=8; i++) {
			$('.card-'+ i +'').remove();
		}
		
		$("<div class='card-1'><div id='myCarousel-1' class='carousel slide' data-interval='0' data-ride='carousel'><!-- Carousel indicators --><ol class='carousel-indicators seSimple'><li data-target='#myCarousel-1' data-slide-to='0' class='active'></li><li data-target='#myCarousel-1' data-slide-to='1'></li></ol><!-- Carousel items --><div class='carousel-inner'><div style='background: #AA4242;' class='active item'><h2 style='color: #943939; font-size: 180px; margin: 0; padding-top: 90px;'>1</h2><div class='carousel-caption'><h3 style='font-size: 19px;'>Initiative</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div><div style='background: #AA4242;' class='item'><h2 style='color: #943939; font-size: 180px; margin: 0; padding-top: 90px;'>1</h2><div class='carousel-caption'><h3 style='font-size: 19px;'>Leadership</h3><p>Aliquam sit amet gravida nibh, facilisis gravida odio.</p></div></div></div><!-- Carousel nav --> <a class='carousel-control left seSimple' href='#myCarousel-1' data-slide='prev'><span class='glyphicon glyphicon-chevron-left'></span></a><a class='carousel-control right seSimple' href='#myCarousel-1' data-slide='next'><span class='glyphicon glyphicon-chevron-right'></span></a></div></div>").insertAfter("#sc-no-expansions");
		$("<div class='card-2'> <div id='myCarousel-2' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-2' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-2' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #E06E38;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #CC6433;; font-size: 180px;'>2</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Diplomacy</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div> </div> <div style='background: #E06E38;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CC6433; font-size: 180px;'>2</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Diplomacy II</h3> <p>Aliquam sit amet gravida nibh, facilisis gravida odio.</p> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left seSimple' href='#myCarousel-2' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right seSimple' href='#myCarousel-2' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-1");
		$("<div class='card-3'> <div id='myCarousel-3' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators bothDisable'> <li data-target='#myCarousel-3' data-slide-to='0' class='active'></li> <li id='sottIndicator3-1' class='sottComplex' data-target='#myCarousel-3' data-slide-to='1'></li> <!-- SotT --> <li id='sottIndicator3Disable' class='seComplex' data-target='#myCarousel-3' data-slide-to='2'></li> <!-- SE --> <li id='sottIndicator3-2' class='sottComplex' data-target='#myCarousel-3' data-slide-to='3'></li> <!-- SotT --> <li id='sottIndicator3-3' class='sottComplex' data-target='#myCarousel-3' data-slide-to='4'></li><!-- SotT --> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #DDD400;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Political</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div> </div> <div id='sottDisableSlide3-1' style='background: #DDD400;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Political II</h3> <p>Aliquam sit amet gravida nibh, facilisis gravida odio.</p> </div> </div> <div id='seDisableSlide3' style='background: #DDD400;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Assembly</h3> <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> </div> </div> <div id='sottDisableSlide3-2' style='background: #DDD400;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Assembly II</h3> <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> </div> </div> <div id='sottDisableSlide3-3' style='background: #DDD400;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Civilization</h3> <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left bothDisable' href='#myCarousel-3' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right bothDisable' href='#myCarousel-3' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-2");
		$("<div class='card-4'> <div id='myCarousel-4' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-4' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-4' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #214B23;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #1C3F1E; font-size: 180px;'>4</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Logistics</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div> </div> <div style='background: #214B23;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #1C3F1E; font-size: 180px;'>4</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Production</h3> <p>Aliquam sit amet gravida nibh, facilisis gravida odio.</p> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left seSimple' href='#myCarousel-4' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right seSimple' href='#myCarousel-4' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-3");
		$("<div class='card-5'> <div id='myCarousel-5' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators bothDisable'> <li data-target='#myCarousel-5' data-slide-to='0' class='active'></li> <li id='sottIndicator5Disable' class='seComplex' data-target='#myCarousel-5' data-slide-to='1'></li> <!-- SE --> <li id='sottIndicator5' class='sottComplex' data-target='#myCarousel-5' data-slide-to='2'></li> <!-- SotT --> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #3D9748;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #378A41; font-size: 180px;'>5</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Trade</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div> </div> <div id ='seDisableSlide5' style='background: #3D9748;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #378A41; font-size: 180px;'>5</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Trade II</h3> <p>Aliquam sit amet gravida nibh, facilisis gravida odio.</p> </div> </div> <div id='sottDisableSlide5-1' style='background: #3D9748;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #378A41; font-size: 180px;'>5</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Trade III</h3> <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left bothDisable' href='#myCarousel-5' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right bothDisable' href='#myCarousel-5' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-4");
		$("<div class='card-6'> <div id='myCarousel-6' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-6' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-6' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #32948C;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #2C8881; font-size: 180px;'>6</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Warfare</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div> </div> <div style='background: #32948C;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #2C8881; font-size: 180px;'>6</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Warfare II</h3> <p>Aliquam sit amet gravida nibh, facilisis gravida odio.</p> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left seSimple' href='#myCarousel-6' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right seSimple' href='#myCarousel-6' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-5");
		$("<div class='card-7'> <div id='myCarousel-7' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-7' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-7' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #224983;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #1D3F72; font-size: 180px;'>7</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Technology</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div> </div> <div style='background: #224983;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #1D3F72; font-size: 180px;'>7</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Technology II</h3> <p>Aliquam sit amet gravida nibh, facilisis gravida odio.</p> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left seSimple' href='#myCarousel-7' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right seSimple' href='#myCarousel-7' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-6");
		$("<div class='card-8'> <div id='myCarousel-8' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators bothDisable'> <li data-target='#myCarousel-8' data-slide-to='0' class='active'></li> <li id='sottIndicator8Disable-1' class='seComplex' data-target='#myCarousel-8' data-slide-to='1'></li> <!-- SE --> <li id='sottIndicator8Disable-2' class='seComplex' data-target='#myCarousel-8' data-slide-to='2'></li> <!-- SE --> <li id='seIndicator8' class='sottComplex' data-target='#myCarousel-8' data-slide-to='3'></li> <!-- SotT --> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #543969;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #4B335E; font-size: 180px;'>8</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Imperial</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div> </div> <div id='seDisableSlide8-1' style='background: #543969;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #4B335E; font-size: 180px;'>8</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Imperial II</h3> <p>Aliquam sit amet gravida nibh, facilisis gravida odio.</p> </div> </div> <div id='seDisableSlide8-2' style='background: #543969;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #4B335E; font-size: 180px;'>8</h2> <div class='carousel-caption'> <h3 style='font-size: 16px;'>Bureaucracy</h3> <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> </div> </div> <div id='sottDisableSlide8-1' style='background: #543969;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #4B335E; font-size: 180px;'>8</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Industry</h3> <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left bothDisable' href='#myCarousel-8' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right bothDisable' href='#myCarousel-8' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-7");

		// End reset
}


var letnevEnabled = 0;
var hacanEnabled = 0;
var solEnabled = 0;
var l1z1xEnabled = 0;
var mentakEnabled = 0;
var naaluEnabled = 0;
var sardakkEnabled = 0;
var jol_narEnabled = 0;
var xxchaEnabled = 0;
var yssarilEnabled = 0;

$(function() {
	$('#letnev').click(function() {
		if (letnevEnabled == 0) {
			letnevEnabled = 1;
			raceBgPosition('#letnev', 120);
		} else {
			letnevEnabled = 0;
			raceBgPosition('#letnev', 0);
		}
		//save to database code here ...
		disabledRaceAlert('letnev');
	})

	$('#hacan').click(function() {
		if (hacanEnabled == 0) {
			hacanEnabled = 1;
			raceBgPosition('#hacan', 120);
		} else {
			hacanEnabled = 0;
			raceBgPosition('#hacan', 0);
		}
		//save to database code here ...
		disabledRaceAlert('hacan');
	})

	$('#sol').click(function() {
		if (solEnabled == 0) {
			solEnabled = 1;
			raceBgPosition('#sol', 120);
		} else {
			solEnabled = 0;
			raceBgPosition('#sol', 0);
		}
		//save to database code here ...
		disabledRaceAlert('sol');
	})

	$('#l1z1x').click(function() {
		if (l1z1xEnabled == 0) {
			l1z1xEnabled = 1;
			raceBgPosition('#l1z1x', 120);
		} else {
			l1z1xEnabled = 0;
			raceBgPosition('#l1z1x', 0);
		}
		//save to database code here ...
		disabledRaceAlert('l1z1x');
	})

	$('#mentak').click(function() {
		if (mentakEnabled == 0) {
			mentakEnabled = 1;
			raceBgPosition('#mentak', 120);
		} else {
			mentakEnabled = 0;
			raceBgPosition('#mentak', 0);
		}
		//save to database code here ...
		disabledRaceAlert('mentak');
	})

	$('#naalu').click(function() {
		if (naaluEnabled == 0) {
			naaluEnabled = 1;
			raceBgPosition('#naalu', 120);
		} else {
			naaluEnabled = 0;
			raceBgPosition('#naalu', 0);
		}
		//save to database code here ...
		disabledRaceAlert('naalu');
	})

	$('#sardakk').click(function() {
		if (sardakkEnabled == 0) {
			sardakkEnabled = 1;
			raceBgPosition('#sardakk', 120);
		} else {
			sardakkEnabled = 0;
			raceBgPosition('#sardakk', 0);
		}
		//save to database code here ...
		disabledRaceAlert('sardakk');
	})

	$('#jol_nar').click(function() {
		if (jol_narEnabled == 0) {
			jol_narEnabled = 1;
			raceBgPosition('#jol_nar', 120);
		} else {
			jol_narEnabled = 0;
			raceBgPosition('#jol_nar', 0);
		}
		//save to database code here ...
		disabledRaceAlert('jol_nar');
	})

	$('#xxcha').click(function() {
		if (xxchaEnabled == 0) {
			xxchaEnabled = 1;
			raceBgPosition('#xxcha', 120);
		} else {
			xxchaEnabled = 0;
			raceBgPosition('#xxcha', 0);
		}
		//save to database code here ...
		disabledRaceAlert('xxcha');
	})

	$('#yssaril').click(function() {
		if (yssarilEnabled == 0) {
			yssarilEnabled = 1;
			raceBgPosition('#yssaril', 120);
		} else {
			yssarilEnabled = 0;
			raceBgPosition('#yssaril', 0);
		}
		//save to database code here ...
		disabledRaceAlert('yssaril');
	})


});


function raceBgPosition(id, yPos) {
	$(''+ id +'').attr('style','background-position-y: '+ yPos +'px');
}



function disabledRaceAlert(race) {
	if ((letnevEnabled + hacanEnabled + solEnabled + l1z1xEnabled + mentakEnabled + naaluEnabled + sardakkEnabled + jol_narEnabled + xxchaEnabled + yssarilEnabled) > (10-counter) ) {
		$('#base-game-races').before("<div id='too-many-disabled' class='alert alert-danger fade in'><button type='button' class='close' data-dismiss='alert'>×</button><i style='margin-right: 5px;' class='glyphicon glyphicon-ban-circle'></i><strong>Blocked. </strong>You'd have fewer races than players.</div>");
		window[race + 'Enabled' ] = 0;
		raceBgPosition('#'+ race +'', 0);


	} else {
		$('#too-many-disabled').remove();
	}
}








