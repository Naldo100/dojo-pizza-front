angular.module('dojo', ['angular.filter', 'ui.router', 'ngSanitize', 'ngResource'])
    .config(function($locationProvider, $urlRouterProvider, $httpProvider, $stateProvider) {

        $httpProvider.defaults.timeout = 10000;

        // Ativa a utilização do HTML5 History API
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider.state('home', {
            url: '/?pizza&member&rate',
            params: {},
            templateUrl: '/app/views/template.html'
        });

        /**
         *
         */
        $urlRouterProvider.otherwise('/');

    });



