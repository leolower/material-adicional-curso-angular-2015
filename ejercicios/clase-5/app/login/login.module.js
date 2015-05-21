'use strict';

angular
    .module('XEnLinea.login', [])
    .controller('LoginController', LoginController)
;

/* @ngInject */
function LoginController() {
    var vm = this;
    vm.title = 'LoginController';
}
