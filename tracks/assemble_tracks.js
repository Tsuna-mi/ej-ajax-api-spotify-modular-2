(function ($){

	$( document).on("ResponseOK_Tracks", function(event, searchTracksData){
		
		var headerAlbum = '<h2><img class="thumb" src="' + thumbnailAlbum + '" />' + nameAlbum + '</h2>';
		//https://api.spotify.com/v1/albums/<ID-ALBUM>/tracks
		$("#selectedAlbum").html(headerAlbum);

		// ul Tracklist
		var tracks = searchTracksData.items; //array
		//console.log ( searchResultsData);
		//console.log( artists );
		var listTracks = '';
		$.each(tracks, function(index, oTracks){
			var idTrack = oTracks.id;
			// console.log("id Tracks " + oTracks.id);
			
			listTracks += '<li><a target="_blank" href="' + oTracks.preview_url + '" ">' + oTracks.name + '</a></li>';
			console.log (listTracks);
		})
		listTracks += '</ul>';
		$("#tracks").html(listTracks);
	});
	
})(jQuery);
			