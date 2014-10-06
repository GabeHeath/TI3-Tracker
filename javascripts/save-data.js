$(document).ready(function() {
	$("#save-btn").click(function() {

		// Choose which Random Array to use. This will be used if a player selects Random as a race type.
	if (foteEnabled == 1) { // If Fall of te Empire enabled
	
		if (counter == 4) {
			var randomArray = ["The Barony of Letnev", "The Emirates of Hacan", "The Federation of Sol", "The Lazax"];
		} else if (counter == 5) {
			var randomArray = ["The Barony of Letnev", "The Emirates of Hacan", "The Federation of Sol", "The Universities of Jol-Nar", "The Lazax"];
		} else if (counter == 6) {
			var randomArray = ["The Barony of Letnev", "The Emirates of Hacan", "The Federation of Sol", "The Universities of Jol-Nar", "The Xxcha Kingdom", "The Lazax"];
		} else if (counter == 7) {
			var randomArray = ["The Barony of Letnev", "The Emirates of Hacan", "The Federation of Sol", "The Universities of Jol-Nar", "The Xxcha Kingdom", "The Sardakk Norr", "The Lazax"];
		} else { // Too many or not enough Players. Create an alert at the top of the page.
			$('body').prepend('<div class="alert fade in"><button type="button" class="close" data-dismiss="alert">×</button><i style="margin-right: 5px;" class="glyphicon glyphicon-exclamation-sign"></i><strong>Warning. </strong>The Fall of the Empire scenario requires 4-7 players. Data was not saved since Race assignment is dependent on number of Players.</div>');
			return;
		}


	} else { //Else look to see what expansions are enabled and create the appropriate random array.

		if ((seEnabled == 1) && (sottEnabled == 1)) {
			var randomArray = ["The Barony of Letnev", "The Emirates of Hacan", "The Federation of Sol", "The L1Z1X Mindnet", "The Mentak Coalition", "The Naalu Collective", "The Sardakk Norr", "The Universities of Jol-Nar", "The Xxcha Kingdom", "The Yssaril Tribes", "The Clan of Saar", "The Embers of Muaat", "The Winnu", "The Yin Brotherhood", "The Arborec", "The Ghosts of Creuss", "The Nekro Virus"];
		} else if ((seEnabled == 1) && (sottEnabled == 0)) {
			var randomArray = ["The Barony of Letnev", "The Emirates of Hacan", "The Federation of Sol", "The L1Z1X Mindnet", "The Mentak Coalition", "The Naalu Collective", "The Sardakk Norr", "The Universities of Jol-Nar", "The Xxcha Kingdom", "The Yssaril Tribes", "The Clan of Saar", "The Embers of Muaat", "The Winnu", "The Yin Brotherhood"];
		} else if ((seEnabled == 0) && (sottEnabled == 1)) {
			var randomArray = ["The Barony of Letnev", "The Emirates of Hacan", "The Federation of Sol", "The L1Z1X Mindnet", "The Mentak Coalition", "The Naalu Collective", "The Sardakk Norr", "The Universities of Jol-Nar", "The Xxcha Kingdom", "The Yssaril Tribes", "The Arborec", "The Ghosts of Creuss", "The Nekro Virus"];
		} else { // No expansions enabled
			var randomArray = ["The Barony of Letnev", "The Emirates of Hacan", "The Federation of Sol", "The L1Z1X Mindnet", "The Mentak Coalition", "The Naalu Collective", "The Sardakk Norr", "The Universities of Jol-Nar", "The Xxcha Kingdom", "The Yssaril Tribes"];
		} 
	}


//Begin saving player's data here


		var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
            btn.button('reset')
        }, 500)


		var color = [];
		for (i=1; i<=8; i++) {
			color.push($('#colorselector_player_'+ i +'').val());
		}
		


		var name = [];
		for (i=1; i<=8; i++) {
			name.push($('#player_name_'+ i +'').val());
		}
		


	// Begin setting player race

		// Push all player race values to removeRace array. We will check for duplicates against randomArray next.
		var removeRace = [];
		for (i=1; i<=8; i++) {
			removeRace.push($('#player_race_'+ i +'').val()); // Fill the array with all 8 player values. Blank or not.
		}

		
		// This compares the randomArray with the player data and removes every race name that shows up
		// in player_data from the randomArray. The idea is some players can choose random race while
		// others don't. This allows the people who do select random to not get the races of the people who
		// didn't select random.

			randomArray = randomArray.filter(function(val) {
				return removeRace.indexOf(val) == -1;
			});
		


		var race = [];
		for (i=0; i<8; i++){

			if (removeRace[i] == "Random") {

				//Get a random number that falls within the length of randomArray
				var rand = Math.floor(Math.random() * randomArray.length);

				// Push to new race array the randomly selected race. WHich queues it to be saved below.
				race.push(randomArray[rand]);

				// Set the dropdown to the chosen random race, otherwise user will have to refresh page to see random.
				$('#player_race_'+ (i+1) +'').val(randomArray[rand])

				// Splice the array to delete the chosen race so it can't be chosen again.	
				randomArray.splice(rand, 1);


			} else {
				race.push(removeRace[i]); // Else push the non random race name
			}

		}

		// Store all setting values in this array
		var setting = [seEnabled, sottEnabled, vpToWin, aoeEnabled, dsEnabled, leadersEnabled, srunsEnabled, voEnabled, rstEnabled,
		artifactsEnabled, stroopsEnabled, sminesEnabled, wnexusEnabled, facilitiesEnabled, tretreatsEnabled, newdsunsEnabled,
		tdsunsEnabled, comrexEnabled, votcEnabled, seturnsEnabled, pobjEnabled, rst2Enabled, flagshipsEnabled, ffEnabled,
		munitsEnabled, mercenariesEnabled, pintrigueEnabled, foteEnabled,'none', //custom_house_rules
		letnevDisabled, hacanDisabled, solDisabled,
		l1z1xDisabled, mentakDisabled, naaluDisabled, sardakkDisabled, jol_narDisabled, xxchaDisabled, yssarilDisabled, saarDisabled,
		muaatDisabled, winnuDisabled, yinDisabled, arborecDisabled, creussDisabled, nekroDisabled, lazaxDisabled];	    

console.log(setting);
		
			// Returns successful data submission message when the entered information is stored in database.
			$.post(
				"php/save-data.php", {
					c1: color[0], n1: name[0], r1: race[0],
					c2: color[1], n2: name[1], r2: race[1],
					c3: color[2], n3: name[2], r3: race[2],
					c4: color[3], n4: name[3], r4: race[3],
					c5: color[4], n5: name[4], r5: race[4],
					c6: color[5], n6: name[5], r6: race[5],
					c7: color[6], n7: name[6], r7: race[6],
					c8: color[7], n8: name[7], r8: race[7],
					s1: setting[0], s2: setting[1], s3: setting[2], s4: setting[3], s5: setting[4],
					s6: setting[5], s7: setting[6], s8: setting[7], s9: setting[8], s10: setting[9],
					s11: setting[10], s12: setting[11], s13: setting[12], s14: setting[13], s15: setting[14],
					s16: setting[15], s17: setting[16], s18: setting[17], s19: setting[18], s20: setting[19],
					s21: setting[20], s22: setting[21], s23: setting[22], s24: setting[23], s25: setting[24],
					s26: setting[25], s27: setting[26], s28: setting[27], s29: setting[28], s30: setting[29],
					s31: setting[30], s32: setting[31], s33: setting[32], s34: setting[33], s35: setting[34],
					s36: setting[35], s37: setting[36], s38: setting[37], s39: setting[38], s40: setting[39],
					s41: setting[40], s42: setting[41], s43: setting[42], s44: setting[43], s45: setting[44],
					s46: setting[45], s47: setting[46],
				}, function(data) {
				console.log(data);
					if (data == "success") {
						$('body').prepend('<div class="alert alert-success fade in"><button type="button" class="close" data-dismiss="alert">×</button><i style="margin-right: 10px;" class="glyphicon glyphicon-ok"></i><strong>Saved! </strong>Adding some more text here.</div>');
					} else {
						$('body').prepend('<div class="alert alert-danger fade in"><button type="button" class="close" data-dismiss="alert">×</button><i style="margin-right: 5px;" class="glyphicon glyphicon-exclamation-sign"></i><strong>Save Failed. </strong>Obviously, something went wrong.</div>');
					}
				})
			  	.done(function() {
			    	//alert( "second success" );
			  	})
			  	.fail( function(xhr, textStatus, errorThrown) {
        			//alert('Error: ' + xhr.responseText);
        			
        			console.log('Error: ' + xhr.responseText);
			  	})
			  	.always(function() {
			    	//alert( "finished" );
				});
		



	});
});