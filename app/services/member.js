angular.module('dojo')
    .factory('MemberService', function ($resource) {
        var service = this;

        service.api = $resource('//dojo.local/member/:id', {}, {
            query: {
                method: 'GET', isArray: false
            }
        });

        return {api: service.api};
    });


