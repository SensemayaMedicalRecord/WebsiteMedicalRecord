function RegisterCtrl($location, $scope, $http,$rootScope) {

	var register = this;

	$scope.register = {
		firstName : "",
		lastName : "",
		surName : "",
		dob: "",
		sex: "",
		curp : "",
		rfc: "",
		estadoC : "",
		nacionalidad : "",
		lugarNac : "",
		calle : "",
		numEx : "",
		numIn : "",
		colonia : "",
		cp : "",
		pais : "",
		estado : "",
		ocupacion : "",
		tel1 : "",
		tel2 : "",
		phoneNumber : "",
		religion : "",
		email : "",
		bloodGroup : "",
		coment : "",
	};	

	$scope.registerClick = function(){
		 $scope.register.cdLogin="P";
		 $scope.register.cdUser="P";
		$http({
                      method : "POST",
                      data: $scope.register,
                      url : "http://localhost:8191/singup"
                  }).success(function(resultado, status, headers, config){
                            swal("Registro guardado", "El usuario se dio de alta con exito", "success");				
                          $location.path('/');
                  }).error(function(data){
                	  if(data.status == 400){
                		  swal("Error", "Valide los datos capturados.", "error");
                	  }else{
                		  swal("Error", "Ocurrio un error inesperado.", "error");
                	  }
                  })
	}
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('RegisterCtrl', RegisterCtrl);