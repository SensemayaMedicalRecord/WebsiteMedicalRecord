function RecetaCtrl($location, $scope, $http,$rootScope) {
	
  init();
  
  $scope.guardaReceta = guardaReceta;
  $scope.cancelCreateReceta = cancelCreateReceta;
  $scope.realizatx = realizatx;
  $scope.verHistorialMedico = verHistorialMedico;
  
  function cancelCreateReceta(){
	  init();
  }
  
  function init(){
	  
	  $scope.showNotaMedica = true;
	  console.log($rootScope.paciente);
	  $scope.paciente = {};
	  $scope.idPaciente = $scope.paciente._id;
	  $scope.showHistMedica = false;
	  
	  $scope.datPaciente = {
	    "idPatient" : $rootScope.patientInfo.idPatient,
	    "idDoctor" : "167",
	    "objective" : "objectie",
	    "subjective" : "SUBJETIVO",
	    "diagnostic" : "DIAGNOSTICO",
	    "medicalTreatment" : "TRATAMIENTO",
	    "swAnalysis" : false,
	    "cdAnalysis" : "S",
	  }
	  $scope.checkboxModel = {
		         value1 : false,
		         value2 : 'YES'
		       };
  }
  

  function guardaReceta(){

    $scope.datPaciente.medico = $scope.medico;
    $scope.datPaciente.medico = "Neurlogo";
    console.log("Guarda Receta");
    console.log($scope.datPaciente);
    $http({method : "POST",
					  data: $scope.datPaciente,
					  url : $rootScope.recordUrl
				  }).success(function(resultado, status, headers, config){
							swal("Dx", "Dx added!", "info");
							init();
				  });
  }

  function verHistorialMedico(){
	  $scope.showNotaMedica = false;
  }
  
  function realizatx(){
	  $scope.showNotaMedica = true;
  }

  $scope.detalle = function(reg){
    console.log("reg");
    console.log(reg);
    $scope.detalleHis = reg;
  }


  $scope.example = {
         value: new Date(2016, 10, 11)
       };
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('RecetaCtrl', RecetaCtrl);
