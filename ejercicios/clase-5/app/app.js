'use strict';

angular
    .module('XEnLinea', [
        // Dependencies
        'ui.router',
        'ui.bootstrap',

        // App modules
        'XEnLinea.login',
        'XEnLinea.juego'])
    .config(Router)
    .controller('MainController', MainController)
;

function Router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'LoginController as LoginController'
        })
        .state('juego', {
            url: '/juego',
            templateUrl: 'app/game/juego.html',
            controller: 'GameController as GameController'
        });
}

/* @ngInject */
function MainController() {
    var vm = this;
    vm.title = 'MainController';
}
