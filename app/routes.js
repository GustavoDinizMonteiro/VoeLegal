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
            })
            .state('promotions', {
                url: '/promotions',
                templateUrl: 'app/pages/promotions/promotions.html'
            })
            .state('agreement', {
                url: '/agreement',
                templateUrl: 'app/pages/agreement/agreement.html'
            })
            .state('signin', {
                url: '/signin',
                templateUrl: 'app/pages/signin/signin.html'
            });
    }
]);