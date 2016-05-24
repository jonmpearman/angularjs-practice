app.factory('getData', ['$timeout', '$q', function($timeout, $q){
	return function() {
		return $q(function(resolve, reject) {
			$timeout(function() {
				resolve(Math.floor(Math.random() * 10))
			}, 2000);
		});
	};
}]).run(function(getData) {
	var promise = getData()
	.then(function(num) {
			console.log(num);
			return num * 2;
	})
	.then(function(num) {
		console.log(num);
	})
	.finally(function(){
		console.log('Finished at: ', new Date());
	});
});