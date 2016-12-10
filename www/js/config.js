app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'template/home.html',
            controller: 'IndexCtrl'
        })
        .state('panoview', {
            url: '/pano/:id',
            templateUrl: 'template/panopage.html',
            controller: 'PanoCtrl'
        });
    $urlRouterProvider.otherwise('/');
});