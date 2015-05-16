angular.module('MyAppApp')

.directive('userTr', function() {
    return {
        // template: ['<td>{{user.username | lowercase}}</td>',
        //     '<td>{{user.name | uppercase}}</td>',
        //     '<td>{{user.balance | currency}}</td>',
        //     '<td ng-class="user.role" ng-switch="user.role">',
        //     '{{user.role}}',
        //     '<span ng-switch-when="admin">',
        //     '!!!',
        //     '</span>',
        //     '<span ng-switch-when="editor">',
        //     '!!',
        //     '</span>',
        //     '<span ng-switch-when="user">',
        //     ':(',
        //     '</span>',
        //     '</td>',
        //     '<td>{{user.createdAt | date:"yyyy-MM-dd HH:mm:ss Z"}}</td>',
        //     '<td>',
        //     '{{user.disabled}}',
        //     '</td>',
        //     '<td><a ng-href="{{user.url}}">Link</a></td>',
        //     '<td><img ng-src="{{user.image}}" style="max-width: 100px" alt=""></td>',
        //     '<td><a href="" ng-click="vm.edit(user)">Edit</a></td>'
        // ].join(''),
        templateUrl: 'user-tr.html',
        // replace: true,
        // transclude: true,
        // restrict: 'A',
        // scope: {},
        // controller: function($scope, $element, $attrs, $transclude) {
        //     console.log('user-tr');
        // },
        // compile: function compile(tElement, tAttrs, transclude) {
        //     return function postLink(scope, iElement, iAttrs, controller) {

        //     }
        // },
        // link: function postLink(scope, iElement, iAttrs) {
        //     console.log('user-tr');
        // }
    };
});
