function validacionCtrl($location, $scope, $rootScope, $http,$rootScope, $cookies) {

	$scope.infoPaciente={};
	$scope.validaToken= function(){
		
		console.log("Token: " + $scope.tokenU);
		console.log($rootScope.patient)
		
		if(!$rootScope.patient){
			swal("Error!", "Token error!", "error");
			$location.path('/');
		}
		
		//Solicita Token
		$http({
		method : "GET",
		url : "http://localhost:8090/history/" + $rootScope.patient.idUser + "/" + $scope.tokenU 
		}).success(function(resultado){	
			
			console.log(resultado)
			
		if(resultado.success)	{
			$rootScope.patientInfo = resultado;
			$rootScope.paciente = resultado;
			$rootScope.paciente.result = {};
			$location.path('/doc/paciente');
			
			$cookies.putObject("historySession", resultado.patience,{});
			$rootScope.patientInfo = resultado.patience;
			$rootScope.medicalRecord = resultado.medicalRecord;
			
		}else{
			swal("Token Incorrecto!", "Intentalo de nuevo!", "error");			

		}

		});
	}
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('validacionCtrl', validacionCtrl);