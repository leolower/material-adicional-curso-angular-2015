angular.module('FormValidationApp', [])

/////////////////
// CONTROLLERS //
/////////////////
.controller('MainCtrl', function(CategoryService, $scope) {
    this.someObject = {
        name: 'Some Object',
        size: 170,
        createdAt: new Date(),
        enabled: true,
        category: 2
    };

    this.categories = CategoryService.categories;
    this.alertData = function() {
        alert('data saved');
    };
})

.factory('CategoryService', CategoryService)

.constant('BASE_URL', 'http://localhost:8080/api');


function CategoryService() {
    var categories = [{
        id: 1,
        name: 'Category 1'
    }, {
        id: 2,
        name: 'Category 2'
    }, {
        id: 3,
        name: 'Category 3'
    }];

    return {
        categories: categories,
        getAll: function() {
            return categories;
        }
    };
}
