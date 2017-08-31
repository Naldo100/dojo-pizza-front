(function (angular) {

    PizzaController.$inject = ['PizzaService', 'MemberService', 'PizzaRateService'];

    function PizzaController(PizzaService, MemberService, PizzaRateService) {
        var vm = this;
        vm.pizzas = [];
        vm.members = [];
        vm.pizzaRate = {};
        vm.info = false;

        /**
         * List pizza
         * @returns {undefined}
         */
        vm.listPizza = function() {
            PizzaService.api.query(function(data) {
                vm.pizzas = data._embedded.pizza;
            }, function(e) {
                console.log(e);
            });
        };

        /**
         * List members
         * @returns {undefined}
         */
        vm.listMember = function() {
            MemberService.api.query(function(data) {
                vm.members = data._embedded.member;
            }, function(e) {
                console.log(e);
            });
        };

        vm.listPizzaRate = function() {
            PizzaRateService.api.query(function(data) {
                vm.itens = data._embedded.pizza_rate;
            }, function(e) {
                console.log(e);
            });
        };

        vm.addPizzaRate = function() {
            data = vm.pizzaRate;
            PizzaRateService.api.save(data, function(data) {
                vm.listPizzaRate();
            }, function(e) {
                //ert('Pizza ja cadastrado');

                alert(e.data.detail);
            });
        };

        vm.showCompatibility = function(item) {
            vm.compatibilidade = [];
            vm.listPizzaRate();
           angular.forEach(vm.itens, function(k,v){
               if(k._embedded.pizza.id == item._embedded.pizza.id && k.rate == item.rate) {
                   vm.compatibilidade.push(k);
               }
           });
        };

        vm.listPizza();
        vm.listMember();
        vm.listPizzaRate();

    }

    angular.module('dojo').controller('PizzaController', PizzaController);

})(angular);


