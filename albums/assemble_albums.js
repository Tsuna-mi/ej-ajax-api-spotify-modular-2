(function ($){

	$( document).on("ResponseOK_Albums", function(event, searchAlbumsData){
				
		var optionsAlbums = '<option value="0">Select Album:</option>';
		var albums = searchAlbumsData.items; //array
			
			$.each(albums, function(index, oAlbums){
				var idAlbum = oAlbums.id;
				// console.log("id Album" + oAlbums.id);
				
				thumbnailAlbum = oAlbums.images[2]['url'];			
				// console.log("URL thumbnail " + thumbnailAlbum);
				
				nameAlbum = oAlbums.name;
				// console.log("id Album " + oAlbums.name);

				optionsAlbums += '<option value="' + idAlbum + '">' + oAlbums.name + ' </option>';
				
			})
			
			$("#albums").html(optionsAlbums);
	});
	
})(jQuery);