$(document).ready(function() {
	$("#save-btn").click(function() {

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
		


		var race = [];
		for (i=1; i<=8; i++) {
			race.push($('#player_race_'+ i +'').val());
		}
		

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
        			$('body').prepend('<div class="alert alert-danger fade in"><button type="button" class="close" data-dismiss="alert">×</button><i style="margin-right: 5px;" class="glyphicon glyphicon-exclamation-sign"></i><strong>Error. </strong>Failed to post data.</div>');
        			console.log('Error: ' + xhr.responseText);
			  	})
			  	.always(function() {
			    	//alert( "finished" );
				});
		



	});
});