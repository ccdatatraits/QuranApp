(function(){
	var app = angular.module('arabic', ['infinite-scroll']);
	app.controller('MainBodyCtrl', function($scope) {
		//$scope.Arabic = 'رَبٍّ زِدْنٍي عِلمًا';
		var chunkSize = 10;
		var total = 7;
		$scope.Quran = Quran.slice(0, total);

		$scope.myPagingFunction = function() {
			total += chunkSize;
			$scope.Quran = Quran.slice(0, total);
		}
	});
})();
