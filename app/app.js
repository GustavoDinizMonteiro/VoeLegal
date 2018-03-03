var app = angular.module('zona-azul', ['ui.router', 'ngMaterial', 'ngMessages']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('about', {
                url: '/',
                templateUrl: "app/components/about/about.html"
            });
    }
]);
