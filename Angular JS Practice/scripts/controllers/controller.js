app.controller('MainController', function(){
	var self = this;
	self.message = 'hello';

	self.updateMessage = function(message) {
		self.message = message;
	};
});