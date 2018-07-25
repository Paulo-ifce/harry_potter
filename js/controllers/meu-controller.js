angular.module('roteamento').controller('meuController',function($scope,$http,$location,HarryService){
    console.log(HarryService);
    $scope.alunos = HarryService.getAlunos(); 
    $scope.getDados = function(){
    $http.get('https://www.potterapi.com/v1/characters?key=$2a$10$WXowU3W/YhymnbHnobMNN.54.GWaVAg/je0tS0Gg9MW9BrZOjxy6i')
      .then(function successCallback(response) {
          console.table(response.data);
          HarryService.setAlunos(response.data);
          $scope.alunos = HarryService.getAlunos(); 
          $location.path('/sobre');
      },
      function errorCallback(response) {
          alert(response);
    });
    }
});