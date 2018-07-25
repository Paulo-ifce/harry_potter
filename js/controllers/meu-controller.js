angular.module('roteamento').controller('meuController',function($scope,$http,$location,HarryService){
    //$scope.alunos = HarryService.getAlunos(); 
    $scope.getDados = function(){
        console.log(HarryService);
        $scope.alunos = HarryService.getAlunos();
    };
});