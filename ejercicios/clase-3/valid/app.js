angular.module('MyAppApp', [])

/////////////////
// CONTROLLERS //
/////////////////

.controller('MainCtrl', function($rootScope, $scope, UserService, BASE_URL) {

    $scope.$watch('vm.users', function(newValue, oldValue, scope) {
        console.log('vm.newUser', newValue, oldValue);
    }, true);

    var vm = this;

    vm.constant = BASE_URL;
    vm.users = UserService.getAll();
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
        $rootScope.$broadcast('othercontroller.eventName', newUser);

        vm.newUser = {};
        vm.createNewUser = false;
    };

    vm.edit = function(user) {
        vm.newUser = user;
    };

    vm.create = function() {
        vm.createNewUser = true;
    };
    vm.cancelCreate = function() {
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

function UserService($rootScope) {
    var users = [{
        username: 'USERNAME90',
        name: 'name0 lastName0',
        balance: 111.11,
        role: 'admin',
        createdAt: new Date('2015-04-06 12:05:00'),
        disabled: true,
        url: 'http://github.com/username0',
        image: 'http://placehold.it/50x50',
    }, {
        username: 'USERNAME1',
        name: 'name1 lastName1',
        balance: 222.22,
        role: 'user',
        createdAt: new Date('2015-04-06 12:05:00'),
        disabled: true,
        url: 'http://github.com/username1',
        image: 'http://placehold.it/50x50',
    }, {
        username: 'USERNAME2',
        name: 'name2 lastName2',
        balance: 333.33,
        role: 'editor',
        createdAt: new Date('2015-04-06 12:05:00'),
        disabled: true,
        url: 'http://github.com/username2',
        image: 'http://placehold.it/50x50',
    }, {
        username: 'USERNAME3',
        name: 'name3 lastName3',
        balance: 444.44,
        role: 'user',
        createdAt: new Date('2015-04-06 12:05:00'),
        disabled: false,
        url: 'http://github.com/username3',
        image: 'http://placehold.it/50x50',
    }, {
        username: 'USERNAME4',
        name: 'name4 lastName4',
        balance: 555.55,
        role: 'admin',
        createdAt: new Date('2015-04-06 12:05:00'),
        disabled: false,
        url: 'http://github.com/username4',
        image: 'http://placehold.it/50x50',
    }, {
        username: 'USERNAME5',
        name: 'name5 lastName5',
        balance: 666.66,
        role: 'user',
        createdAt: new Date('2015-04-06 12:05:00'),
        disabled: false,
        url: 'http://github.com/username5',
        image: 'http://placehold.it/50x50',
    }, {
        username: 'USERNAME6',
        name: 'name6 lastName6',
        balance: 777.77,
        role: 'editor',
        createdAt: new Date('2015-04-06 12:05:00'),
        disabled: false,
        url: 'http://github.com/username6',
        image: 'http://placehold.it/50x50',
    }, {
        username: 'USERNAME7',
        name: 'name7 lastName7',
        balance: 888.88,
        role: 'editor',
        createdAt: new Date('2015-04-06 12:05:00'),
        disabled: false,
        url: 'http://github.com/username7',
        image: 'http://placehold.it/50x50',
    }, {
        username: 'USERNAME8',
        name: 'name8 lastName8',
        balance: 999.99,
        role: 'user',
        createdAt: new Date('2015-04-06 12:05:00'),
        disabled: false,
        url: 'http://github.com/username8',
        image: 'http://placehold.it/50x50',
    }, {
        username: 'USERNAME9',
        name: 'name9 lastName9',
        balance: 101010.1010,
        role: 'user',
        createdAt: new Date('2015-04-06 12:05:00'),
        disabled: false,
        url: 'http://github.com/username9',
        image: 'http://placehold.it/50x50',
    }];


    $rootScope.$on('othercontroller.eventName', function(e, newUser) {
        if (users.indexOf(newUser) === -1) {
            users.push(newUser);
        }
    });

    return {
        users: users,
        getAll: function() {
            return users;
        }
    };
}
