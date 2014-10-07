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
	$('#setting-modules').click(chevronClick);
});



// enables and disables expansions
var seEnabled = 0;
var sottEnabled = 0;
// enables and disables Base Game modules
var vpToWin = 10;
var aoeEnabled = 0;
var dsEnabled = 0;
var leadersEnabled = 0;
var srunsEnabled = 0;
// enables and disables SE modules
var voEnabled = 0;
var rstEnabled = 0;
var artifactsEnabled = 0;
var stroopsEnabled = 0;
var sminesEnabled = 0;
var wnexusEnabled = 0;
var facilitiesEnabled = 0;
var tretreatsEnabled = 0;
var newdsunsEnabled = 0;
var tdsunsEnabled = 0;
var comrexEnabled = 0;
var votcEnabled = 0;
var seturnsEnabled = 0;
// enables and disables SOTT modules
var pobjEnabled = 0;
var rst2Enabled = 0;
var flagshipsEnabled = 0;
var ffEnabled = 0;
var munitsEnabled = 0;
var mercenariesEnabled = 0;
var pintrigueEnabled = 0;
var foteEnabled = 0;


// Toggles Expansions on and off if they are clicked in the setting menu.
function toggleExpansions(e){
	clearStrategyCards();

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
	
	setTimeout(renderExpansionContent, 1000); // Have to time it out because if you don't the slide will get removed
	// before the carousel gets reset to 0 which causes the slides to break if you go from both expanions enabled to 
	// just SE enabled.

}

function clearStrategyCards() {

	for (i=1; i<=8; i++){
		console.log($('#myCarousel-'+ i).carousel(0));
		window['sc' + i] = 0;
	}
	// sc1 = 0;
	// sc2 = 0;
	// sc3 = 0;
	// sc4 = 0;
	// sc5 = 0;
	// sc6 = 0;
	// sc7 = 0;
	// sc8 = 0;

	// $('#myCarousel-1').carousel(0);
	// $('#myCarousel-2').carousel(0);
	// $('#myCarousel-3').carousel(0);
	// $('#myCarousel-4').carousel(0);
	// $('#myCarousel-5').carousel(0);
	// $('#myCarousel-6').carousel(0);
	// $('#myCarousel-7').carousel(0);
	// $('#myCarousel-8').carousel(0);


}

// Toggles Modules on and off if they are clicked in the setting menu.
function toggleModules(event){
	if ($(this).text() == "Disabled") {
		window[(event.data.id)+ 'Enabled'] = 1;
		$(this).text('Enabled');
		$(this).attr('class', 'btn btn-xs btn-success');
	} else { // set to disabled
		window[(event.data.id)+ 'Enabled'] = 0;
		$(this).text('Disabled');
		$(this).attr('class', 'btn btn-xs btn-danger');

	}
}



$(function() {
	$('#setting-se').click(toggleExpansions);
	$('#setting-sott').click(toggleExpansions);
	// Base Game modules
	// VP Points module here
	$('#setting-module-base-aoe').click({id: "aoe"}, toggleModules);
	$('#setting-module-base-ds').click({id: "ds"}, toggleModules);
	$('#setting-module-base-leaders').click({id: "leaders"}, toggleModules);
	$('#setting-module-base-sruns').click({id: "sruns"}, toggleModules);
	// SE Modules
	$('#setting-module-se-vo').click({id: "vo"}, toggleModules);
	$('#setting-module-se-rst').click({id: "rst"}, toggleModules);
	$('#setting-module-se-artifacts').click({id: "artifacts"}, toggleModules);
	$('#setting-module-se-stroops').click({id: "stroops"}, toggleModules);
	$('#setting-module-se-smines').click({id: "smines"}, toggleModules);
	$('#setting-module-se-wnexus').click({id: "wnexus"}, toggleModules);
	$('#setting-module-se-facilities').click({id: "facilities"}, toggleModules);
	$('#setting-module-se-tretreats').click({id: "tretreats"}, toggleModules);
	$('#setting-module-se-newdsuns').click({id: "newdsuns"}, toggleModules);
	$('#setting-module-se-tdsuns').click({id: "tdsuns"}, toggleModules);
	$('#setting-module-se-comrex').click({id: "comrex"}, toggleModules);
	$('#setting-module-se-votc').click({id: "votc"}, toggleModules);
	$('#setting-module-se-seturns').click({id: "seturns"}, toggleModules);
	// SotT Modules
	$('#setting-module-sott-pobj').click({id: "pobj"}, toggleModules);
	$('#setting-module-sott-rst2').click({id: "rst2"}, toggleModules);
	$('#setting-module-sott-flagships').click({id: "flagships"}, toggleModules);
	$('#setting-module-sott-ff').click({id: "ff"}, toggleModules);
	$('#setting-module-sott-munits').click({id: "munits"}, toggleModules);
	$('#setting-module-sott-mercenaries').click({id: "mercenaries"}, toggleModules);
	$('#setting-module-sott-pintrigue').click({id: "pintrigue"}, toggleModules);
	$('#setting-module-sott-fote').click({id: "fote"}, toggleModules);

	//Left and right navigation on Strategy Cards

	$("#collapseTwo").on("click", "#sc1left", {sc: 1, arrow: -1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc1right", {sc: 1, arrow: 1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc2left", {sc: 2, arrow: -1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc2right", {sc: 2, arrow: 1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc3left", {sc: 3, arrow: -1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc3right", {sc: 3, arrow: 1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc4left", {sc: 4, arrow: -1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc4right", {sc: 4, arrow: 1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc5left", {sc: 5, arrow: -1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc5right", {sc: 5, arrow: 1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc6left", {sc: 6, arrow: -1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc6right", {sc: 6, arrow: 1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc7left", {sc: 7, arrow: -1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc7right", {sc: 7, arrow: 1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc8left", {sc: 8, arrow: -1}, setStrategyCards);
	$("#collapseTwo").on("click", "#sc8right", {sc: 8, arrow: 1}, setStrategyCards);

	//Custom VP to Win buttons
	$('#vp9').click({vp: 9}, setCustomVP);
	$('#vp10').click({vp: 10}, setCustomVP);
	$('#vp14').click({vp: 14}, setCustomVP);
	$('#vpCustom').click({vp: "custom"}, setCustomVP);
});

var sc1 = 0;
var sc2 = 0;
var sc3 = 0;
var sc4 = 0;
var sc5 = 0;
var sc6 = 0;
var sc7 = 0;
var sc8 = 0; 
var isClicked = false; // Fast clicking the carousel offsetting the view from counter.
// This delays the counter until the view catches up.

function setStrategyCards(event) {
	if (isClicked == false) { // If click not in progress run code
		isClicked = true; //Set click to in progress

		if ((seEnabled == 1) && (sottEnabled == 1)) {
			var scArray = [1,1,4,1,2,1,1,3]; //Array of total sc slides for each sc. Index 0 so slide - 1.
		} else if ((seEnabled == 1) && (sottEnabled == 0)) {
			var scArray = [1,1,1,1,1,1,1,2];
		} else if ((seEnabled == 0) && (sottEnabled == 1)) {
			var scArray = [0,0,3,0,1,0,0,1];
		} else { // Base Game
			var scArray = [0,0,0,0,0,0,0,0];
		}

		eval('sc' + event.data.sc + ' = (sc' + event.data.sc + ') + event.data.arrow'); //  +/- the arrow value to the global sc variable.
		
		if (eval('sc' + event.data.sc +  '> scArray[(event.data.sc) - 1]')) { // If the sc value is higher than the scArray value, set it to 0. Simulates carousel loop.
			eval('sc' + event.data.sc + ' = 0');
		} else if (eval('sc' + event.data.sc +  '< 0')) { // If it is below 0, set it to highest carousel value. Simulates loop.
			eval('sc' + event.data.sc + ' = scArray[(event.data.sc) - 1]');
		}

		setTimeout(sleep, 600) //In .6 seconds set isClicked to false and allow new clicks.
		}else {
			return; //else exit loop because click currently in progress.
	}
}

function sleep() {
	isClicked = false;
}


function renderExpansionContent() {

	if ((seEnabled == 1) && (sottEnabled == 1)) {
		// hides alert notice
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
		$('.recommended-se').attr('style','display:inline'); // SC modal recommended cards
		$('.recommended-sott').attr('style','display:inline');
		$('.recommended-none').attr('style','display:inline'); // Enables recommendations
		$('#se-modules').attr('style','display:block'); // Enables modules
		$('#sott-modules').attr('style','display:block');


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
		$('.recommended-se').attr('style','display:inline'); // SC modal recommended cards
		$('.recommended-sott').attr('style','display:none'); 
		$('.recommended-none').attr('style','display:inline'); // Enables recommendations
		$('#se-modules').attr('style','display:block'); // Enables modules
		$('#sott-modules').attr('style','display:none');


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
		$('.recommended-se').attr('style','display:none'); // SC modal recommended cards
		$('.recommended-sott').attr('style','display:inline'); 
		$('.recommended-none').attr('style','display:inline'); // Enables recommendations
		$('#se-modules').attr('style','display:none'); // Enables modules
		$('#sott-modules').attr('style','display:block');


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
		$('.recommended-se').attr('style','display:none'); // SC modal recommended cards
		$('.recommended-sott').attr('style','display:none');
		$('.recommended-none').attr('style','display:none'); // Disables recommendations if only base game
		$('#se-modules').attr('style','display:none'); // Disables modules
		$('#sott-modules').attr('style','display:none');




$('.bothDisable').attr('style','display:none');

	}


}


function resetStrategyCards() {
	//Begin reset
		for (i=1; i<=8; i++) {
			$('.card-'+ i +'').remove();
		}
		
		$("<div class='card-1'> <div id='myCarousel-1' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-1' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-1' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #AA4242;' class='active item'> <h2 style='color: #943939; font-size: 180px; margin: 0; padding-top: 90px;'>1</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Initiative</h3> <br> <a style='background-color: rgb(187, 87, 87);' class='more-info' data-toggle='modal' data-target='#myModalSCInitiative'>More Info</a> </div> </div> <div style='background: #AA4242;' class='item'> <h2 style='color: #943939; font-size: 180px; margin: 0; padding-top: 90px;'>1</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Leadership</h3> <br> <a style='background-color: rgb(187, 87, 87);' class='more-info' data-toggle='modal' data-target='#myModalSCLeadership'>More Info</a> </div> </div> </div> <!-- Carousel nav --> <a id='sc1left' class='carousel-control left seSimple' href='#myCarousel-1' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a id='sc1right' class='carousel-control right seSimple' href='#myCarousel-1' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter("#sc-no-expansions");
		$("<div class='card-2'> <div id='myCarousel-2' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-2' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-2' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #E06E38;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #CC6433;; font-size: 180px;'>2</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Diplomacy</h3> <br> <a style='background-color: #E6894A' class='more-info' data-toggle='modal' data-target='#myModalSCDiplomacy'>More Info</a> </div> </div> <div style='background: #E06E38;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CC6433; font-size: 180px;'>2</h2> <div class='carousel-caption'> <h3 style='margin-left: -24px; width: 161%; font-size: 19px;'>Diplomacy II</h3> <br> <a style='background-color: #E6894A' class='more-info' data-toggle='modal' data-target='#myModalSCDiplomacyII'>More Info</a> </div> </div> </div> <!-- Carousel nav --> <a id='sc2left' class='carousel-control left seSimple' href='#myCarousel-2' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a id='sc2right'class='carousel-control right seSimple' href='#myCarousel-2' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-1");
		$("<div class='card-3'> <div id='myCarousel-3' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators bothDisable'> <li data-target='#myCarousel-3' data-slide-to='0' class='active'></li> <li id='sottIndicator3-1' class='sottComplex' data-target='#myCarousel-3' data-slide-to='1'></li> <!-- SotT --> <li id='sottIndicator3Disable' class='seComplex' data-target='#myCarousel-3' data-slide-to='2'></li> <!-- SE --> <li id='sottIndicator3-2' class='sottComplex' data-target='#myCarousel-3' data-slide-to='3'></li> <!-- SotT --> <li id='sottIndicator3-3' class='sottComplex' data-target='#myCarousel-3' data-slide-to='4'></li> <!-- SotT --> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #DDD400;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Political</h3> <br> <a style='background-color: #E6E65D' class='more-info' data-toggle='modal' data-target='#myModalSC-Political'>More Info</a> </div> </div> <div id='sottDisableSlide3-1' style='background: #DDD400;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Political II</h3> <br> <a style='background-color: #E6E65D' class='more-info' data-toggle='modal' data-target='#myModalSC-PoliticalII'>More Info</a> </div> </div> <div id='seDisableSlide3' style='background: #DDD400;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Assembly</h3> <br> <a style='background-color: #E6E65D' class='more-info' data-toggle='modal' data-target='#myModalSC-Assembly'>More Info</a> </div> </div> <div id='sottDisableSlide3-2' style='background: #DDD400;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px; margin-left: -24px; width: 161%; font-size: 19px;'>Assembly II</h3> <br> <a style='background-color: #E6E65D' class='more-info' data-toggle='modal' data-target='#myModalSC-AssemblyII'>More Info</a> </div> </div> <div id='sottDisableSlide3-3' style='background: #DDD400;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #CEC500; font-size: 180px;'>3</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Civilization</h3> <br> <a style='background-color: #E6E65D' class='more-info' data-toggle='modal' data-target='#myModalSC-Civilization'>More Info</a> </div> </div> </div> <!-- Carousel nav --> <a id='sc3left' style='z-index: 999;' class='carousel-control left bothDisable' href='#myCarousel-3' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a id='sc3right' class='carousel-control right bothDisable' href='#myCarousel-3' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-2");
		$("<div class='card-4'> <div id='myCarousel-4' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-4' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-4' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #214B23;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #1C3F1E; font-size: 180px;'>4</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Logistics</h3> <br> <a style='background-color: #325E35;' class='more-info' data-toggle='modal' data-target='#myModalSC-Logistics'>More Info</a> </div> </div> <div style='background: #214B23;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #1C3F1E; font-size: 180px;'>4</h2> <div class='carousel-caption'> <h3 style='margin-left: -3px; font-size: 19px;'>Production</h3> <br> <a style='background-color: #325E35;' class='more-info' data-toggle='modal' data-target='#myModalSC-Production'>More Info</a> </div> </div> </div> <!-- Carousel nav --> <a id='sc4left' class='carousel-control left seSimple' href='#myCarousel-4' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a id='sc4right' class='carousel-control right seSimple' href='#myCarousel-4' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-3");
		$("<div class='card-5'> <div id='myCarousel-5' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators bothDisable'> <li data-target='#myCarousel-5' data-slide-to='0' class='active'></li> <li id='sottIndicator5Disable' class='seComplex' data-target='#myCarousel-5' data-slide-to='1'></li> <!-- SE --> <li id='sottIndicator5' class='sottComplex' data-target='#myCarousel-5' data-slide-to='2'></li> <!-- SotT --> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #3D9748;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #378A41; font-size: 180px;'>5</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Trade</h3> <br> <a style='background-color: #61B465;' class='more-info' data-toggle='modal' data-target='#myModalSC-Trade'>More Info</a> </div> </div> <div id='seDisableSlide5' style='background: #3D9748;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #378A41; font-size: 180px;'>5</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Trade II</h3> <br> <a style='background-color: #61B465;' class='more-info' data-toggle='modal' data-target='#myModalSC-TradeII'>More Info</a> </div> </div> <div id='sottDisableSlide5-1' style='background: #3D9748;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #378A41; font-size: 180px;'>5</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Trade III</h3> <br> <a style='background-color: #61B465;' class='more-info' data-toggle='modal' data-target='#myModalSC-TradeIII'>More Info</a> </div> </div> </div> <!-- Carousel nav --> <a id='sc5left' class='carousel-control left bothDisable' href='#myCarousel-5' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a id='sc5right' class='carousel-control right bothDisable' href='#myCarousel-5' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-4");
		$("<div class='card-6'> <div id='myCarousel-6' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-6' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-6' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #32948C;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #2C8881; font-size: 180px;'>6</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Warfare</h3> <br> <a style='background-color: #7CB1C2' class='more-info' data-toggle='modal' data-target='#myModalSC-Warfare'>More Info</a> </div> </div> <div style='background: #32948C;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #2C8881; font-size: 180px;'>6</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Warfare II</h3> <br> <a style='background-color: #7CB1C2' class='more-info' data-toggle='modal' data-target='#myModalSC-WarfareII'>More Info</a> </div> </div> </div> <!-- Carousel nav --> <a id='sc6left' class='carousel-control left seSimple' href='#myCarousel-6' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a id='sc6right' class='carousel-control right seSimple' href='#myCarousel-6' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-5");
		$("<div class='card-7'> <div id='myCarousel-7' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators seSimple'> <li data-target='#myCarousel-7' data-slide-to='0' class='active'></li> <li data-target='#myCarousel-7' data-slide-to='1'></li> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #224983;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #1D3F72; font-size: 180px;'>7</h2> <div class='carousel-caption'> <h3 style='margin-left: -7px; font-size: 19px;'>Technology</h3> <br> <a style='background-color: #446BA5' class='more-info' data-toggle='modal' data-target='#myModalSC-Technology'>More Info</a> </div> </div> <div style='background: #224983;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #1D3F72; font-size: 180px;'>7</h2> <div class='carousel-caption'> <h3 style='margin-left: -16px; width: 140%; font-size: 19px;'>Technology II</h3> <br> <a style='background-color: #446BA5' class='more-info' data-toggle='modal' data-target='#myModalSC-TechnologyII'>More Info</a> </div> </div> </div> <!-- Carousel nav --> <a id='sc7left' class='carousel-control left seSimple' href='#myCarousel-7' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a id='sc7right' class='carousel-control right seSimple' href='#myCarousel-7' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-6");
		$("<div class='card-8'> <div id='myCarousel-8' class='carousel slide' data-interval='0' data-ride='carousel'> <!-- Carousel indicators --> <ol class='carousel-indicators bothDisable'> <li data-target='#myCarousel-8' data-slide-to='0' class='active'></li> <li id='sottIndicator8Disable-1' class='seComplex' data-target='#myCarousel-8' data-slide-to='1'></li> <!-- SE --> <li id='sottIndicator8Disable-2' class='seComplex' data-target='#myCarousel-8' data-slide-to='2'></li> <!-- SE --> <li id='seIndicator8' class='sottComplex' data-target='#myCarousel-8' data-slide-to='3'></li> <!-- SotT --> </ol> <!-- Carousel items --> <div class='carousel-inner'> <div style='background: #543969;' class='active item'> <h2 style='margin: 0; padding-top: 90px; color: #4B335E; font-size: 180px;'>8</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Imperial</h3> <br> <a style='background-color: #764891' class='more-info' data-toggle='modal' data-target='#myModalSC-Imperial'>More Info</a> </div> </div> <div id='seDisableSlide8-1' style='background: #543969;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #4B335E; font-size: 180px;'>8</h2> <div class='carousel-caption'> <h3 style='margin-left: -10px; width: 120%; font-size: 19px;'>Imperial II</h3> <br> <a style='background-color: #764891' class='more-info' data-toggle='modal' data-target='#myModalSC-ImperialII'>More Info</a> </div> </div> <div id='seDisableSlide8-2' style='background: #543969;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #4B335E; font-size: 180px;'>8</h2> <div class='carousel-caption'> <h3 style='font-size: 19px; margin-left: -12px;'>Bureaucracy</h3> <br> <a style='background-color: #764891' class='more-info' data-toggle='modal' data-target='#myModalSC-Bureaucracy'>More Info</a> </div> </div> <div id='sottDisableSlide8-1' style='background: #543969;' class='item'> <h2 style='margin: 0; padding-top: 90px; color: #4B335E; font-size: 180px;'>8</h2> <div class='carousel-caption'> <h3 style='font-size: 19px;'>Industry</h3> <br> <a style='background-color: #764891' class='more-info' data-toggle='modal' data-target='#myModalSC-Industry'>More Info</a> </div> </div> </div> <!-- Carousel nav --> <a id='sc8left' class='carousel-control left bothDisable' href='#myCarousel-8' data-slide='prev'> <span class='glyphicon glyphicon-chevron-left'></span> </a> <a id='sc8right'class='carousel-control right bothDisable' href='#myCarousel-8' data-slide='next'> <span class='glyphicon glyphicon-chevron-right'></span> </a> </div> </div>").insertAfter(".card-7");
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
	$(''+ id +'').attr('style','background-position: 0 -'+ yPos +'px');
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

function setCustomVP(event) {
	if (event.data.vp == "custom") {
		$('#custom-input').attr('style','display:block');
		$('#customOK').click(function(){
			vpToWin = $('#customVPvalue').val()

			$('#set-vp').text(vpToWin + " VP's");
			$('#custom-input').attr('style','display:none');

		});
	} else {
		vpToWin = event.data.vp;
		$('#set-vp').text(vpToWin + " VP's");
	}
}


// On page load it takes all the data loaded from load-data.js and puts it into the site.
function setSettings(data) {
	// Set Expansion data
//console.log(data);
	if (data[2] == 1) { //SE
		seEnabled = 1;
		$('#setting-se').text('Enabled');
		$('#setting-se').attr('class', 'btn btn-success');
	}

	if (data[3] == 1) { //SoTT
		sottEnabled = 1;
		$('#setting-sott').text('Enabled');
		$('#setting-sott').attr('class', 'btn btn-success');	
	}

	renderExpansionContent();

	//Special Case: Set Victory Points
	$('#set-vp').text(data[4] + " VP's");

	// Set Module data
	// enables and disables Base Game modules
	aoeEnabled = data[5];
		loadModuleSettings("aoe","base");
	dsEnabled = data[6];
		loadModuleSettings("ds","base");
	leadersEnabled = data[7];
		loadModuleSettings("leaders","base");
	srunsEnabled = data[8];
		loadModuleSettings("sruns","base");
	// enables and disables SE modules
	voEnabled = data[9];
		loadModuleSettings("vo","se");
	rstEnabled = data[10];
		loadModuleSettings("rst","se");
	artifactsEnabled = data[11];
		loadModuleSettings("artifacts","se");
	stroopsEnabled = data[12];
		loadModuleSettings("stroops","se");
	sminesEnabled = data[13];
		loadModuleSettings("smines","se");
	wnexusEnabled = data[14];
		loadModuleSettings("wnexus","se");
	facilitiesEnabled = data[15];
		loadModuleSettings("facilities","se");
	tretreatsEnabled = data[16];
		loadModuleSettings("tretreats","se");
	newdsunsEnabled = data[17];
		loadModuleSettings("newdsuns","se");
	tdsunsEnabled = data[18];
		loadModuleSettings("tdsuns","se");
	comrexEnabled = data[19];
		loadModuleSettings("comrex","se");
	votcEnabled = data[20];
		loadModuleSettings("votc","se");
	seturnsEnabled = data[21];
		loadModuleSettings("seturns","se");
	// enables and disables SOTT modules
	pobjEnabled = data[22];
		loadModuleSettings("pobj","sott");
	rst2Enabled = data[23];
		loadModuleSettings("rst2","sott");
	flagshipsEnabled = data[24];
		loadModuleSettings("flagships","sott");
	ffEnabled = data[25];
		loadModuleSettings("ff","sott");
	munitsEnabled = data[26];
		loadModuleSettings("munits","sott");
	mercenariesEnabled = data[27];
		loadModuleSettings("mercenaries","sott");
	pintrigueEnabled = data[28];
		loadModuleSettings("pintrigue","sott");
	foteEnabled = data[29];
		loadModuleSettings("fote","sott");

	// Set Custom house rules data
	$('#custom_house_rules').val(data[30]);

	//Set disabled races
	if (parseInt(data[31]) == 1) {
		letnevDisabled = parseInt(data[31]);
		raceBgPosition('#letnev', 120);
	}

	if (parseInt(data[32]) == 1) {
		hacanDisabled = parseInt(data[32]);
		raceBgPosition('#hacan', 120);
	}

	if (parseInt(data[33]) == 1) {
		solDisabled = parseInt(data[33]);
		raceBgPosition('#sol', 120);
	}

	if (parseInt(data[34]) == 1) {
		l1z1xDisabled = parseInt(data[34]);
		raceBgPosition('#l1z1x', 120);
	}

	if (parseInt(data[35]) == 1) {
		mentakDisabled = parseInt(data[35]);
		raceBgPosition('#mentak', 120);
	}

	if (parseInt(data[36]) == 1) {
		naaluDisabled = parseInt(data[36]);
		raceBgPosition('#naalu', 120);
	}

	if (parseInt(data[37]) == 1) {
		sardakkDisabled = parseInt(data[37]);
		raceBgPosition('#sardakk', 120);
	}

	if (parseInt(data[38]) == 1) {
		jol_narDisabled = parseInt(data[38]);
		raceBgPosition('#jol_nar', 120);
	}

	if (parseInt(data[39]) == 1) {
		xxchaDisabled = parseInt(data[39]);
		raceBgPosition('#xxcha', 120);
	}

	if (parseInt(data[40]) == 1) {
		yssarilDisabled = parseInt(data[40]);
		raceBgPosition('#yssaril', 120);
	}

	if (parseInt(data[41]) == 1) {
		saarDisabled = parseInt(data[41]);
		raceBgPosition('#saar', 120);
	}

	if (parseInt(data[42]) == 1) {
		muaatDisabled = parseInt(data[42]);
		raceBgPosition('#muaat', 120);
	}

	if (parseInt(data[43]) == 1) {
		winnuDisabled = parseInt(data[43]);
		raceBgPosition('#winnu', 120);
	}

	if (parseInt(data[44]) == 1) {
		yinDisabled = parseInt(data[44]);
		raceBgPosition('#yin', 120);
	}

	if (parseInt(data[45]) == 1) {
		arborecDisabled = parseInt(data[45]);
		raceBgPosition('#arborec', 143);
	}

	if (parseInt(data[46]) == 1) {
		creussDisabled = parseInt(data[46]);
		raceBgPosition('#creuss', 148);
	}

	if (parseInt(data[47]) == 1) {
		nekroDisabled = parseInt(data[47]);
		raceBgPosition('#nekro', 117);
	}

	if (parseInt(data[48]) == 1) {
		lazaxDisabled = parseInt(data[48]);
		raceBgPosition('#lazax', 123);
	}


// Set Strategy Cards
sc1 = parseInt(data[49]);
	$('#myCarousel-1').carousel(parseInt(data[49]));
sc2 = parseInt(data[50]);
	$('#myCarousel-2').carousel(parseInt(data[50]));
sc3 = parseInt(data[51]);
	$('#myCarousel-3').carousel(parseInt(data[51]));
sc4 = parseInt(data[52]);
	$('#myCarousel-4').carousel(parseInt(data[52]));
sc5 = parseInt(data[53]);
	$('#myCarousel-5').carousel(parseInt(data[53]));
sc6 = parseInt(data[54]);
	$('#myCarousel-6').carousel(parseInt(data[54]));
sc7 = parseInt(data[55]);
	$('#myCarousel-7').carousel(parseInt(data[55]));
sc8 = parseInt(data[56]);
	$('#myCarousel-8').carousel(parseInt(data[56]));


}

// Toggles Modules on and off depending on loading value.
function loadModuleSettings(arg, game){
	if (game == "se"){

		if (window[arg + 'Enabled'] == 1) {
			$('#setting-module-se-' + arg).text('Enabled');
			$('#setting-module-se-' + arg).attr('class', 'btn btn-xs btn-success');
		}

	} else if (game == "sott") {

		if (window[arg + 'Enabled'] == 1) {
			$('#setting-module-sott-' + arg).text('Enabled');
			$('#setting-module-sott-' + arg).attr('class', 'btn btn-xs btn-success');
		}// } else { // set to disabled
		// 	$('#setting-module-sott-' + arg).text('Disabled');
		// 	$('#setting-module-base-' + arg).attr('class', 'btn btn-xs btn-danger');
		// }

	} else {

		if (window[arg + 'Enabled'] == 1) {
			$('#setting-module-base-' + arg).text('Enabled');
			$('#setting-module-base-' + arg).attr('class', 'btn btn-xs btn-success');
		}// } else { // set to disabled
		// 	$('#setting-module-base-' + arg).text('Disabled');
		// 	$('#setting-module-base-' + arg).attr('class', 'btn btn-xs btn-danger');
		// }

	}

	
}








