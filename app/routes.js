app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/pages/home/home.html'
            })
            .state('news', {
                url: '/news',
                templateUrl: 'app/pages/news/news.html'
            });
    }
]);