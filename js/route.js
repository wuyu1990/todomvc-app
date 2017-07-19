(function(angular){
    "use strict";
    angular.module("TodeApp.route",["ngRoute"])
    .config(['$routeProvider', function ($routeProvider) {
        var routeConfig = {
			controller: 'TodeCtri',
			templateUrl: './index.html'
		};
        $routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
    }])
   
})(angular)