angular.module('dojo')
    .factory('PizzaRateService', function ($resource) {
        var service = this;

        service.api = $resource('//dojo.local/pizza-rate/:id', {}, {
            query: {
                method: 'GET', isArray: false
            },
            save: {
                method: 'POST', isArray: false
            }
        });

        return {api: service.api};
    });


