app.controller('ListController', ['messages', function(messages){
	var self = this;

	self.messages = messages.list;
}]);