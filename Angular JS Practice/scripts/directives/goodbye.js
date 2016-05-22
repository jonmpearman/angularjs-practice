app.directive('goodbye', function() {
	return {
		restrict: "A",
		link: function() {
			alert("See ya later!");
		}
	};
});