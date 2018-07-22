angular.module("roteamento").factory("HarryService",function($http){
    var _getCasaHogwarts = function() {
      console.log('chamou o método casaHogwarts')
      
    }
    return {
      getCasaHogwarts:_getCasaHogwarts
    };
})