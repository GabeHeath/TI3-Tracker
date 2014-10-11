// Activates the drag and drop of the turn tracker.
jQuery(function($) {
      $("#sortable").sortable({
       // revert: true       // If you enable this make sure to change the setTimeout timer back to 2000 below in mouseup function
        containment: 'parent'
    });
});

var roundStarted = 0;

var sc1Inactive = 0;
var sc2Inactive = 0;
var sc3Inactive = 0;
var sc4Inactive = 0;
var sc5Inactive = 0;
var sc6Inactive = 0;
var sc7Inactive = 0;
var sc8Inactive = 0;

$(function() { //onload look for clicks.

	// Set the names on the draggable items to the names in the players tab.
	$('#tracker-tab').click(function(){

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
		removeBonusSlides();

	});


	// Double click lock to re enable dragging.
	$( ".lock-icon" ).dblclick(function(){
		enableDrag();
	});


	// Dragging a name updates the slider. Time out to make sure draggable is back in the list (due to revert being kind
	// of slow) before calculating the position of the draggable elements.

	for (i=1; i<=8; i++) {
		$('#draggable-player-'+i).mouseup(function(){
			setTimeout(dragPosition,100); //Originially 2000 if .sortable revert = true
		});
	}

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
		$('#passConfirmLabel').text("Alert");
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
	$('#pass-indicator-'+event.data.passed).remove()
	$('#turnTracker').carousel('next');
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
	}, 1500);

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


    // var idsInOrder = $(selector).sortable("toArray");

    // var index = $.inArray("idToLookFor", idsInOrder);

    //RUn in console on turn tracker page to see what it does.

    //