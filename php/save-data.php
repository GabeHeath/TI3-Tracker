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

	$query_player_1 = mysql_query("UPDATE players SET color = '$c1', name = '$n1', race = '$r1' where player = 1 AND game = 1"); //Insert query
	$query_player_2 = mysql_query("UPDATE players SET color = '$c2', name = '$n2', race = '$r2' where player = 2 AND game = 1");
	$query_player_3 = mysql_query("UPDATE players SET color = '$c3', name = '$n3', race = '$r3' where player = 3 AND game = 1");
	$query_player_4 = mysql_query("UPDATE players SET color = '$c4', name = '$n4', race = '$r4' where player = 4 AND game = 1");
	$query_player_5 = mysql_query("UPDATE players SET color = '$c5', name = '$n5', race = '$r5' where player = 5 AND game = 1");
	$query_player_6 = mysql_query("UPDATE players SET color = '$c6', name = '$n6', race = '$r6' where player = 6 AND game = 1");
	$query_player_7 = mysql_query("UPDATE players SET color = '$c7', name = '$n7', race = '$r7' where player = 7 AND game = 1");
	$query_player_8 = mysql_query("UPDATE players SET color = '$c8', name = '$n8', race = '$r8' where player = 8 AND game = 1");



//If all queries are true echo success. save-data.js post looks for sucess response and alerts user of successful save.
	for ($i=1, $j=1; $i <= 8; $i ++) {
		if(${"query_player_{$i}"}){
	 		$j++;
		}

		if ($j == 8) {
			echo "success";
		}

	}
	





	mysql_close($connection); // Connection Closed.
?>