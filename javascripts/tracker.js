// Set row counter to rows fetched from database
var counter = 1;
function setCounter(data) {
	counter = data;
}

function setPlayerData(player_data) {

	for (i = 0, row = 1; i <= player_data.length; i++) { 

		$('#colorselector_player_'+ row +'').val(''+ player_data[i] +'');
    	$('#color_'+ row +' > div > a > span').attr('style','background-color: '+ player_data[i] +'');

    	i++

    	$('#player_name_'+ row +'').val(''+ player_data[i] +'');

    	i++

    	$('#player_race_'+ row +'').val(''+ player_data[i] +'');
		
		row++;
	}
}



//Advances turn tracker clockwise
var angle = 112.5;

function nextStrategy() {
	angle += 45;
	$("#needle").rotate(angle);
}

//Advances turn tracker counter clockwise
function previousStrategy() {
	angle -= 45;
	$("#needle").rotate(angle);
}



//Adds rows to the player table every time the Add Player button is pressed
function addPlayer() {  
	counter ++;

	if (counter >= 8) {
		$('#add-player').addClass('disabled');
	}

	$('#remove_row_'+ (counter-1)).attr('style','display:none !important');

	$('#player-table tr:last').after('<tr id="row' + counter + '"><td>' + counter + '</td><td id="color_'+ counter +'"><select id="colorselector_player_'+ counter +'"><option value="black" data-color="#000000" selected>black</option><option value="blue" data-color="#0000FF">blue</option><option value="gray" data-color="#B2B2B2">gray</option><option value="green" data-color="#009900">green</option><option value="orange" data-color="#FF9900">orange</option><option value="purple" data-color="#990099">purple</option><option value="red" data-color="#FF0000">red</option><option value="yellow" data-color="#FFFF00">yellow</option></select><script>$("#colorselector_player_'+ counter +'").colorselector();</script></td><td><input id="player_name_'+ counter + '" type="text" placeholder="Player ' + counter + '"></td><td><select id="player_race_'+ counter +'" class="form-control" name="race_player_'+ counter +'"><option value="" selected disabled>Select Race</option><option value="The Arborec">The Arborec</option><option value="The Barony of Letnev">The Barony of Letnev</option><option value="The Clan of Saar">The Clan of Saar</option><option value="The Embers of Muaat">The Embers of Muaat</option><option value="The Emirates of Hacan">The Emirates of Hacan</option><option value="The Federation of Sol">The Federation of Sol</option><option value="The Ghosts of Creuss">The Ghosts of Creuss</option><option value="The L1Z1X Mindnet">The L1Z1X Mindnet</option><option value="The Lazax">The Lazax</option><option value="The Mentak Coalition">The Mentak Coalition</option><option value="The Naalu Collective">The Naalu Collective</option><option value="The Nekro Virus">The Nekro Virus</option><option value="The Sardakk N&#39;orr">The Sardakk N&#39;orr</option><option value="The Universities of Jol-Nar">The Universities of Jol-Nar</option><option value="The Winnu">The Winnu</option><option value="The Xxcha Kingdom">The Xxcha Kingdom</option><option value="The Yin Brotherhood">The Yin Brotherhood</option><option value="The Yssaril Tribes">The Yssaril Tribes</option></select></td><td><a class="close" id="remove_row_'+ counter +'" onclick="removeRow(' + counter + ')" href="#">&times</a></td></tr>');

}

//Removes last row of the player table every time the close button is pressed. Then adds a close button to the new last row.
function removeRow(row) {
	counter -= 1;

   if (counter <= 8) {
		$('#add-player').removeClass('disabled');
	}

   $('#row' + row).remove();

   $('#remove_row_'+ (counter)).attr('style','display:block !important');

}













