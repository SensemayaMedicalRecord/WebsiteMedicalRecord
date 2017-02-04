function LonginCtrl($location, $http, $rootScope, $cookies) {

	var loginVm = this;

	loginVm.postObject = {
			user : "MOTA12345678912342",
			password : "123"
	};
	
	loginVm.initView = initView; 
	loginVm.loginClick = loginClick;
	loginVm.redirectHome = redirectHome; 
	
	function initView(){}
	
	function redirectHome(){
		$location.path("/")
	}
	
	function loginClick(){
		console.log(loginVm.postObject)
		$http.post(
    		$rootScope.loginHost+"/login/",
    		loginVm.postObject
    		)
    	.success(loginSuccess)
    	.error(errorPetition)
	}
	
	
	function loginSuccess(data){
		 $rootScope.userSession = data;				
		   var rol=data.rolUser;
		   
		   if(!data.success){return swal("Usuario o Contraseña Incorrecta!", "Intentalo de nuevo...!", "error");}
	       if(data.patientProfile){
	    	   
	    	   $location.path('/dashboards/1');
	    	   
	       }else if(data.physicianProfile){
	    	   
	    	    $cookies.putObject("physicianSession", data.physicianProfile,{})
	    	   	$rootScope.physicianProfileSession = data.physicianProfile;
	       		$location.path('/doc/dash');
	       		
	       }
	}
	
	function errorPetition(data){
		
			if(data.status === 400){
				var message = "Ocurrio un error con la informacion enviada";
				swal(message, "Intentalo de nuevo...!", "error");
			}else if(data.status === 500){
				var message = "Ocurrio un error con el servidor; intente mas tarde";
				swal(message, "Error", "error");
			}
			
	}

}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('LonginCtrl', LonginCtrl);
