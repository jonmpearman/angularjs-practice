app.directive('hello', function() {
	return {
		require: 'welcome',
		link: function(scope, element, attrs, welcomeController) {
			welcomeController.sayHello();
		}
	};
})
.directive('howdy', function() {
	return {
		require: 'welcome',
		link: function(scope, element, attrs, welcomeController) {
			welcomeController.sayHowdy();
		}
	};
})
.directive('hi', function() {
	return {
		require: 'welcome',
		link: function(scope, element, attrs, welcomeController) {
			welcomeController.sayHi();
		}
	};
});