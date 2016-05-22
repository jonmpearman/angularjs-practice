app.controller('PostController', ['messages', function(messages) {
	var self = this;

	self.newMessage = 'This is newMessage';

	self.addMessage = function(message) {
		messages.add(message);
		self.newMessage = '';
	};
}]);