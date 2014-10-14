// Activates the drag and drop of the turn tracker.
jQuery(function($) {
      $("#sortable").sortable({
       // revert: true       // If you enable this make sure to change the setTimeout timer back to 2000 below in mouseup function
        containment: 'parent'
    });
});

var roundStarted = 0;
var round = 1;
var newRoundReload = 0;

var sc0Inactive = 0; //naalu
var sc1Inactive = 0;
var sc2Inactive = 0;
var sc3Inactive = 0;
var sc4Inactive = 0;
var sc5Inactive = 0;
var sc6Inactive = 0;
var sc7Inactive = 0;
var sc8Inactive = 0;

var zeroSlide = 0; //For naalu slide. Tells which SC player picked.
var naaluPlayer = {player: 0, active: 0};

var lp0_1 = {slide: 0, side: 1, card: 0};
var lp0_2 = {slide: 0, side: 2, card: 0};
var lp1_1 = {slide: 1, side: 1, card: 0};
var lp1_2 = {slide: 1, side: 2, card: 0};
var lp2_1 = {slide: 2, side: 1, card: 0};
var lp2_2 = {slide: 2, side: 2, card: 0};
var lp3_1 = {slide: 3, side: 1, card: 0};
var lp3_2 = {slide: 3, side: 2, card: 0};
var lp4_1 = {slide: 4, side: 1, card: 0};
var lp4_2 = {slide: 4, side: 2, card: 0};

var pass_L0 = {lcard: 0, rcard: 0};
var pass_L1 = {lcard: 0, rcard: 0};
var pass_L2 = {lcard: 0, rcard: 0};
var pass_L3 = {lcard: 0, rcard: 0};
var pass_L4 = {lcard: 0, rcard: 0};

var initialLowPlayerSetup = false;
var initialLowPlayerNaaluSetup = false;

var passSlideChoices = [];


function setTurnTrackerSettings(data) {
	console.log('loadurl: '+data);
	round = parseInt(data[2]);
	roundStarted = parseInt(data[3]);
	newRoundReload = parseInt(data[4]);
}

function loadNewRound() {
	if (newRoundReload == 1){
		if ( document.location.href.indexOf('round_'+round) > -1 ) {
	    		setTimeout(function(){
	    			$('#tracker-tab').trigger('click');
	    			$('#round-counter').text('Round: '+round);
	    		},100);
		}
		newRoundReload = 0;
	} else {
		$('#round-counter').text('Round: '+round);
	}

	if (roundStarted == 1) {
		disableDrag();
	}
}


$(window).load(function(){
	setTimeout(function(){
		loadNewRound();
	},1000);
});





$(function() { //onload look for clicks.
    

    $('#turn-tracker').on('click','#lp0-1', {val: '0_1'}, lowPlayerStatus);
	$('#turn-tracker').on('click','#lp0-2', {val: '0_2'}, lowPlayerStatus);
	$('#turn-tracker').on('click','#lp1-1', {val: '1_1'}, lowPlayerStatus);
	$('#turn-tracker').on('click','#lp1-2', {val: '1_2'}, lowPlayerStatus);
	$('#turn-tracker').on('click','#lp2-1', {val: '2_1'}, lowPlayerStatus);
	$('#turn-tracker').on('click','#lp2-2', {val: '2_2'}, lowPlayerStatus);
	$('#turn-tracker').on('click','#lp3-1', {val: '3_1'}, lowPlayerStatus);
	$('#turn-tracker').on('click','#lp3-2', {val: '3_2'}, lowPlayerStatus);
	$('#turn-tracker').on('click','#lp4-1', {val: '4_1'}, lowPlayerStatus);
	$('#turn-tracker').on('click','#lp4-2', {val: '4_2'}, lowPlayerStatus);

	$('#turn-tracker').on('click','#pass-L0', {slide: 0}, lowPlayerPass);
	$('#turn-tracker').on('click','#pass-L1', {slide: 1}, lowPlayerPass);
	$('#turn-tracker').on('click','#pass-L2', {slide: 2}, lowPlayerPass);
	$('#turn-tracker').on('click','#pass-L3', {slide: 3}, lowPlayerPass);
	$('#turn-tracker').on('click','#pass-L4', {slide: 4}, lowPlayerPass);

	$('#start-new-round-btn').click(newRoundReset);

	// Set the names on the draggable items to the names in the players tab.
	$('#tracker-tab').click(function(){

		trackerTabClicked();


	});









	//Closes the modal opened above when in other tabs so you can scroll in other tabs
	$('#settings-tab').click(function(){
		$('.modal.in').modal('hide');
	});
	$('#players-tab-nav').click(function(){
		$('.modal.in').modal('hide');
	});
	// Add other tabs here as needed.


	//Controls what happens when the Start Round Button is clicked.
	$('#start-round-btn').click(function(){
		roundStarted = 1;
		disableDrag();

		//See if there is a Player. They always go first in turn order.
		for (i=1; i<=8; i++) {
		  if ($('#player_race_'+i).val() == "The Naalu Collective") {
		    naaluPlayer = {player: i, active: 1};
		  }
		}

		if (naaluPlayer.active == 1) {
			//Activate slide 0
			$('#tracker-inner').prepend("<div id='tracker-card-0' style='background: #827210;' class='active item'> <div id='tracker-slide-0-info' class='tracker-content-left tracker-content-0'> <div id='tracker-slide-0-name'></div><div id='race-player-0' class='crop'><img id='race-player-0-image' src='images/races/the_naalu_collective.png'></div><div id='tracker-slide-0-race'>The Naalu Collective</div> </div> <div class='tracker-content-right tracker-content-0'> <div id='low-player-sc-0-2'>Actions</div> <div><button id='tracker-activate-0' style='margin-top: 20px;' class='btn btn-large btn-block btn-default' type='button'>Status: Activate</button></div> <br> <div id='lpbtn0'><button id='pass-0' class='btn btn-large btn-block btn-default' type='button'>Pass</button></div> </div> <h2 style='margin: 0; color: #72640D; font-size: 270px;'>0</h2> <div class='carousel-caption'> <h3 id='tracker-title-0' class='tracker-card-name' style='font-size: 19px;'>Zero</h3> <br> </div> </div>");
			$('#tracker-card-1').removeClass('active');
			// Add the Naalu player's name to slide
			$('#tracker-slide-0-name').text($('#player_name_'+naaluPlayer.player).val());
			// Add the chosen SC name to slide.
			zeroSlide = (jQuery.inArray('draggable-player-'+naaluPlayer.player, draggablePlayerPosition))+1; // Find where that draggable falls in draggablePlayer array (slide order)
			$('#tracker-title-0').text($('#sc-label-'+zeroSlide).text());
			//Reomove chosen SC slide since it's replaced by the Naalu slide
			$('#tracker-card-'+zeroSlide).remove();
		}



		if (counter < 5) { // 3 and 4 player tracker configuration starts here.
			if (naaluPlayer.active == 1) { // Is there a naalu player?
				lowPlayerNaaluSetup();
			}
		}


		removeBonusSlides();



	});


	// Double click lock to re enable dragging.
	$( ".lock-icon" ).dblclick(function(){
		enableDrag();
	});


	// Dragging a name updates the slider. Time out to make sure draggable is back in the list (due to revert being kind
	// of slow) before calculating the position of the draggable elements. Had to put an event listener becasue mouseup outside
    // of the draggable element wasn't firing.
	var mouseDown = false;
	var draggables = document.getElementById('sortable');

	draggables.addEventListener('mousedown', function(e){
	    mouseDown = true;
	});

	document.documentElement.addEventListener('mouseup', function(e){
	    if (mouseDown) {
	    	setTimeout(dragPosition,100);
	    	mouseDown = false;
	    }
	}); 












	// Changes stuff when Activate is clicked in the slides. For some reason could make these as for loops like the button above.
	$('#tracker-activate-1').click(function() {
		if (sc1Inactive == 0) {
			sc1Inactive = 1;
			$('#tracker-card-1').attr('style','background-color: #333');
			$('#sc-label-1').css({"color":"gray", "background-color":"#333"});
			$('.tracker-content-1').attr('style','background-color: #606264');
			$('#tracker-activate-1').text('Status: Inactive');
		} else {
			sc1Inactive = 0;
			$('#tracker-card-1').attr('style','background-color: #AA4242');
			$('#sc-label-1').css({"color":"#fff", "background-color":"#AA4242"});
			$('.tracker-content-1').attr('style','background-color: rgb(187, 87, 87)');
			$('#tracker-activate-1').text('Status: Active');
		}
		
	});

	$('#tracker-activate-2').click(function() {
		if (sc2Inactive == 0) {
			sc2Inactive = 1;
			$('#tracker-card-2').attr('style','background-color: #333');
			$('#sc-label-2').css({"color":"gray", "background-color":"#333"});
			$('.tracker-content-2').attr('style','background-color: #606264');
			$('#tracker-activate-2').text('Status: Inactive');
		} else {
			sc2Inactive = 0;
			$('#tracker-card-2').attr('style','background-color: #E06E38');
			$('#sc-label-2').css({"color":"#fff", "background-color":"#E06E38"});
			$('.tracker-content-2').attr('style','background-color: #E6894A');
			$('#tracker-activate-2').text('Status: Active');
		}
	});

	$('#tracker-activate-3').click(function() {
		if (sc3Inactive == 0) {
			sc3Inactive = 1;
			$('#tracker-card-3').attr('style','background-color: #333');
			$('#sc-label-3').css({"color":"gray", "background-color":"#333"});
			$('.tracker-content-3').attr('style','background-color: #606264');
			$('#tracker-activate-3').text('Status: Inactive');
		} else {
			sc3Inactive = 0;
			$('#tracker-card-3').attr('style','background-color: #DDD400');
			$('#sc-label-3').css({"color":"#fff", "background-color":"#DDD400"});
			$('.tracker-content-3').attr('style','background-color: #E6E65D');
			$('#tracker-activate-3').text('Status: Active');
		}
	});

	$('#tracker-activate-4').click(function() {
		if (sc4Inactive == 0) {
			sc4Inactive = 1;
			$('#tracker-card-4').attr('style','background-color: #333');
			$('#sc-label-4').css({"color":"gray", "background-color":"#333"});
			$('.tracker-content-4').attr('style','background-color: #606264');
			$('#tracker-activate-4').text('Status: Inactive');
		} else {
			sc4Inactive = 0;
			$('#tracker-card-4').attr('style','background-color: #214B23');
			$('#sc-label-4').css({"color":"#fff", "background-color":"#214B23"});
			$('.tracker-content-4').attr('style','background-color: #325E35');
			$('#tracker-activate-4').text('Status: Active');
		}
	});

	$('#tracker-activate-5').click(function() {
		if (sc5Inactive == 0) {
			sc5Inactive = 1;
			$('#tracker-card-5').attr('style','background-color: #333');
			$('#sc-label-5').css({"color":"gray", "background-color":"#333"});
			$('.tracker-content-5').attr('style','background-color: #606264');
			$('#tracker-activate-5').text('Status: Inactive');
		} else {
			sc5Inactive = 0;
			$('#tracker-card-5').attr('style','background-color: #3D9748');
			$('#sc-label-5').css({"color":"#fff", "background-color":"#3D9748"});
			$('.tracker-content-5').attr('style','background-color: #61B465');
			$('#tracker-activate-5').text('Status: Active');
		}
	});

	$('#tracker-activate-6').click(function() {
		if (sc6Inactive == 0) {
			sc6Inactive = 1;
			$('#tracker-card-6').attr('style','background-color: #333');
			$('#sc-label-6').css({"color":"gray", "background-color":"#333"});
			$('.tracker-content-6').attr('style','background-color: #606264');
			$('#tracker-activate-6').text('Status: Inactive');
		} else {
			sc6Inactive = 0;
			$('#tracker-card-6').attr('style','background-color: #32948C');
			$('#sc-label-6').css({"color":"#fff", "background-color":"#32948C"});
			$('.tracker-content-6').attr('style','background-color: rgba(218, 224, 233, 0.27)');
			$('#tracker-activate-6').text('Status: Active');
		}
	});

	$('#tracker-activate-7').click(function() {
		if (sc7Inactive == 0) {
			sc7Inactive = 1;
			$('#tracker-card-7').attr('style','background-color: #333');
			$('#sc-label-7').css({"color":"gray", "background-color":"#333"});
			$('.tracker-content-7').attr('style','background-color: #606264');
			$('#tracker-activate-7').text('Status: Inactive');
		} else {
			sc7Inactive = 0;
			$('#tracker-card-7').attr('style','background-color: #224983');
			$('#sc-label-7').css({"color":"#fff", "background-color":"#224983"});
			$('.tracker-content-7').attr('style','background-color: #446BA5');
			$('#tracker-activate-7').text('Status: Active');
		}
	});

	$('#tracker-activate-8').click(function() {
		if (sc8Inactive == 0) {
			sc8Inactive = 1;
			$('#tracker-card-8').attr('style','background-color: #333');
			$('#sc-label-8').css({"color":"gray", "background-color":"#333"});
			$('.tracker-content-8').attr('style','background-color: #606264');
			$('#tracker-activate-8').text('Status: Inactive');
		} else {
			sc8Inactive = 0;
			$('#tracker-card-8').attr('style','background-color: #543969');
			$('#sc-label-8').css({"color":"#fff", "background-color":"#543969"});
			$('.tracker-content-8').attr('style','background-color: #764891');
			$('#tracker-activate-8').text('Status: Active');
		}
	});

	$("#tracker-inner").on("click", "#tracker-activate-0", statusOfSlide0);


	$("#tracker-inner").on("click", "#pass-0", passButtonZeroClicked);
	$('#pass-1').click({pass: 1}, passButtonClicked);
	$('#pass-2').click({pass: 2}, passButtonClicked);
	$('#pass-3').click({pass: 3}, passButtonClicked);
	$('#pass-4').click({pass: 4}, passButtonClicked);
	$('#pass-5').click({pass: 5}, passButtonClicked);
	$('#pass-6').click({pass: 6}, passButtonClicked);
	$('#pass-7').click({pass: 7}, passButtonClicked);
	$('#pass-8').click({pass: 8}, passButtonClicked);


});

var draggablePlayerPosition = [];
function dragPosition(){
	draggablePlayerPosition = $('#sortable').sortable("toArray"); // When ever a draggable element is clicked update the array
	// with their positions


if (counter < 5) { // 3 and 4 player tracker configuration starts here.
	if (naaluPlayer.active == 1) { // Is there a naalu player?
		lowPlayerNaaluSetup();
	} else {
		lowPlayerSetup();		
	}
} else {

	// Set the tracker slides to have the proper names
	for (i=0; i<=7; i++) {
		player = (draggablePlayerPosition[i]).slice(-1); //Get the last character of each array element. It will be a number 1-8.

		if ($('#player_name_'+ player).val()) { // If the player that matches the number sliced above has a name in the player tab. Then store the name in var name
			var name = $('#player_name_'+ player).val();
		} else {
			var name = "Bonus"; // Else store Bonus.
		}



		if (counter <= 4) { // If 3 or 4 players do this

			if (i <= 3) { // If player name 1-4 (value is 3 to compensate for index 0 array)
				$('#tracker-slide-'+(i+1)+'-name').text(name); // Set the draggable element's content to name of player. Nothing special. 


				var raceImage = 'images/races/'+ showRaceImage($('#player_race_'+ player).val()) +'.png'; //Get the player's race value from the Player's Tab
				// Put it in the showRaceImage function which returns the image file needed to load for that race.

				if ($('#race-player-'+ player)) { // If an image is already in place, remove it so the new one doesn't keep pushing the divs down.
					$('#race-player-'+ player).remove();
				}

				$('<div id="race-player-'+player+'" class="crop"><img id="race-player-'+player+'-image" src='+raceImage+'></div>').insertAfter('#tracker-slide-'+(i+1)+'-name'); // Put the new image right after the name.

				//Special Conditions for stylings of SotT races
				if (raceImage == 'images/races/the-arborec.png') {
					$('#race-player-'+player+'-image').attr('style','width: 101px;');
				} else if (raceImage == 'images/races/the-ghosts-of-creuss.png') {
					$('#race-player-'+player+'-image').attr('style','width: 110px;');
				} else if (raceImage == 'images/races/the-nekro-virus.png') {
					$('#race-player-'+player+'-image').attr('style','width: 133px;');
				} else if (raceImage == 'images/races/lazax.png') {
					$('#race-player-'+player+'-image').attr('style','width: 142px;');
				}


				$('#tracker-slide-'+(i+1)+'-race').text($('#player_race_'+ player).val()); // Add the race's name right below the image.
					if ( $('#player_race_'+ player).val() == "The Sardakk Norr") {
						$('#tracker-slide-'+(i+1)+'-race').text("The Sardakk N'orr"); // Special case for the Sardakk because their apostraphe screws everything up.
					}



			} else { // If after player 4 we need to loop back to player 1 name since 3 and 4 player rules state that you get to pick 2 Strategy Cards.
				$('#tracker-slide-'+(i+1)+'-name').text($('#tracker-slide-'+(i-3)+'-name').text()); // For setting this name subtract 4 (value 3 to compensate for index 0.)
				// So technically it is (i+1)-4 but I just did i-3 to simplify. So basically set player 5 name to player 1, 6->2, 7->3, and 8->4.
			











		
				var raceImage = 'images/races/'+ showRaceImage($('#player_race_'+ (parseInt(player)-4)).val()) +'.png'; //Get the player's race value from the Player's Tab
				// Put it in the showRaceImage function which returns the image file needed to load for that race.

				if ($('#race-player-'+ player)) { // If an image is already in place, remove it so the new one doesn't keep pushing the divs down.
					$('#race-player-'+ player).remove();
				}

				$('<div id="race-player-'+player+'" class="crop"><img id="race-player-'+player+'-image" src='+raceImage+'></div>').insertAfter('#tracker-slide-'+(i+1)+'-name'); // Put the new image right after the name.

				//Special Conditions for stylings of SotT races
				if (raceImage == 'images/races/the-arborec.png') {
					$('#race-player-'+player+'-image').attr('style','width: 101px;');
				} else if (raceImage == 'images/races/the-ghosts-of-creuss.png') {
					$('#race-player-'+player+'-image').attr('style','width: 110px;');
				} else if (raceImage == 'images/races/the-nekro-virus.png') {
					$('#race-player-'+player+'-image').attr('style','width: 133px;');
				} else if (raceImage == 'images/races/lazax.png') {
					$('#race-player-'+player+'-image').attr('style','width: 142px;');
				}


				$('#tracker-slide-'+(i+1)+'-race').text($('#player_race_'+ (parseInt(player)-4)).val()); // Add the race's name right below the image.
					if ( $('#player_race_'+ (parseInt(player)-4)).val() == "The Sardakk Norr") {
						$('#tracker-slide-'+(i+1)+'-race').text("The Sardakk N'orr"); // Special case for the Sardakk because their apostraphe screws everything up.
					}












			}




		} else { // if more than 4 players proceed as usual.

			$('#tracker-slide-'+(i+1)+'-name').text(name); // Set the draggable element's content to name.

			var raceImage = 'images/races/'+ showRaceImage($('#player_race_'+ player).val()) +'.png'; //Get the player's race value from the Player's Tab
			// Put it in the showRaceImage function which returns the image file needed to load for that race.

			if ($('#race-player-'+ player)) { // If an image is already in place, remove it so the new one doesn't keep pushing the divs down.
				$('#race-player-'+ player).remove();
			}

			$('<div id="race-player-'+player+'" class="crop"><img id="race-player-'+player+'-image" src='+raceImage+'></div>').insertAfter('#tracker-slide-'+(i+1)+'-name'); // Put the new image right after the name.

			//Special Conditions for stylings of SotT races
			if (raceImage == 'images/races/the-arborec.png') {
				$('#race-player-'+player+'-image').attr('style','width: 101px;');
			} else if (raceImage == 'images/races/the-ghosts-of-creuss.png') {
				$('#race-player-'+player+'-image').attr('style','width: 110px;');
			} else if (raceImage == 'images/races/the-nekro-virus.png') {
				$('#race-player-'+player+'-image').attr('style','width: 133px;');
			} else if (raceImage == 'images/races/lazax.png') {
				$('#race-player-'+player+'-image').attr('style','width: 142px;');
			}


			$('#tracker-slide-'+(i+1)+'-race').text($('#player_race_'+ player).val()); // Add the race's name right below the image.
				if ( $('#player_race_'+ player).val() == "The Sardakk Norr") {
					$('#tracker-slide-'+(i+1)+'-race').text("The Sardakk N'orr"); // Special case for the Sardakk because their apostraphe screws everything up.
				}

		}
	}
}
}

function showRaceImage(race) {
	switch (race) {
    case "The Arborec":
        return ('the-arborec');
    case "The Barony of Letnev":
    	return ('the_barony_of_letnev');
    case "The Clan of Saar":
    	return ('the_clan_of_saar');
    case "The Embers of Muaat":
    	return ('the_embers_of_muaat');
    case "The Emirates of Hacan":
    	return ('the_emirates_of_hacan');
    case "The Federation of Sol":
    	return ('the_federation_of_sol');
    case "The Ghosts of Creuss":
    	return ('the-ghosts-of-creuss');
    case "The L1Z1X Mindnet":
    	return ('the_l1z1x_mindnet');
    case "The Lazax":
    	return ('lazax');
    case "The Mentak Coalition":
    	return ('the_mentak_coalition');
    case "The Naalu Collective":
    	return ('the_naalu_collective');
    case "The Nekro Virus":
    	return ('the-nekro-virus');
    case "The Sardakk Norr":
    	return ("the_sardakk_n'orr");
    case "The Universities of Jol-Nar":
    	return ('universities_of_jol-nar');
    case "The Winnu":
    	return ('the_winnu');
    case "The Xxcha Kingdom":
    	return ('the_xxcha_kingdom');
    case "The Yin Brotherhood":
    	return ('the_yin_brotherhood');
    case "The Yssaril Tribes":
    	return ('the_yssaril_tribes');
    case "Random":
    	return ('random');
    case "undefined": // Happens when No race chosen
    	return ('undefined');
	}
}

function enableDrag() {

	for (i=1; i<=8; i++) {
		$('#draggable-player-'+i).css({'box-shadow':'10px 10px 5px #888888','cursor':'move'}); //Removes some CSS that makes it look draggable.
		$('.tracker-sc-label').attr('style','box-shadow: 10px 10px 5px #888888');
	}

	$('.move-icon').show();
	$('.lock-icon').hide();
	$("#sortable").sortable({ disabled: false });

	setTimeout(disableDrag,30000);
}


function disableDrag() {
	for (i=1; i<=8; i++) {
		$('#draggable-player-'+i).css({'box-shadow':'none','cursor':'default'}); //Removes some CSS that makes it look draggable.
		$('.tracker-sc-label').attr('style','box-shadow: none');
	}

	$('.move-icon').hide();
	$('.lock-icon').show();

	$("#sortable").sortable({ disabled: true }); // Disables dragging
}


function passButtonClicked(event) {
	if (eval('(sc'+event.data.pass+'Inactive) == 0')) {
		$('#sc-not-played').show();
		$('#pass-close').show();
		$('#pass-confirm-message').hide();
		$('#pass-cancel').hide();
		$('#pass-activate').hide();
		$('#passConfirmLabel').text("Attention");
	} else {
		$('#sc-not-played').hide();
		$('#pass-close').hide();
		$('#pass-confirm-message').show();
		$('#pass-cancel').show();
		$('#pass-activate').show();	
		$('#passConfirmLabel').text("Confirm");
	}

	$('#passConfirm').modal({show:true});

	$('#pass-activate').click({passed: event.data.pass}, passConfirmed);
}

// When pass confirmed in pass dialog modal
function passConfirmed(event) {
	$('#turnTracker').carousel('next');
	$('#pass-indicator-'+event.data.passed).remove()
	// This is a doozy. Ok - So it takes the draggable-player-x id. Those id's are assigned to each of the draggable
	// player items in order of how players are organized in the Player tab. This function removes slides and changes these
	// draggable items to black. Since players move around you have to find which player is assigned to the Strategy Card slide.
	// To do that you look in the draggablePlayerPosition array and find event.data.passed which is the Player number who clicked
	// the pass button on the slide (passed comes from the pass param which comes from the onclick parmeter). Then, you have to
	// subtract 1 because the array is 0 indexed but the player numbers aren't. Then you slice (get) the last character in the
	// draggablePlayerPosition array. Values in this array look like draggable-player-1, draggable-player-2, etc. So essentially,
	// you are getting the number of the player assigned to the card. Next we add the class passed-player, which turns the draggable
	// item black.
	$('#draggable-player-'+ ((draggablePlayerPosition[(event.data.passed)-1]).slice(-1))).addClass('passed-player');
	setTimeout(function() {
		removeSlide(event.data.passed);
	}, 1200); //1500

}

function removeSlide(slide) {
	$('#tracker-card-'+slide).remove()

	// Get how many slides remain
	var totalItems = $('#turnTracker .item').length;
	if (totalItems <= 1) {
		$('#tracker-left-nav').hide();
		$('#tracker-right-nav').hide();
	}

	if (totalItems == 0) {
		$('#new-game-round').show();
	}

}


function removeBonusSlides() {
	for (i=1; i<=8; i++) {
		if($('#draggable-player-'+i+ ' p').text() == "Bonus") { // Find which draggables say Bonus
			var slide = (jQuery.inArray('draggable-player-'+i, draggablePlayerPosition))+1; // Find where that draggable falls in draggablePlayer array (slide order)
			$('#tracker-card-'+slide).remove(); //Remove that carousel slide
			$('#pass-indicator-'+slide).remove(); //Remove that carousel indicator
			$('#sc-label-'+slide).css({"color":"gray", "background-color":"#333"}); //Change the slide label to passed css
			$('#draggable-player-'+i).addClass('passed-player'); //Change the draggable css to passed style
		}
	}

}


function statusOfSlide0() {
	var cssArray = ['#AA4242','#E06E38','#DDD400','#214B23','#3D9748','#32948C','#224983','#543969']; //hex values of all SC labels so naalu can restore if unactivated.

	if (sc0Inactive == 0) {
		sc0Inactive = 1;
		$('#tracker-card-0').attr('style','background-color: #333');
		$('#sc-label-'+zeroSlide).css({"color":"gray", "background-color":"#333"});
		$('.tracker-content-0').attr('style','background-color: #606264');
		$('#tracker-activate-0').text('Status: Inactive');
	} else {
		sc0Inactive = 0;
		$('#tracker-card-0').attr('style','background-color: #827210');
		$('#sc-label-'+zeroSlide).css({"color":"#fff", "background-color": (cssArray[(zeroSlide-1)])});
		$('.tracker-content-0').attr('style','background-color: #A09131');
		$('#tracker-activate-0').text('Status: Active');
	}
}

function passButtonZeroClicked() {
	if (sc0Inactive == 0) {
		$('#sc-not-played').show();
		$('#pass-close').show();
		$('#pass-confirm-message').hide();
		$('#pass-cancel').hide();
		$('#pass-activate').hide();
		$('#passConfirmLabel').text("Attention");
	} else {
		$('#sc-not-played').hide();
		$('#pass-close').hide();
		$('#pass-confirm-message').show();
		$('#pass-cancel').show();
		$('#pass-activate').show();	
		$('#passConfirmLabel').text("Confirm");
	}

	$('#passConfirm').modal({show:true});

	$('#pass-activate').click(slideZeroPassConfirmed);
}

function slideZeroPassConfirmed() {
	$('#turnTracker').carousel('next');
	$('#draggable-player-'+naaluPlayer.player).addClass('passed-player');
	setTimeout(function() {
		removeSlide(0);
	}, 1200); //1500
}


function lowPlayerSetup() {
	var lowPlayerTurnOrder = [];
	var lowPlayerSlideChoices = [];
	//Get all player names and push t lpturorder array. Then remove duplicates.
	for (i=1; i<=8; i++) {
		var item = draggablePlayerPosition[(i-1)].slice(-1)-0; // -0 forces type of int.
		if (item > 4) {
			item = item - 4;
		}
		var found = jQuery.inArray(item, lowPlayerTurnOrder);

		if (found >= 0) {
    		// Element was found, don't push to order array.
    		lowPlayerSlideChoices.push(item);
		} else {
    		// Element was not found, add it.
    		lowPlayerTurnOrder.push(item);
    		lowPlayerSlideChoices.push(item);
		}
	}

	var lowPlayerSortedSlideChoices = [];
		for (j=0; j<= lowPlayerTurnOrder.length; j++) {
			var value = lowPlayerTurnOrder[j];

			for (k=0; k<=7; k++) {
				if (lowPlayerSlideChoices[k] == value) {
					lowPlayerSortedSlideChoices.push(k+1);
				}
			}
		}

	passSlideChoices = lowPlayerSlideChoices;


	for (i=8; i>=5; i--) { //Remove the last 4 slides since 3-4 players loops and slide will share their 2 SCs.
		$('#tracker-card-'+i).remove();
		$('#pass-indicator-'+i).remove();
	}

	//Get draggable player's names for draggable 1-4 and put them on slides 1-4
	
		var cssArray = ['#AA4242','#E06E38','#DDD400','#214B23','#3D9748','#32948C','#224983','#543969']; //hex values of all SC colors.
		

		if (!initialLowPlayerSetup){ // Only do this stuff once at the beginning.
			for (i=1; i<=4; i++) {
				// Remove large number indicator
				$('#tracker-card-'+i+' > h2').remove();
				// Move left info box to middle and make it gray.
				$('#tracker-slide-'+ i +'-info').css({'left':'37.8%','background-color':'#606264'});
				// Add a pass button to the middle info box.
				$('#tracker-slide-'+ i +'-race').html('<button style=\'margin-top: 9px; z-index: 999; \' id=\'pass-L'+i+'\'  class=\'btn btn-large btn-block btn-default\' type=\'button\'>Pass</button>');	
				// Move right info box a little more right to make spacing equal. 
				$('#tracker-card-'+i+' > div.tracker-content-right.tracker-content-'+i+'').attr('style', 'right:10%');
				// Change entire slide background to dark
				$('#tracker-card-'+i).attr('style','background-color:#333');
				// Remove old pass button since we have a new one for 3-4 players
				$('#pass-'+i).remove();
				// Remove old activate button since we need new ones.
				$('#tracker-activate-'+i).remove();
				// Create a new left-most box.
				$('#tracker-card-'+i).prepend('<div style=\'left:10.5%;\'class=\'tracker-content-right tracker-content-'+ i +'\'><div id=\'low-player-sc-'+i+'-1\'>SC</div><div></div><br><div><button id=\'lp'+i+'-1\' class=\'btn btn-block btn-default\' style=\'margin-top:20px;\'>Status: Active</button></div></div>');
				// Add Status button to right-info box
				$('#lpbtn'+i).html('<button id=\'lp'+i+'-2\' class=\'btn btn-block btn-default\' style=\'margin-top:20px;\'>Status: Active</button>');
				initialLowPlayerSetup = true;
			}
		}


	for (i=1; i<=4; i++) {
		// Set slide title to player's name
		$('#tracker-title-'+i).text($('#player_name_'+lowPlayerTurnOrder[(i-1)]).val());
		
		// Change the player name to race's name since player name is in the <h1>
		$('#tracker-slide-'+ i +'-name').text($('#player_race_'+lowPlayerTurnOrder[(i-1)]).val());
			if ( $('#tracker-slide-'+ i +'-name').text() == "The Sardakk Norr") {
				$('#tracker-slide-'+i+'-name').text("The Sardakk N'orr"); // Special case for the Sardakk because their apostraphe screws everything up.
			}
		// Add race image
		var raceImage = 'images/races/'+ showRaceImage($('#player_race_'+ lowPlayerTurnOrder[(i-1)]).val()) +'.png'; //Get the player's race value from the Player's Tab
		// Put it in the showRaceImage function which returns the image file needed to load for that race.

		if ($('#race-player-'+ lowPlayerTurnOrder[(i-1)])) { // If an image is already in place, remove it so the new one doesn't keep pushing the divs down.
			$('#race-player-'+ lowPlayerTurnOrder[(i-1)]).remove();
		}

		$('<div id="race-player-'+lowPlayerTurnOrder[(i-1)]+'" class="crop"><img id="race-player-'+lowPlayerTurnOrder[(i-1)]+'-image" src='+raceImage+'></div>').insertAfter('#tracker-slide-'+i+'-name'); // Put the new image right after the name.

		//Special Conditions for stylings of SotT races
		if (raceImage == 'images/races/the-arborec.png') {
			$('#race-player-'+lowPlayerTurnOrder[(i-1)]+'-image').attr('style','width: 84px;');
		} else if (raceImage == 'images/races/the-ghosts-of-creuss.png') {
			$('#race-player-'+lowPlayerTurnOrder[(i-1)]+'-image').attr('style','width: 90px;');
		} else if (raceImage == 'images/races/the-nekro-virus.png') {
			$('#race-player-'+lowPlayerTurnOrder[(i-1)]+'-image').attr('style','width: 111px;');
		} else if (raceImage == 'images/races/lazax.png') {
			$('#race-player-'+lowPlayerTurnOrder[(i-1)]+'-image').attr('style','width: 118px;');
		} else { 
			$('#race-player-'+lowPlayerTurnOrder[(i-1)]+'-image').attr('style', 'width:100px');
		}
		$('.crop').css({'width':'200px','height':'100px'});
		
		// Set left and right info box names to chosen Strategy cards
		temp1 = lowPlayerSortedSlideChoices.shift();
		temp2 = lowPlayerSortedSlideChoices.shift();

		$('#low-player-sc-'+i+'-1').text($('#myCarousel-'+temp1+' > div > div.item.active > div > h3').text());
		$('#low-player-sc-'+i+'-2').text($('#myCarousel-'+temp2+' > div > div.item.active > div > h3').text());

		//Change the background colors of the left and right strategy cards to match choices.
		$('#low-player-sc-'+i+'-1').parent().css({'background-color': cssArray[temp1-1]});
		$('#low-player-sc-'+i+'-2').parent().css({'background-color': cssArray[temp2-1]});

		window['lp'+i+'_1'].card = temp1;
		window['lp'+i+'_2'].card = temp2;

		window['pass_L'+i].lcard = temp1;
		window['pass_L'+i].rcard = temp2;


	}
	
}


function lowPlayerStatus(values) {
	var cssArray = ['#AA4242','#E06E38','#DDD400','#214B23','#3D9748','#32948C','#224983','#543969'];
	var slide = window['lp'+values.data.val].slide;
	var side = window['lp'+values.data.val].side;
	var card = window['lp'+values.data.val].card;

	if (window['sc'+card+'Inactive'] == 0) {
		window['sc'+card+'Inactive'] = 1;
		$('#sc-label-'+card).css({"color":"gray", "background-color":"#333"});
		$('#low-player-sc-'+slide+'-'+side).parent().css({'background-color': '#606264 !important'});
		$('#lp'+slide+'-'+side).text('Status: Inactive');
	} else {
		window['sc'+card+'Inactive'] = 0;
		$('#sc-label-'+card).css({"color":"#fff", "background-color": cssArray[card-1]});
		$('#low-player-sc-'+slide+'-'+side).parent().css({'background-color': cssArray[card-1]});
		$('#lp'+slide+'-'+side).text('Status: Active');
	}
}

function lowPlayerPass(values) {
	var lcard = window['pass_L'+values.data.slide].lcard;
	var rcard = window['pass_L'+values.data.slide].rcard;

	if (eval('(sc'+lcard+'Inactive) == 0 || (sc'+rcard+'Inactive) == 0')) {
		$('#sc-not-played').show();
		$('#pass-close').show();
		$('#pass-confirm-message').hide();
		$('#pass-cancel').hide();
		$('#pass-activate').hide();
		$('#passConfirmLabel').text("Attention");
	} else {
		$('#sc-not-played').hide();
		$('#pass-close').hide();
		$('#pass-confirm-message').show();
		$('#pass-cancel').show();
		$('#pass-activate').show();	
		$('#passConfirmLabel').text("Confirm");
	}

	$('#passConfirm').modal({show:true});

	$('#pass-activate').click({slide: values.data.slide, lcard: lcard, rcard: rcard}, lowPlayerPassConfirmed);
}

function lowPlayerPassConfirmed(values) {

	$('#turnTracker').carousel('next');

	if (values.data.slide == 0) {
		$('#pass-indicator-1').remove()
	} else {
		$('#pass-indicator-'+values.data.slide).remove()
	}
	
	
	
	passCard1 = draggablePlayerPosition[values.data.lcard-1];
	passCard2 = draggablePlayerPosition[values.data.rcard-1];

	$('#'+passCard1).addClass('passed-player');
	$('#'+passCard2).addClass('passed-player');
	
	setTimeout(function() {
		lowPlayerRemoveSlide(values.data.slide);
	}, 1200); //1500
}

function lowPlayerRemoveSlide(slide) {
	$('#tracker-card-'+slide).remove()

	// Get how many slides remain
	var totalItems = $('#turnTracker .item').length;
	if (totalItems <= 1) {
		$('#tracker-left-nav').hide();
		$('#tracker-right-nav').hide();
	}

	if (totalItems == 0) {
		$('#new-game-round').show();
	}

}


function lowPlayerNaaluSetup() {
	var lowPlayerTurnOrder = [];
	var lowPlayerSlideChoices = [];
	//Get all player names and push to lpturorder array. Then remove duplicates.
	for (i=1; i<=8; i++) {
		var item = draggablePlayerPosition[(i-1)].slice(-1)-0; // -0 forces type of int.
		if (item > 4) {
			item = item - 4;
		}
		var found = jQuery.inArray(item, lowPlayerTurnOrder);

		if (found >= 0) {
    		// Element was found, don't push to order array.
    		lowPlayerSlideChoices.push(item);
		} else {
    		// Element was not found, add it.
    		lowPlayerTurnOrder.push(item);
    		lowPlayerSlideChoices.push(item);
		}
	}

	var lowPlayerSortedSlideChoices = [];
		for (j=0; j<= lowPlayerTurnOrder.length; j++) {
			var value = lowPlayerTurnOrder[j];

			for (k=0; k<=7; k++) {
				if (lowPlayerSlideChoices[k] == value) {
					lowPlayerSortedSlideChoices.push(k+1);
				}
			}
		}

	passSlideChoices = lowPlayerSlideChoices;


	for (i=8; i>=5; i--) { //Remove the last 5 slides since 3-4 players loops and slide will share their 2 SCs. Plus one more since Naalu replaces.
		$('#tracker-card-'+i).remove();
		$('#pass-indicator-'+i).remove();
	}

	//Get draggable player's names for draggable 1-4 and put them on slides 1-4
	
		var cssArray = ['#AA4242','#E06E38','#DDD400','#214B23','#3D9748','#32948C','#224983','#543969']; //hex values of all SC colors.
		

		if (!initialLowPlayerNaaluSetup){ // Only do this stuff once at the beginning.
			for (i=0; i<=4; i++) {
				// Remove large number indicator
				$('#tracker-card-'+i+' > h2').remove();
				// Move left info box to middle and make it gray.
				$('#tracker-slide-'+ i +'-info').css({'left':'37.8%','background-color':'#606264'});
				// Add a pass button to the middle info box.
				$('#tracker-slide-'+ i +'-race').html('<button style=\'margin-top: 9px; z-index: 999; \' id=\'pass-L'+i+'\'  class=\'btn btn-large btn-block btn-default\' type=\'button\'>Pass</button>');	
				// Move right info box a little more right to make spacing equal. 
				$('#tracker-card-'+i+' > div.tracker-content-right.tracker-content-'+i+'').attr('style', 'right:10%');
				// Change entire slide background to dark
				$('#tracker-card-'+i).attr('style','background-color:#333');
				// Remove old pass button since we have a new one for 3-4 players
				$('#pass-'+i).remove();
				// Remove old activate button since we need new ones.
				$('#tracker-activate-'+i).remove();
				// Create a new left-most box.
				$('#tracker-card-'+i).prepend('<div style=\'left:10.5%;\'class=\'tracker-content-right tracker-content-'+ i +'\'><div id=\'low-player-sc-'+i+'-1\'>SC</div><div></div><br><div><button id=\'lp'+i+'-1\' class=\'btn btn-block btn-default\' style=\'margin-top:20px;\'>Status: Active</button></div></div>');
				// Add Status button to right-info box
				$('#lpbtn'+i).html('<button id=\'lp'+i+'-2\' class=\'btn btn-block btn-default\' style=\'margin-top:20px;\'>Status: Active</button>');
				initialLowPlayerSetup = true;

				$('#tracker-title-0').text($('#player_name_'+naaluPlayer.player).val());
				$('#tracker-slide-0-name').text('The Naalu Collective');
				$('#race-player-0-image').attr('style', 'width:100px');
			}
		}


	for (i=1; i<=4; i++) {
		// Set slide title to player's name if they aren't the naalu player because that is done in the initial setup.
		if (i != naaluPlayer.player) {
			$('#tracker-title-'+i).text($('#player_name_'+lowPlayerTurnOrder[(i-1)]).val());
		}

		// Change the player name to race's name since player name is in the <h1>
		$('#tracker-slide-'+ i +'-name').text($('#player_race_'+lowPlayerTurnOrder[(i-1)]).val());
			if ( $('#tracker-slide-'+ i +'-name').text() == "The Sardakk Norr") {
				$('#tracker-slide-'+i+'-name').text("The Sardakk N'orr"); // Special case for the Sardakk because their apostraphe screws everything up.
			}
		// Add race image
		var raceImage = 'images/races/'+ showRaceImage($('#player_race_'+ lowPlayerTurnOrder[(i-1)]).val()) +'.png'; //Get the player's race value from the Player's Tab
		// Put it in the showRaceImage function which returns the image file needed to load for that race.

		if ($('#race-player-'+ lowPlayerTurnOrder[(i-1)])) { // If an image is already in place, remove it so the new one doesn't keep pushing the divs down.
			$('#race-player-'+ lowPlayerTurnOrder[(i-1)]).remove();
		}

		$('<div id="race-player-'+lowPlayerTurnOrder[(i-1)]+'" class="crop"><img id="race-player-'+lowPlayerTurnOrder[(i-1)]+'-image" src='+raceImage+'></div>').insertAfter('#tracker-slide-'+i+'-name'); // Put the new image right after the name.

		//Special Conditions for stylings of SotT races
		if (raceImage == 'images/races/the-arborec.png') {
			$('#race-player-'+lowPlayerTurnOrder[(i-1)]+'-image').attr('style','width: 84px;');
		} else if (raceImage == 'images/races/the-ghosts-of-creuss.png') {
			$('#race-player-'+lowPlayerTurnOrder[(i-1)]+'-image').attr('style','width: 90px;');
		} else if (raceImage == 'images/races/the-nekro-virus.png') {
			$('#race-player-'+lowPlayerTurnOrder[(i-1)]+'-image').attr('style','width: 111px;');
		} else if (raceImage == 'images/races/lazax.png') {
			$('#race-player-'+lowPlayerTurnOrder[(i-1)]+'-image').attr('style','width: 118px;');
		} else { 
			$('#race-player-'+lowPlayerTurnOrder[(i-1)]+'-image').attr('style', 'width:100px');
		}
		$('.crop').css({'width':'200px','height':'100px'});
		
		// Set left and right info box names to chosen Strategy cards
		temp1 = lowPlayerSortedSlideChoices.shift();
		temp2 = lowPlayerSortedSlideChoices.shift();

		console.log('t1: '+temp1);
		console.log('t2: '+temp2);
		console.log('to: '+lowPlayerTurnOrder);
		console.log((jQuery).inArray(naaluPlayer.player,lowPlayerTurnOrder));


		if (i != ((jQuery).inArray(naaluPlayer.player,lowPlayerTurnOrder)+1)) {
			$('#low-player-sc-'+i+'-1').text($('#myCarousel-'+temp1+' > div > div.item.active > div > h3').text());
			$('#low-player-sc-'+i+'-2').text($('#myCarousel-'+temp2+' > div > div.item.active > div > h3').text());
		} else {
			$('#low-player-sc-0-1').text($('#myCarousel-'+temp1+' > div > div.item.active > div > h3').text());
			$('#low-player-sc-0-2').text($('#myCarousel-'+temp2+' > div > div.item.active > div > h3').text());
		}

		//Change the background colors of the left and right strategy cards to match choices.
		if (i != ((jQuery).inArray(naaluPlayer.player,lowPlayerTurnOrder)+1)) {
			$('#low-player-sc-'+i+'-1').parent().css({'background-color': cssArray[temp1-1]});
			$('#low-player-sc-'+i+'-2').parent().css({'background-color': cssArray[temp2-1]});
		} else {
			$('#low-player-sc-0-1').parent().css({'background-color': cssArray[temp1-1]});
			$('#low-player-sc-0-2').parent().css({'background-color': cssArray[temp2-1]});
		}

		if (i != ((jQuery).inArray(naaluPlayer.player,lowPlayerTurnOrder)+1)) {
			window['lp'+i+'_1'].card = temp1;
			window['lp'+i+'_2'].card = temp2;

			window['pass_L'+i].lcard = temp1;
			window['pass_L'+i].rcard = temp2;
		} else {
			lp0_1.card = temp1;
			lp0_2.card = temp2;
			pass_L0.lcard = temp1;
			pass_L0.rcard = temp2;
		}


	}

	for (i=1; i<=4; i++) {
		if ($('#low-player-sc-'+i+'-1').text() == "SC") {
			$('#tracker-card-'+i).remove();
		}
	}
	
}


function newRoundReset() {
	console.log('pre-round'+round);
	round=round+1;
	roundStarted = 0;
	newRoundReload = 1;

	console.log('newR-round: '+round);
	console.log('newR-roundstarted: '+roundStarted);
	console.log('newR-round-reload: '+newRoundReload);

	$('#save-btn').trigger('click');


}

function trackerTabClicked() {
	if (counter < 3) {
			$('#start-tracker-text').hide();
			$('#start-round-btn').hide();
			$('#not-enough-players').show();
	} else if (counter >= 3 && counter <= 4) {

		$('#start-tracker-text').show();
		$('#start-round-btn').show();
		$('#not-enough-players').hide();

		for(i=1; i<=4; i++) {
			var name = $('#player_name_'+i).val();
			if (name) {
				$('#draggable-player-'+i+' > p').text(name+': 1');
			} else {
				$('#draggable-player-'+i+' > p').text('Bonus');
			}
		}

		for(i=1; i<=4; i++) {
			var name = $('#player_name_'+i).val();
			if (name) {
				$('#draggable-player-'+(i+4)+' > p').text(name+': 2');
			} else {
				$('#draggable-player-'+(i+4)+' > p').text('Bonus');
			}
		}

	} else {

		$('#start-tracker-text').show();
		$('#start-round-btn').show();
		$('#not-enough-players').hide();

		for(i=1; i<=8; i++) {
			var name = $('#player_name_'+i).val();
			if (name) {
				$('#draggable-player-'+i+' > p').text(name);
			} else {
				$('#draggable-player-'+i+' > p').text('Bonus');
			}
		}
	}




		//Set the Strategy Card names on the turn tracker.
		for(i=1; i<=8; i++) {
			$('#tracker-title-'+i).text($('#myCarousel-'+i+' > div > div.item.active > div > h3').text());
			$('#sc-label-'+i).text($('#myCarousel-'+i+' > div > div.item.active > div > h3').text());
		}

		// Controls modal at when turn tracker tab is clicked.
		if (roundStarted == 0) {
			$('#startDialog').modal({backdrop:'static',keyboard:false, show:true}); //Modal appears, can't click outside of it or press keyboard to close. Have to click start.
			$('.modal-backdrop').removeClass("modal-backdrop"); // Removes the backdrop so players can control the draggables.
		}




		dragPosition(); // Update slides info immediately to prevent slice error if you pass with no assigned player.
		if (roundStarted == 1) {
			removeBonusSlides();
		}
}


    // var idsInOrder = $(selector).sortable("toArray");

    // var index = $.inArray("idToLookFor", idsInOrder);

    //RUn in console on turn tracker page to see what it does.

    //