var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('Page1', {
            url: '/',
            templateUrl: 'ngApp/page1.html',
            controller: MyApp.Controllers.HomeController,
            controllerAs: 'vm'
        }).state('Page2', {
            url: '/page2',
            templateUrl: 'ngApp/page2.html',
            controller: MyApp.Controllers.HomeController,
            controllerAs: 'vm'
        });
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
