function SearchCtrl($location, $scope, $http, $rootScope, $cookies, $cookies) {

	var search = this;
$scope.registro = false;
	$scope.search = {
		tipo : "CURP",
		parametro : "MOTA12345678912342",
		parametro2 : "",
		parametro3 : "",

	};
	$scope.result=[];
	$scope.searchClick = function(){
		console.log("click");
		console.log($scope.search);
		if($scope.search.tipo!="NOMBRE"){
		$http.get($rootScope.hostPatiences+"/patient/"+$scope.search.parametro)
	    	.success(function(data){

	    		console.log(data);
	    		$scope.result=data.resultList;
	    			if(!$scope.result.length>0){
						swal("No encontrado", "Verifique los datos o registre", "error");
						$scope.registro = true;
					}
	    	})
	    	.error(function (data) {
					swal("No encontrado", "Verifique los datos o registre", "error");
				});

		}else if ($scope.search.tipo=="NOMBRE") {
		$http.post($rootScope.hostPatiences+"/patient/",{nombre:""+$scope.search.parametro, apellidoPaterno:""+$scope.search.parametro2, apellidoMaterno:""+$scope.search.parametro3})
	    	.success(function(data){
	    		console.log(data);
	    		console.log(data.result[0]);
	    		$scope.result=data.result;
					if(!$scope.result.length>0){
						$scope.registro = true;
					}
	    	})
	    	.error(function (data) {
				swal("No encontrado", "Verifique los datos o registre", "error");
	        })
		}
	}

	$scope.getToken = function(userData){
		
		$rootScope.patient = userData;
		
		$cookies.putObject("patientSession", userData,{});
		console.log(userData);
		
		$http({
		method : "PUT",
		data: {},
		url : $rootScope.hostPatiences + "/patient/token/" + userData.idUser
		}).success(function(resultado, status, headers, config){
			
			$location.path('/doc/validatoken');
		});
		//Redirije
	}
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('SearchCtrl', SearchCtrl);
