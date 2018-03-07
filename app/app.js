var app = angular.module('voe-legal', ['ui.router', 'ngMaterial', 'ngMessages']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('about', {
                url: '/',
                templateUrl: 'app/components/about/about.html'
            })
            .state('signin', {
                url: '/signin',
                templateUrl: 'app/components/signin/signin.html'
            });
    }
]);
