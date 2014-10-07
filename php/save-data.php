<?php

	// Establishing connection with server by passing "server_name", "user_id", "password".
	$connection = mysql_connect("localhost", "root", "");
	// Selecting Database by passing "database_name" and above connection variable.
	$db = mysql_select_db("ti3", $connection);

	 // Fetching Values from URL


	for ($i=1; $i<=8; $i++) {
		if (isset($_POST['c'.$i.''])) {
    		${"c{$i}"} = $_POST['c'.$i.''];
		} else {
			${"c{$i}"} = NULL;
		}

		if (isset($_POST['n'.$i.''])) {
    		${"n{$i}"} = $_POST['n'.$i.''];
		} else {
			${"n{$i}"} = NULL;
		}

		if (isset($_POST['r'.$i.''])) {
    		${"r{$i}"} = $_POST['r'.$i.''];
		} else {
			${"r{$i}"} = NULL;
		}

	}

// Get all settings
	for ($i=1; $i<=47; $i++) {
		${"s{$i}"} = $_POST['s'.$i.''];
	}

// Get all strategy cards
	for ($i=1; $i<=8; $i++) {
		${"sc{$i}"} = $_POST['sc'.$i.''];
	}


	$query_player_1 = mysql_query("UPDATE players SET color = '$c1', name = '$n1', race = '$r1' where player = 1 AND game = 1"); //Insert query
	$query_player_2 = mysql_query("UPDATE players SET color = '$c2', name = '$n2', race = '$r2' where player = 2 AND game = 1");
	$query_player_3 = mysql_query("UPDATE players SET color = '$c3', name = '$n3', race = '$r3' where player = 3 AND game = 1");
	$query_player_4 = mysql_query("UPDATE players SET color = '$c4', name = '$n4', race = '$r4' where player = 4 AND game = 1");
	$query_player_5 = mysql_query("UPDATE players SET color = '$c5', name = '$n5', race = '$r5' where player = 5 AND game = 1");
	$query_player_6 = mysql_query("UPDATE players SET color = '$c6', name = '$n6', race = '$r6' where player = 6 AND game = 1");
	$query_player_7 = mysql_query("UPDATE players SET color = '$c7', name = '$n7', race = '$r7' where player = 7 AND game = 1");
	$query_player_8 = mysql_query("UPDATE players SET color = '$c8', name = '$n8', race = '$r8' where player = 8 AND game = 1");

	// No player 9 just query nine and a way to check for success as seen below. This saves settings
	$query_player_9 = mysql_query("UPDATE game_settings SET shattered_empire_expansion = $s1, shards_of_the_throne_expansion = $s2,
	victory_points_to_win = $s3, age_of_empires = $s4, distant_suns = $s5, leaders = $s6, sabatoge_runs = $s7,
	variant_objectives = $s8, se_race_specific_technologies = $s9, artifacts = $s10, shock_troops = $s11, space_mines = $s12,
	wormhole_nexus = $s13, facilities = $s14, tactical_retreats = $s15, se_distant_suns = $s16, territorial_distant_suns = $s17,
	custodians_of_mecatol_rex = $s18, voice_of_the_council = $s19, simulated_early_turns = $s20, primary_objectives = $s21,
	sott_race_specific_technologies = $s22, flagships = $s23, final_frontier = $s24, mech_units = $s25, mercenaries = $s26,
	political_intrigue = $s27, fall_of_the_empire = $s28, custom_house_rules = '$s29', letnev_disabled = $s30,
	hacan_disabled = $s31,	sol_disabled = $s32, l1z1x_disabled = $s33, mentak_disabled = $s34, naalu_disabled = $s35,
	sardakk_disabled = $s36, jol_nar_disabled = $s37, xxcha_disabled = $s38, yssaril_disabled = $s39, saar_disabled = $s40,
	muaat_disabled = $s41, winnu_disabled = $s42, yin_disabled = $s43, arborec_disabled = $s44, creuss_disabled = $s45,
	nekro_disabled = $s46, lazax_disabled = $s47, strategy_card_1 = $sc1, strategy_card_2 = $sc2, strategy_card_3 = $sc3,
	strategy_card_4 = $sc4, strategy_card_5 = $sc5, strategy_card_6 = $sc6, strategy_card_7 = $sc7, strategy_card_8 = $sc8 WHERE game = 1");

//If all queries are true echo success. save-data.js post looks for sucess response and alerts user of successful save.
	for ($i=1, $j=1; $i <= 9; $i ++) {
		if(${"query_player_{$i}"}){
	 		$j++;
		}

		if ($j == 8) {
			echo "success";
		}

	}
	





	mysql_close($connection); // Connection Closed.
?>