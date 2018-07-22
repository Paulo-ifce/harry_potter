/**
 * Arquivo para controlar a aplicação 
 * usuario entra com o nome e a aplicação
 * basicamente da boas vindas e mostra a 
 * casa do usuario
 */
/**
 * Projeto utilizando Angular JS
 * @author Paulo Higor Tavares Freire
 */
angular.module('roteamento',['ngRoute'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    $routeProvider
    .when('/',{
        templateUrl:'templates/home.html',
        controller:'homeController'
    })
    .when('/casa/:casaSelecionada',{
        templateUrl:'templates/casa.html',
        controller:'casaController'
    })
    .otherwise({
        redirectTo:'/',
        templateUrl:'templates/home.html',
        controller: 'homeController'
    });
    $locationProvider.html5Mode(true);
}])
.controller('homeController',function($scope,$location){
    $scope.foto = {
        titulo:'Harry Potter',
        url:'img/harrypotter.jpg'
    };
    $scope.goHome = function(){
        $location.path('/');
    };
})
.controller('casaController',function($scope, $http,$location,$routeParams){
    $scope.getCasa = function(){
        $http.get('https://www.potterapi.com/v1/sortingHat')
        .then(function successCallback(response) {
            $location.path("casa/"+response.data); 
        },
        function errorCallback(response) {
            alert(response);
        });
    };
    $scope.casa = $routeParams.casaSelecionada;
});