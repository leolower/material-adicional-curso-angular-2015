angular.module('MyAppApp')

.directive('myDirective', function() {
    return {
        // priority: 0,
        template: [
            '<div>Esta es una directive con atributo: {{atributo}}! ',
            // '<pre>{{vm | json}}</pre>',
            '</div>'
        ].join(''),
        // templateUrl: 'directive.html',
        // replace: true,
        restrict: 'A',
        scope: {
            atributo: '='
        },
        // transclude: true
        // controller: function($scope, $element, $attrs, $transclude) {
        //     console.log('directive ', 1);
        // },
        // compile: function compile(tElement, tAttrs, transclude) {
        //     return function postLink(scope, iElement, iAttrs, controller) {
        //         console.log('directive ', 2);
        //     }
        // },
        // link: function postLink(scope, iElement, iAttrs) {
        //     console.log('directive ', 3);
        // }
    };
})


.directive('dirName', function() {
    return {
        restrict: 'A',
        controller: function($scope, $element, $attrs, $transclude) {
            console.log('directive ', 1);
        }
    };
})

.directive('dirName2', function() {
    return function(scope, iElement, iAttrs) {

    };
})
