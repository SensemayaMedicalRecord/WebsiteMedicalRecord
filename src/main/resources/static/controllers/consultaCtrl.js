(function(){
	
	function consultaCtrl($location, $scope, $rootScope, $http,$rootScope, $cookies){
		
		var consulta = this;
		consulta.antecedentes = antecedentes;
		consulta.consultaShow = consultaShow;
		
		consulta.nombre = "Paulino";
		
		function antecedentes(){
			$location.path("consulta/antecedentes")
		}
		
		function consultaShow(){
			$location.path("consulta/nueva")
		}
		
	}
	
	angular.module('inspinia')
		.controller('consultaCtrl', consultaCtrl);
	
})();