function InfoPCtrl($location, $scope, $http, $rootScope) {

		$scope.result = [];
		var p = {}
		console.log(p);
		$scope.d1= $rootScope.patient.firstName;
		if(p.genero==="M"){
			p.genero="Masculino";
		}else{
			p.genero="Femenino";			
		}
		$scope.d2=  "";
		$scope.d3= "Tipo de sangre: ";
		$scope.realizatx = function(){
		
			console.log("realizartx...");
			console.log($rootScope.paciente);
		
			$location.path('/doc/receta');
	}
	//console.log($rootScope.paciente.result.apellidoPaterno);
	$scope.histActivo=false;
	$scope.verHistorialMedico = function(){
		$scope.histActivo=true;

	}
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('InfoPCtrl', InfoPCtrl);
