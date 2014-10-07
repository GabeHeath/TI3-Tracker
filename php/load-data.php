<?php 
// Establishing connection with server by passing "server_name", "user_id", "password".
	$connection = mysql_connect("localhost", "root", "");
	// Selecting Database by passing "database_name" and above connection variable.
	$db = mysql_select_db("ti3", $connection);


	$load_player_1 = mysql_query("SELECT color, name, race FROM players WHERE player = 1 AND game = 1");
	$load_player_2 = mysql_query("SELECT color, name, race FROM players WHERE player = 2 AND game = 1");
	$load_player_3 = mysql_query("SELECT color, name, race FROM players WHERE player = 3 AND game = 1");
	$load_player_4 = mysql_query("SELECT color, name, race FROM players WHERE player = 4 AND game = 1");
	$load_player_5 = mysql_query("SELECT color, name, race FROM players WHERE player = 5 AND game = 1");
	$load_player_6 = mysql_query("SELECT color, name, race FROM players WHERE player = 6 AND game = 1");
	$load_player_7 = mysql_query("SELECT color, name, race FROM players WHERE player = 7 AND game = 1");
	$load_player_8 = mysql_query("SELECT color, name, race FROM players WHERE player = 8 AND game = 1");

	$load_settings = mysql_query("SELECT * FROM game_settings WHERE game = 1");


	// Begin: Make a string of 1's and 0's to signify if the columns of a player are all blank. Then find
	// the last non-empty row. This shows how many rows to add if the page is reloaded.
	$index_string = "";
	$player_data = array();

	for ($i=1; $i<=8; $i++) {
		$result =  mysql_fetch_row(${"load_player_{$i}"});

		if (empty($result[0]) && empty($result[1]) && empty($result[2])) {
    		$index_string.= "0";
		} else {
			$index_string.= "1";
		}

		array_push($player_data, $result[0], $result[1], $result[2]);

	}

	
	$num_rows_to_load = (strrpos($index_string,'1')) + 1;
	$response_array['counter_value'] = $num_rows_to_load;


	// End
    
    $html_output = array();	

	// Using the number of rows found above. Pre-populate that many rows with stored data on page reload.
	if ($num_rows_to_load != 0) {

		for ($counter = 1; $counter <= $num_rows_to_load; $counter++) {
			if ($counter == $num_rows_to_load) {
				array_push($html_output,"<tr id='row{$counter}'><td>{$counter}</td><td id='color_{$counter}'><select id='colorselector_player_{$counter}'><option value='black' data-color='#000000' selected>black</option><option value='blue' data-color='#0000FF'>blue</option><option value='gray' data-color='#B2B2B2'>gray</option><option value='green' data-color='#009900'>green</option><option value='orange' data-color='#FF9900'>orange</option><option value='purple' data-color='#990099'>purple</option><option value='red' data-color='#FF0000'>red</option><option value='yellow' data-color='#FFFF00'>yellow</option></select><script>$('#colorselector_player_{$counter}').colorselector();</script></td><td><input id='player_name_{$counter}' type='text' placeholder='Player {$counter}'></td><td><select id='player_race_{$counter}' class='form-control' name='race_player_{$counter}'><option value='' selected disabled>Select Race</option><option value='Random'>Random</option><option class='sott-option' value='The Arborec'>The Arborec</option><option value='The Barony of Letnev'>The Barony of Letnev</option><option class='se-option' value='The Clan of Saar'>The Clan of Saar</option><option class='se-option' value='The Embers of Muaat'>The Embers of Muaat</option><option value='The Emirates of Hacan'>The Emirates of Hacan</option><option value='The Federation of Sol'>The Federation of Sol</option><option class='sott-option' value='The Ghosts of Creuss'>The Ghosts of Creuss</option><option value='The L1Z1X Mindnet'>The L1Z1X Mindnet</option><option class='sott-option' value='The Lazax'>The Lazax</option><option value='The Mentak Coalition'>The Mentak Coalition</option><option value='The Naalu Collective'>The Naalu Collective</option><option class='sott-option' value='The Nekro Virus'>The Nekro Virus</option><option value='The Sardakk Norr'>The Sardakk N'orr</option><option value='The Universities of Jol-Nar'>The Universities of Jol-Nar</option><option class='se-option' value='The Winnu'>The Winnu</option><option value='The Xxcha Kingdom'>The Xxcha Kingdom</option><option class='se-option' value='The Yin Brotherhood'>The Yin Brotherhood</option><option value='The Yssaril Tribes'>The Yssaril Tribes</option></select></td><td><a class='close' id='remove_row_{$counter}' onclick='removeRow({$counter})' href='#'>&times</a></td></tr>"); // has delete row button
			} else {
				array_push($html_output,"<tr id='row{$counter}'><td>{$counter}</td><td id='color_{$counter}'><select id='colorselector_player_{$counter}'><option value='black' data-color='#000000' selected>black</option><option value='blue' data-color='#0000FF'>blue</option><option value='gray' data-color='#B2B2B2'>gray</option><option value='green' data-color='#009900'>green</option><option value='orange' data-color='#FF9900'>orange</option><option value='purple' data-color='#990099'>purple</option><option value='red' data-color='#FF0000'>red</option><option value='yellow' data-color='#FFFF00'>yellow</option></select><script>$('#colorselector_player_{$counter}').colorselector();</script></td><td><input id='player_name_{$counter}' type='text' placeholder='Player {$counter}'></td><td><select id='player_race_{$counter}' class='form-control' name='race_player_{$counter}'><option value='' selected disabled>Select Race</option><option value='Random'>Random</option><option class='sott-option' value='The Arborec'>The Arborec</option><option value='The Barony of Letnev'>The Barony of Letnev</option><option class='se-option' value='The Clan of Saar'>The Clan of Saar</option><option class='se-option' value='The Embers of Muaat'>The Embers of Muaat</option><option value='The Emirates of Hacan'>The Emirates of Hacan</option><option value='The Federation of Sol'>The Federation of Sol</option><option class='sott-option' value='The Ghosts of Creuss'>The Ghosts of Creuss</option><option value='The L1Z1X Mindnet'>The L1Z1X Mindnet</option><option class='sott-option' value='The Lazax'>The Lazax</option><option value='The Mentak Coalition'>The Mentak Coalition</option><option value='The Naalu Collective'>The Naalu Collective</option><option class='sott-option' value='The Nekro Virus'>The Nekro Virus</option><option value='The Sardakk Norr'>The Sardakk N'orr</option><option value='The Universities of Jol-Nar'>The Universities of Jol-Nar</option><option class='se-option' value='The Winnu'>The Winnu</option><option value='The Xxcha Kingdom'>The Xxcha Kingdom</option><option class='se-option' value='The Yin Brotherhood'>The Yin Brotherhood</option><option value='The Yssaril Tribes'>The Yssaril Tribes</option></select></td><td><a class='close' id='remove_row_{$counter}' onclick='removeRow({$counter})' href='#' style='display:none !important'>&times</a></td></tr>"); //Does not have delete row button
			}
			
		}
	// If database is empty
	} else {
		array_push($html_output,"<tr id='row1'><td>1</td><td id='color_1'><select id='colorselector_player_1'><option value='black' data-color='#000000' selected>black</option><option value='blue' data-color='#0000FF'>blue</option><option value='gray' data-color='#B2B2B2'>gray</option><option value='green' data-color='#009900'>green</option><option value='orange' data-color='#FF9900'>orange</option><option value='purple' data-color='#990099'>purple</option><option value='red' data-color='#FF0000'>red</option><option value='yellow' data-color='#FFFF00'>yellow</option></select><script>$('#colorselector_player_1').colorselector();</script></td><td><input id='player_name_1' type='text' placeholder='Player 1'></td><td><select id='player_race_1' class='form-control' name='race_player_1'><option value='' selected disabled>Select Race</option><option value='Random'>Random</option><option class='sott-option' value='The Arborec'>The Arborec</option><option value='The Barony of Letnev'>The Barony of Letnev</option><option class='se-option' value='The Clan of Saar'>The Clan of Saar</option><option class='se-option' value='The Embers of Muaat'>The Embers of Muaat</option><option value='The Emirates of Hacan'>The Emirates of Hacan</option><option value='The Federation of Sol'>The Federation of Sol</option><option class='sott-option' value='The Ghosts of Creuss'>The Ghosts of Creuss</option><option value='The L1Z1X Mindnet'>The L1Z1X Mindnet</option><option class='sott-option' value='The Lazax'>The Lazax</option><option value='The Mentak Coalition'>The Mentak Coalition</option><option value='The Naalu Collective'>The Naalu Collective</option><option class='sott-option' value='The Nekro Virus'>The Nekro Virus</option><option value='The Sardakk N'orr'>The Sardakk Norr</option><option value='The Universities of Jol-Nar'>The Universities of Jol-Nar</option><option class='se-option' value='The Winnu'>The Winnu</option><option value='The Xxcha Kingdom'>The Xxcha Kingdom</option><option class='se-option' value='The Yin Brotherhood'>The Yin Brotherhood</option><option value='The Yssaril Tribes'>The Yssaril Tribes</option></select></td><td><a class='close' id='remove_row_1' onclick='removeRow(1)' href='#'>&times</a></td></tr>"); // has delete row button
	}



	$settings_data =  mysql_fetch_row($load_settings);




	

	echo json_encode(array("html_output" => $html_output, "player_data" => $player_data, "counter_value" => $num_rows_to_load, "settings_data" => $settings_data));

	mysql_close($connection); // Connection Closed.
    

?>