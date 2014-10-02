// Controls the chevorns when settings expand and collapse
function chevronClick(){

	var className = $(this).children('i');

	if ($(className).attr('class') == 'glyphicon glyphicon-chevron-down') {
		$(className).attr('class','glyphicon glyphicon-chevron-up');
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
var foteEnabled = 1; //Fall of the Empire (not an expansion - but kinda)

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
		
		$("<div class='card-1'> <div id='myCarousel-1' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-1' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-1' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #AA4242;' class='active item'> <h2 style='color: #943939; font-size: 180px; margin: 0; padding-top: 90px;'>1</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Initiative</h3> <a style='color: #F75353' class='read-more' data-toggle='modal' data-target='#myModalSCInitiative'>More Info...</a> <p class='sc-caption-header'> Recommended with: <ol class='sc-caption-list'> <li value='3'>Political I or II</li> <li value='4'>Logistics</li> <li value='8'>Imperial I or II</li> </ol> </p> </div> </div> <div style='background: #AA4242;' class='item'> <h2 style='color: #943939; font-size: 180px; margin: 0; padding-top: 90px;'>1</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Leadership</h3> <a style='color: #F75353' class='read-more' data-toggle='modal' data-target='#myModalSCLeadership'>More Info...</a> <p class='sc-caption-header'> Recommended with: <ol class='sc-caption-list'> <li value='3'>Assembly I or II</li> <li value='4'>Production</li> <li value='8'>Bureaucracy</li> </ol> </p> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left seSimple' href='#myCarousel-1' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right seSimple' href='#myCarousel-1' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a></div></div>").insertAfter("#sc-no-expansions");
		$("<div class='card-2'> <div id='myCarousel-2' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-2' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-2' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #E06E38;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #CC6433;; font-size: 180px;'>2</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Diplomacy</h3> <a style='color: #F79553' class='read-more' data-toggle='modal' data-target='#myModalSCDiplomacy'>More Info...</a> </div> </div> <div style='background: #E06E38;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CC6433; font-size: 180px;'>2</h2> <div class='carousel-caption'> <h3 style='margin-left: -24px; width: 161%; font-size: 19px;'>Diplomacy II</h3> <a style='color: #F79553' class='read-more' data-toggle='modal' data-target='#myModalSCDiplomacyII'>More Info...</a> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left seSimple' href='#myCarousel-2' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right seSimple' href='#myCarousel-2' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-1");
		$("<div class='card-3'> <div id='myCarousel-3' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators bothDisable'> <li data-target='#myCarousel-3' data-slide-to='0' class='active'></li> <li id='sottIndicator3-1' class='sottComplex' data-target='#myCarousel-3' data-slide-to='1'></li> <!-- SotT --> <li id='sottIndicator3Disable' class='seComplex' data-target='#myCarousel-3' data-slide-to='2'></li> <!-- SE --> <li id='sottIndicator3-2' class='sottComplex' data-target='#myCarousel-3' data-slide-to='3'></li> <!-- SotT --> <li id='sottIndicator3-3' class='sottComplex' data-target='#myCarousel-3' data-slide-to='4'></li> <!-- SotT --> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #DDD400;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Political</h3> <a style='color: #F7F753' class='read-more' data-toggle='modal' data-target='#myModalSC-Political'>More Info...</a> <p class='sc-caption-header'> Recommended with: <ol class='sc-caption-list'> <li value='1'>Initiative</li> <li value='4'>Logistics</li> <li value='8'>Imperial I or II</li> </ol> </p> </div> </div> <div id='sottDisableSlide3-1' style='background: #DDD400;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Political II</h3> <a style='color: #F7F753' class='read-more' data-toggle='modal' data-target='#myModalSC-PoliticalII'>More Info...</a> <p style='margin-left: -45px;' class='sc-caption-header'> Required: <ul style='font-size: 9px' class='sc-caption-list'> <li>Political Intrigue</li> </ul> </p> <p class='sc-caption-header'> Recommended with: <ol class='sc-caption-list'> <li value='1'>Initiative</li> <li value='4'>Logistics</li> <li value='8'>Imperial I or II</li> </ol> </p> </div> </div> <div id='seDisableSlide3' style='background: #DDD400;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Assembly</h3> <a style='color: #F7F753' class='read-more' data-toggle='modal' data-target='#myModalSC-Assembly'>More Info...</a> <p class='sc-caption-header'> Recommended with: <ol class='sc-caption-list'> <li value='1'>Leadership</li> <li value='4'>Production</li> <li value='8'>Bureaucracy</li> </ol> </p> </div> </div> <div id='sottDisableSlide3-2' style='background: #DDD400;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px; margin-left: -24px; width: 161%; font-size: 19px;'>Assembly II</h3> <a style='color: #F7F753' class='read-more' data-toggle='modal' data-target='#myModalSC-AssemblyII'>More Info...</a> <p style='margin-left: -45px;' class='sc-caption-header'> Required: <ul style='font-size: 9px' class='sc-caption-list'> <li>Political Intrigue</li> </ul> </p> <p class='sc-caption-header'> Recommended with: <ol class='sc-caption-list'> <li value='1'>Leadership</li> <li value='4'>Production</li> <li value='8'>Bureaucracy</li> </ol> </p> </div> </div> <div id='sottDisableSlide3-3' style='background: #DDD400;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Civilization</h3> <a style='color: #F7F753' class='read-more' data-toggle='modal' data-target='#myModalSC-Civilization'>More Info...</a> <p class='sc-caption-header'> Required: <ul style='font-size: 9px' class='sc-caption-list'> <li>Fall of the Empire Scenario</li> <li>8. Industry</li> </ul> </p> </div> </div> </div> <!-- Carousel nav --> <a style='z-index: 999;' class='carousel-control left bothDisable' href='#myCarousel-3' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right bothDisable' href='#myCarousel-3' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-2");
		$("<div class='card-4'> <div id='myCarousel-4' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-4' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-4' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #214B23;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #1C3F1E; font-size: 180px;'>4</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Logistics</h3> <a style='color: #08740D;' class='read-more' data-toggle='modal' data-target='#myModalSC-Logistics'>More Info...</a> <p class='sc-caption-header'> Recommended with: <ol class='sc-caption-list'> <li value='1'>Initiative</li> <li value='3'>Political I or II</li> <li value='8'>Imperial I or II</li> </ol> </p> </div> </div> <div style='background: #214B23;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #1C3F1E; font-size: 180px;'>4</h2> <div class='carousel-caption'> <h3 style='margin-left: -3px; font-size: 19px;'>Production</h3> <a style='color: #08740D;' class='read-more' data-toggle='modal' data-target='#myModalSC-Production'>More Info...</a> <p class='sc-caption-header'> Recommended with: <ol class='sc-caption-list'> <li value='1'>Leadership</li> <li value='3'>Assembly I or II</li> <li value='8'>Bureaucracy</li> </ol> </p> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left seSimple' href='#myCarousel-4' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right seSimple' href='#myCarousel-4' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-3");
		$("<div class='card-5'> <div id='myCarousel-5' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators bothDisable'> <li data-target='#myCarousel-5' data-slide-to='0' class='active'></li> <li id='sottIndicator5Disable' class='seComplex' data-target='#myCarousel-5' data-slide-to='1'></li> <!-- SE --> <li id='sottIndicator5' class='sottComplex' data-target='#myCarousel-5' data-slide-to='2'></li> <!-- SotT --> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #3D9748;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #378A41; font-size: 180px;'>5</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Trade</h3> <a style='color: #00B108;' class='read-more' data-toggle='modal' data-target='#myModalSC-Trade'>More Info...</a> </div> </div> <div id='seDisableSlide5' style='background: #3D9748;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #378A41; font-size: 180px;'>5</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Trade II</h3> <a style='color: #00B108;' class='read-more' data-toggle='modal' data-target='#myModalSC-TradeII'>More Info...</a> </div> </div> <div id='sottDisableSlide5-1' style='background: #3D9748;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #378A41; font-size: 180px;'>5</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Trade III</h3> <a style='color: #00B108;' class='read-more' data-toggle='modal' data-target='#myModalSC-TradeIII'>More Info...</a> <p style='margin-left: -8px;' class='sc-caption-header'> Required: <ul style='font-size: 9px' class='sc-caption-list'> <li>Mercenaries</li> </ul> </p> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left bothDisable' href='#myCarousel-5' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right bothDisable' href='#myCarousel-5' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-4");
		$(" <div class='card-6'> <div id='myCarousel-6' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-6' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-6' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #32948C;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #2C8881; font-size: 180px;'>6</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Warfare</h3> <a style='color: #7CB1C2' class='read-more' data-toggle='modal' data-target='#myModalSC-Warfare'>More Info...</a> </div> </div> <div style='background: #32948C;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #2C8881; font-size: 180px;'>6</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Warfare II</h3> <a style='color: #7CB1C2' class='read-more' data-toggle='modal' data-target='#myModalSC-WarfareII'>More Info...</a> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left seSimple' href='#myCarousel-6' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right seSimple' href='#myCarousel-6' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-5");
		$("<div class='card-7'> <div id='myCarousel-7' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-7' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-7' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #224983;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #1D3F72; font-size: 180px;'>7</h2> <div class='carousel-caption'> <h3 style='margin-left: -7px; font-size: 19px;'>Technology</h3> <a style='color: #4983DA' class='read-more' data-toggle='modal' data-target='#myModalSC-Technology'>More Info...</a> </div> </div> <div style='background: #224983;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #1D3F72; font-size: 180px;'>7</h2> <div class='carousel-caption'> <h3 style='margin-left: -16px; width: 140%; font-size: 19px;'>Technology II</h3> <a style='color: #4983DA' class='read-more' data-toggle='modal' data-target='#myModalSC-TechnologyII'>More Info...</a> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left seSimple' href='#myCarousel-7' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right seSimple' href='#myCarousel-7' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-6");
		$("<div class='card-8'> <div id='myCarousel-8' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators bothDisable'> <li data-target='#myCarousel-8' data-slide-to='0' class='active'></li> <li id='sottIndicator8Disable-1' class='seComplex' data-target='#myCarousel-8' data-slide-to='1'></li> <!-- SE --> <li id='sottIndicator8Disable-2' class='seComplex' data-target='#myCarousel-8' data-slide-to='2'></li> <!-- SE --> <li id='seIndicator8' class='sottComplex' data-target='#myCarousel-8' data-slide-to='3'></li> <!-- SotT --> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #543969;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #4B335E; font-size: 180px;'>8</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Imperial</h3> <a style='color: #A469C5' class='read-more' data-toggle='modal' data-target='#myModalSC-Imperial'>More Info...</a> <p class='sc-caption-header'> Recommended with: <ol class='sc-caption-list'> <li value='1'>Initiative</li> <li value='3'>Political I or II</li> <li value='4'>Logistics</li> </ol> </p> </div> </div> <div id='seDisableSlide8-1' style='background: #543969;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #4B335E; font-size: 180px;'>8</h2> <div class='carousel-caption'> <h3 style='margin-left: -10px; width: 120%; font-size: 19px;'>Imperial II</h3> <a style='color: #A469C5' class='read-more' data-toggle='modal' data-target='#myModalSC-ImperialII'>More Info...</a> <p class='sc-caption-header'> Recommended with: <ol class='sc-caption-list'> <li value='1'>Initiative</li> <li value='3'>Political I or II</li> <li value='4'>Logistics</li> </ol> </p> </div> </div> <div id='seDisableSlide8-2' style='background: #543969;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #4B335E; font-size: 180px;'>8</h2> <div class='carousel-caption'> <h3 style='font-size: 19px; margin-left: -12px;'>Bureaucracy</h3> <a style='color: #A469C5' class='read-more' data-toggle='modal' data-target='#myModalSC-Bureaucracy'>More Info...</a> <p class='sc-caption-header'> Recommended with: <ol class='sc-caption-list'> <li value='1'>Leadership</li> <li value='3'>Assembly I or II</li> <li value='4'>Logistics</li> </ol> </p> </div> </div> <div id='sottDisableSlide8-1' style='background: #543969;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #4B335E; font-size: 180px;'>8</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Industry</h3> <a style='color: #A469C5' class='read-more' data-toggle='modal' data-target='#myModalSC-Industry'>More Info...</a> <p class='sc-caption-header'> Required: <ul style='font-size: 9px' class='sc-caption-list'> <li>Fall of the Empire Scenario</li> <li>3. Civilization</li> </ul> </p> </div> </div> </div> <!-- Carousel nav --> <a class='carousel-control left bothDisable' href='#myCarousel-8' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a class='carousel-control right bothDisable' href='#myCarousel-8' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-7");

		// End reset
}


var letnevDisabled = 0;
var hacanDisabled = 0;
var solDisabled = 0;
var l1z1xDisabled = 0;
var mentakDisabled = 0;
var naaluDisabled = 0;
var sardakkDisabled = 0;
var jol_narDisabled = 0;
var xxchaDisabled = 0;
var yssarilDisabled = 0;
var saarDisabled = 0;
var muaatDisabled = 0;
var winnuDisabled = 0;
var yinDisabled = 0;
var arborecDisabled = 0;
var creussDisabled = 0;
var nekroDisabled = 0;
var lazaxDisabled = 1;

$(function() {
//Setup data check at the bottom of this function
var raceArray = ['letnev', 'hacan', 'sol', 'l1z1x', 'mentak', 'naalu', 'sardakk',
'jol_nar', 'xxcha', 'yssaril', 'saar', 'muaat', 'winnu', 'yin', 'arborec',
'creuss', 'nekro', 'lazax'];


	$('#letnev').click(function() {
		if (letnevDisabled == 0) {
			letnevDisabled = 1;
			raceBgPosition('#letnev', 120);
		} else {
			letnevDisabled = 0;
			raceBgPosition('#letnev', 0);
		}
		//save to database code here ...
		disabledRaceAlert('letnev');
	})

	$('#hacan').click(function() {
		if (hacanDisabled == 0) {
			hacanDisabled = 1;
			raceBgPosition('#hacan', 120);
		} else {
			hacanDisabled = 0;
			raceBgPosition('#hacan', 0);
		}
		//save to database code here ...
		disabledRaceAlert('hacan');
	})

	$('#sol').click(function() {
		if (solDisabled == 0) {
			solDisabled = 1;
			raceBgPosition('#sol', 120);
		} else {
			solDisabled = 0;
			raceBgPosition('#sol', 0);
		}
		//save to database code here ...
		disabledRaceAlert('sol');
	})

	$('#l1z1x').click(function() {
		if (l1z1xDisabled == 0) {
			l1z1xDisabled = 1;
			raceBgPosition('#l1z1x', 120);
		} else {
			l1z1xDisabled = 0;
			raceBgPosition('#l1z1x', 0);
		}
		//save to database code here ...
		disabledRaceAlert('l1z1x');
	})

	$('#mentak').click(function() {
		if (mentakDisabled == 0) {
			mentakDisabled = 1;
			raceBgPosition('#mentak', 120);
		} else {
			mentakDisabled = 0;
			raceBgPosition('#mentak', 0);
		}
		//save to database code here ...
		disabledRaceAlert('mentak');
	})

	$('#naalu').click(function() {
		if (naaluDisabled == 0) {
			naaluDisabled = 1;
			raceBgPosition('#naalu', 120);
		} else {
			naaluDisabled = 0;
			raceBgPosition('#naalu', 0);
		}
		//save to database code here ...
		disabledRaceAlert('naalu');
	})

	$('#sardakk').click(function() {
		if (sardakkDisabled == 0) {
			sardakkDisabled = 1;
			raceBgPosition('#sardakk', 120);
		} else {
			sardakkDisabled = 0;
			raceBgPosition('#sardakk', 0);
		}
		//save to database code here ...
		disabledRaceAlert('sardakk');
	})

	$('#jol_nar').click(function() {
		if (jol_narDisabled == 0) {
			jol_narDisabled = 1;
			raceBgPosition('#jol_nar', 120);
		} else {
			jol_narDisabled = 0;
			raceBgPosition('#jol_nar', 0);
		}
		//save to database code here ...
		disabledRaceAlert('jol_nar');
	})

	$('#xxcha').click(function() {
		if (xxchaDisabled == 0) {
			xxchaDisabled = 1;
			raceBgPosition('#xxcha', 120);
		} else {
			xxchaDisabled = 0;
			raceBgPosition('#xxcha', 0);
		}
		//save to database code here ...
		disabledRaceAlert('xxcha');
	})

	$('#yssaril').click(function() {
		if (yssarilDisabled == 0) {
			yssarilDisabled = 1;
			raceBgPosition('#yssaril', 120);
		} else {
			yssarilDisabled = 0;
			raceBgPosition('#yssaril', 0);
		}
		//save to database code here ...
		disabledRaceAlert('yssaril');
	})

	$('#saar').click(function() {
		if (saarDisabled == 0) {
			saarDisabled = 1;
			raceBgPosition('#saar', 120);
		} else {
			saarDisabled = 0;
			raceBgPosition('#saar', 0);
		}
		//save to database code here ...
		disabledRaceAlert('saar');
	})

	$('#muaat').click(function() {
		if (muaatDisabled == 0) {
			muaatDisabled = 1;
			raceBgPosition('#muaat', 120);
		} else {
			muaatDisabled = 0;
			raceBgPosition('#muaat', 0);
		}
		//save to database code here ...
		disabledRaceAlert('muaat');
	})

	$('#winnu').click(function() {
		if (winnuDisabled == 0) {
			winnuDisabled = 1;
			raceBgPosition('#winnu', 120);
		} else {
			winnuDisabled = 0;
			raceBgPosition('#winnu', 0);
		}
		//save to database code here ...
		disabledRaceAlert('winnu');
	})

	$('#yin').click(function() {
		if (yinDisabled == 0) {
			yinDisabled = 1;
			raceBgPosition('#yin', 120);
		} else {
			yinDisabled = 0;
			raceBgPosition('#yin', 0);
		}
		//save to database code here ...
		disabledRaceAlert('yin');
	})

	$('#arborec').click(function() {
		if (arborecDisabled == 0) {
			arborecDisabled = 1;
			raceBgPosition('#arborec', 143);
		} else {
			arborecDisabled = 0;
			raceBgPosition('#arborec', 0);
		}
		//save to database code here ...
		disabledRaceAlert('arborec');
	})

	$('#creuss').click(function() {
		if (creussDisabled == 0) {
			creussDisabled = 1;
			raceBgPosition('#creuss', 148);
		} else {
			creussDisabled = 0;
			raceBgPosition('#creuss', 0);
		}
		//save to database code here ...
		disabledRaceAlert('creuss');
	})

	$('#nekro').click(function() {
		if (nekroDisabled == 0) {
			nekroDisabled = 1;
			raceBgPosition('#nekro', 117);
		} else {
			nekroDisabled = 0;
			raceBgPosition('#nekro', 0);
		}
		//save to database code here ...
		disabledRaceAlert('nekro');
	})

	$('#lazax').click(function() {
		if (lazaxDisabled == 0) {
			lazaxDisabled = 1;
			raceBgPosition('#lazax', 123);
		} else {
			lazaxDisabled = 0;
			raceBgPosition('#lazax', 0);
		}
		//save to database code here ...
		disabledRaceAlert('lazax');
	})
//Start data check. Disable races where appropriate. Special needs for SotT races since their images are weird sizes.
	for (var i = 0; i < raceArray.length; i++) {

    	if (window[raceArray[i] + 'Disabled' ] == 1) {
    		if (raceArray[i] == 'arborec') {
    			raceBgPosition(String('#' + raceArray[i]), 143);
    		} else if (raceArray[i] == 'creuss') {
    			raceBgPosition(String('#' + raceArray[i]), 148);
    		} else if (raceArray[i] == 'nekro') {
    			raceBgPosition(String('#' + raceArray[i]), 117);
    		} else if (raceArray[i] == 'lazax') {
    			raceBgPosition(String('#' + raceArray[i]), 123);
    		} else {
    			raceBgPosition(String('#' + raceArray[i]), 120);
    		}
    		
    	}
	}

});

//Changes the Background Position so races look disabled/enabled. Sprite images.
function raceBgPosition(id, yPos) {
	$(''+ id +'').attr('style','background-position-y: -'+ yPos +'px');
}


// Logic to control whether too many races have been disabled. You can't have fewer available races than players.
function disabledRaceAlert(race) {
	if (seEnabled == 1 && sottEnabled == 1) {
		if ((letnevDisabled + hacanDisabled + solDisabled + l1z1xDisabled + mentakDisabled + naaluDisabled + sardakkDisabled + jol_narDisabled + xxchaDisabled + yssarilDisabled + saarDisabled + muaatDisabled + winnuDisabled +yinDisabled + arborecDisabled + creussDisabled + nekroDisabled +lazaxDisabled) > (18-counter) ) {
			$('#base-game-races').before("<div id='too-many-disabled' class='alert alert-danger fade in'><button type='button' class='close' data-dismiss='alert'>×</button><i style='margin-right: 5px;' class='glyphicon glyphicon-ban-circle'></i><b>Blocked. </b>You'd have fewer races than players.</div>");
			window[race + 'Disabled' ] = 0;
			raceBgPosition('#'+ race +'', 0);
		} else {
			$('#too-many-disabled').remove();
		}
	} else if (seEnabled == 1 && sottEnabled == 0) {
		if ((letnevDisabled + hacanDisabled + solDisabled + l1z1xDisabled + mentakDisabled + naaluDisabled + sardakkDisabled + jol_narDisabled + xxchaDisabled + yssarilDisabled + saarDisabled + muaatDisabled + winnuDisabled + yinDisabled) > (14-counter) ) {
			$('#base-game-races').before("<div id='too-many-disabled' class='alert alert-danger fade in'><button type='button' class='close' data-dismiss='alert'>×</button><i style='margin-right: 5px;' class='glyphicon glyphicon-ban-circle'></i><b>Blocked. </b>You'd have fewer races than players.</div>");
			window[race + 'Disabled' ] = 0;
			raceBgPosition('#'+ race +'', 0);
		} else {
			$('#too-many-disabled').remove();
		}
	} else if (seEnabled == 0 && sottEnabled == 1) {
		if ((letnevDisabled + hacanDisabled + solDisabled + l1z1xDisabled + mentakDisabled + naaluDisabled + sardakkDisabled + jol_narDisabled + xxchaDisabled + yssarilDisabled + arborecDisabled + creussDisabled + nekroDisabled + lazaxDisabled) > (14-counter) ) {
			$('#base-game-races').before("<div id='too-many-disabled' class='alert alert-danger fade in'><button type='button' class='close' data-dismiss='alert'>×</button><i style='margin-right: 5px;' class='glyphicon glyphicon-ban-circle'></i><b>Blocked. </b>You'd have fewer races than players.</div>");
			window[race + 'Disabled' ] = 0;
			raceBgPosition('#'+ race +'', 0);
		} else {
			$('#too-many-disabled').remove();
		}
	} else { // No expansions enabled
		if ((letnevDisabled + hacanDisabled + solDisabled + l1z1xDisabled + mentakDisabled + naaluDisabled + sardakkDisabled + jol_narDisabled + xxchaDisabled + yssarilDisabled) > (10-counter) ) {
			$('#base-game-races').before("<div id='too-many-disabled' class='alert alert-danger fade in'><button type='button' class='close' data-dismiss='alert'>×</button><i style='margin-right: 5px;' class='glyphicon glyphicon-ban-circle'></i><b>Blocked. </b>You'd have fewer races than players.</div>");
			window[race + 'Disabled' ] = 0;
			raceBgPosition('#'+ race +'', 0);
		} else {
			$('#too-many-disabled').remove();
		}
	}


}









