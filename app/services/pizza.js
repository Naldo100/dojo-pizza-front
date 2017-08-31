angular.module('dojo')
    .factory('PizzaService', function ($resource) {
        var service = this;

        service.api = $resource('//dojo.local/pizza/:id', {}, {
            query: {
                method: 'GET', isArray: false
            }
        });

        return {api: service.api};
    });