(function ($){

	$( document).on("ResponseOK_Artists", function(event, searchArtistsData){
		
		var artists = searchArtistsData.artists.items; //array
		//console.log ( searchResultsData);
		//console.log( artists );

		var optionsArtist='<option value="0">Select Artist:</option>';
		$.each(artists, function(index, oArtist){
			var idArtist = oArtist.id;
			optionsArtist += '<option value="' + oArtist.id + '">' + oArtist.name + ' </option>'
		})
		$("#artists").html(optionsArtist);

	});
	
})(jQuery);