(function ($){

	$("#albums").on("change", function(event){
		
		var idAlbum = $('#albums').val();
		var searchTracks = "https://api.spotify.com/v1/albums/" + idAlbum + "/tracks";	

		$.ajax({
				url: searchTracks

		})
		.done(function (searchTracksData){
			$( document).trigger("ResponseOK_Tracks", searchTracksData);

		})

	});	


})(jQuery);