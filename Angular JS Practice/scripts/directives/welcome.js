app.directive('welcome', function(){
	return {
		restrict: "A",
		link: function() {
			alert("Howdy!");
		}
	};
});