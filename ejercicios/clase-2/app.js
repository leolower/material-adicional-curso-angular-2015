angular.module('MyAppApp', [])

/////////////////
// CONTROLLERS //
/////////////////
.controller('MainCtrl', function() {

    var vm = this;

    vm.users = window.users;
    vm.userFilter = '';
    vm.order = 'username';
    vm.sortBy = function(txt) {
        vm.order = txt;
    };
    vm.handleSubmit = function(param) {
        vm.userFilter = vm.otherVar;
    };

});
