(function ($){

	$("#artists").on("change", function(event){
		var idArtist = $('#artists').val();		
		var searchAlbum = "https://api.spotify.com/v1/artists/" + idArtist + "/albums?market=US";	

		
		$.ajax({
				url: searchAlbum

		})
		.done(function (searchAlbumsData){
			
			$( document).trigger("ResponseOK_Albums", searchAlbumsData);

		})
							
	});

	
})(jQuery);

