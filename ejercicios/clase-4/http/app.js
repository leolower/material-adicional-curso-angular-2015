angular.module('MyAppApp', [])

.config(function Config($httpProvider) {

    $httpProvider.interceptors.push(function($window) {
        return {
            'request': function(config) {
                config.headers.Authorization = $window.access_token ? 'Bearer ' + $window.access_token : undefined;

                return config;
            }
        };
    });
})

/////////////////
// CONTROLLERS //
/////////////////

.controller('MainCtrl', function($rootScope, $scope, UserService, BASE_URL) {

    var vm = this;

    vm.constant = BASE_URL;
    vm.users = UserService.users;

    vm.createNewUser = false;

    vm.newUser = {
        username: null,
        name: null,
        balance: null,
        role: null,
        createdAt: null,
        disabled: null,
        url: null,
        image: null
    };
    vm.userFilter = '';
    vm.order = 'username';
    vm.sortBy = function(txt) {
        vm.order = txt;
    };

    vm.usernameIsInvalid = function() {
        return $scope.formObject.$submitted && $scope.formObject.username.$invalid;
    };

    vm.handleSubmit = function(newUser) {
        UserService.create(newUser);

        vm.newUser = {};
        vm.createNewUser = false;
    };

    vm.edit = function(user) {
        vm.newUser = user;
        vm.createNewUser = true;
    };

    vm.create = function() {
        vm.createNewUser = true;
    };
    vm.cancelCreate = function() {
        vm.newUser = {};
        vm.createNewUser = false;
    };

})

.factory('UserService', UserService)

.constant('BASE_URL', {
    server: 'http://192.168.12.21:3000/api'
})

// .directive('compareTo', compareTo)
;

// function compareTo() {
//     return {
//         require: 'ngModel',
//         scope: {
//             otherModelValue: '=compareTo'
//         },
//         link: function(scope, element, attributes, ngModel) {

//             ngModel.$validators.compareTo = function(modelValue) {
//                 return modelValue === scope.otherModelValue;
//             };

//             scope.$watch('otherModelValue', function() {
//                 ngModel.$validate();
//             });
//         }
//     };
// }

function UserService($rootScope, $http, BASE_URL) {
    var users = [];

    function create(newUser) {
        if (users.indexOf(newUser) === -1) {
            $http.post(BASE_URL.server + '/users', newUser)
                .success(function(response) {
                    users.push(newUser);
                });
        }
    }

    function getAll() {
        return $http.get(BASE_URL.server + '/users')
            .success(function(response) {
                angular.extend(users, response);

                return users;
            });
    }
    getAll();

    return {
        users: users,
        create: create,
        getAll: getAll
    };
}
