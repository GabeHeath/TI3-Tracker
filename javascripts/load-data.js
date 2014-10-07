$(document).ready(function() {


    $.getJSON("php/load-data.php", function(data) {
        $("#responsecontainer").html(data.html_output); //Renders html
        setCounter(data.counter_value); // Sets the counter value for player row generation
        setPlayerData(data.player_data); // Populates the generated rows with player data
        renderExpansionContent() // Toggles items depending on expansions enabled. I had to put it here because it was trying to run
                                 // the javascript before this GET was done rendering the html.
        setSettings(data.settings_data); //Grabs all settings from database and sets them. Modules, Strategy Cards, diabled races, and expanisions.
    }).done(function() {
            //alert( "second success" );
        })
        .fail( function(xhr, textStatus, errorThrown) {
            //alert('Error: ' + xhr.responseText);
            $('body').prepend('<div class="alert alert-danger fade in"><button type="button" class="close" data-dismiss="alert">×</button><i style="margin-right: 5px;" class="glyphicon glyphicon-exclamation-sign"></i><strong>Error. </strong>Failed to load data.</div>');
            console.log('Error: ' + xhr.responseText);
        })
        .always(function() {
            //alert( "finished" );
        });
});



 