angular.module('roteamento').factory("HarryService",function(){
    self.alunos = {};
    var _getAlunos = function(){
      return self.alunos;
  }
    var _setAlunos = function(lista){
        self.alunos = lista;
    };
    return {
      getAlunos:_getAlunos,
      setAlunos:_setAlunos
    };
});