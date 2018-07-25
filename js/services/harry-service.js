angular.module('roteamento').factory("HarryService",function(){
    self.alunos = {};
    var _getAlunos = function(){
      $http.get('https://www.potterapi.com/v1/characters?key=$2a$10$WXowU3W/YhymnbHnobMNN.54.GWaVAg/je0tS0Gg9MW9BrZOjxy6i')
      .then(function successCallback(response) {
          console.table(response.data);
          return response.data;
      },
      function errorCallback(response) {
          alert(response);
    });
  }
    var _setAlunos = function(lista){
        self.alunos = lista;
    };
    return {
      getAlunos:_getAlunos,
      setAlunos:_setAlunos
    };
});