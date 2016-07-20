(function ($){

	$("form").on("submit", function(event){
		event.preventDefault();

		var searchValue = $("#search").val();
		var apiSearch = "https://api.spotify.com/v1/search?type=artist&query=";
		
		$.ajax({
				url: apiSearch + searchValue

		})
		.done(function (searchArtistsData){
			
			$( document).trigger("ResponseOK_Artists", searchArtistsData);

		})
							
	});

	
})(jQuery);