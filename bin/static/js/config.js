/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/home");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });
/*
 _   _  ___  __  __ _____
| | | |/ _ \|  \/  | ____|
| |_| | | | | |\/| |  _|
|  _  | |_| | |  | | |___
|_| |_|\___/|_|  |_|_____|
 */
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/landing.html",
            data: { pageTitle: 'Home', specialClass: 'landing-page' }
        })
/*
 _     ___   ____ ___ _   _
| |   / _ \ / ___|_ _| \ | |
| |  | | | | |  _ | ||  \| |
| |__| |_| | |_| || || |\  |
|_____\___/ \____|___|_| \_|
 
 */                        
        .state('login', {
            url: "/login",
            templateUrl: "views/login_two_columns.html",
            data: { pageTitle: 'Login', specialClass: 'gray-bg' }
        })
        
/*
 ____ ___ _   _  ____ _   _ ____
/ ___|_ _| \ | |/ ___| | | |  _ \
\___ \| ||  \| | |  _| | | | |_) |
 ___) | || |\  | |_| | |_| |  __/
|____/___|_| \_|\____|\___/|_|


 */        
        .state('singup', {
            url: "/singup",
            templateUrl: "views/registro-medico/registro-medico.html",
            data: { pageTitle: 'Registro Medico', specialClass: 'gray-bg' }
        })

/*
  ____ ___  _   _ ____  _   _ _   _____  _
 / ___/ _ \| \ | / ___|| | | | | |_   _|/ \
| |  | | | |  \| \___ \| | | | |   | | / _ \
| |__| |_| | |\  |___) | |_| | |___| |/ ___ \
 \____\___/|_| \_|____/ \___/|_____|_/_/   \_\
 
 */
        
        .state('consulta', {
            abstract: true,
            url: "/consulta",
            templateUrl: "views/common/content.html",
        })
        .state('consulta.nueva',{
        	url: "/nueva",
        	templateUrl: "views/consulta/consulta-nueva.html",
            data: { pageTitle: 'Nueva Consulta'}
        })        
        .state('consulta.antecedentes',{
        	url: "/antecedentes",
        	templateUrl: "views/consulta/antecedentes.html",
        	data: { pageTitle: 'Antecedentes'}
        })

/*
  ____    _    _     _____ _   _ ____    _    ____  ___ ___
 / ___|  / \  | |   | ____| \ | |  _ \  / \  |  _ \|_ _/ _ \
| |     / _ \ | |   |  _| |  \| | | | |/ _ \ | |_) || | | | |
| |___ / ___ \| |___| |___| |\  | |_| / ___ \|  _ < | | |_| |
 \____/_/   \_\_____|_____|_| \_|____/_/   \_\_| \_\___\___/
*/		
        .state('calendario', {
            abstract: true,
            url: "/calendario",
            templateUrl: "views/common/content.html",
        })
        .state('calendario.main',{
        	url: "/main",
        	templateUrl: "views/calendario/calendario-main.html",
            data: { pageTitle: 'Nueva Consulta'}
        })        

/* 
 ____   _    ____ ___ _____ _   _ _____ _____ ____
|  _ \ / \  / ___|_ _| ____| \ | |_   _| ____/ ___|
| |_) / _ \| |    | ||  _| |  \| | | | |  _| \___ \
|  __/ ___ \ |___ | || |___| |\  | | | | |___ ___) |
|_| /_/   \_\____|___|_____|_| \_| |_| |_____|____/
 */        
        .state('pacientes', {
            abstract: true,
            url: "/pacientes",
            templateUrl: "views/common/content.html",
        })
        .state('pacientes.busqueda',{
        	url: "/busqueda",
        	templateUrl: "views/patient/busqueda.html",
            data: { pageTitle: 'Busqueda'}
        })
        .state('pacientes.nuevo',{
        	url: "/nuevo",
        	templateUrl: "views/patient/nuevo-paciente.html",
            data: { pageTitle: 'Busqueda'}
        })

        
        .state('historic', {
            url: "/historic",
            templateUrl: "views/patient/historic.html",
            data: { pageTitle: 'Historial' },
        })
        .state('expedient', {
            url: "/expedient",
            templateUrl: "views/patient/expedient.html",
            data: { pageTitle: 'Expediente' },
        })
        /**
            Views Doctor
        */
        .state('doc', {
            abstract: true,
            url: "/doc",
            templateUrl: "views/common/content.html",
        })
        .state('doc.dash', {
            url: "/dash",
            templateUrl: "views/search.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {

                            serie: true,
                            name: 'angular-flot',
                            files: [ 'js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
                        },
                        {
                            name: 'angles',
                            files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
                        }
                    ]);
                }
            }
        })
        .state('doc.register', {
            url: "/register",
            templateUrl: "views/register.html",
        })
        .state('doc.search', {
            url: "/search",
            templateUrl: "views/search.html",
        })
        .state('doc.validatoken', {
            url: "/validatoken",
            templateUrl: "views/validatoken.html",
        })

        .state('doc.paciente', {
            url: "/paciente",
            templateUrl: "views/notasmedicas/expediente.html",
        })
        .state('doc.receta', {
            url: "/receta",
            templateUrl: "views/receta/receta.html",
        })
        .state('access', {
            url: "/accessece",
            templateUrl: "views/doctor/access.html",
            data: { pageTitle: 'Acceso a ECE' },
        })
        .state('prescribe', {
            url: "/prescribe",
            templateUrl: "views/doctor/prescrib.html",
            data: { pageTitle: 'Receta' },
        })

}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state,$cookies,$cookieStore) {
    	$rootScope.patient = {
    			firstName : "Juan"
    	}
    	if($cookies.getObject("physicianSession")){
    		$rootScope.physicianSession = $cookies.getObject("physicianSession")
    		console.log("physicianSession ok!")
    		console.log($rootScope.physicianSession)
    	}else{
    		console.log("physicianSession NO!")
    	}
    	
    	if($cookies.getObject("patientSession")){
    		$rootScope.patient = $cookies.getObject("patientSession");
    		console.log("patient session setted::")
    		console.log($rootScope.patient)
    	}else{
    		console.log("NO patient session setted")
    	}

    	if($cookies.getObject("historySession")){
    		$rootScope.patientInfo = $cookies.getObject("historySession");
    		console.log("historySession setted::")
    	}else{
    		console.log("NO historySession setted")
    	}
    	
    	
        $rootScope.$state = $state;
        $rootScope.host = "http://localhost:8090";
        $rootScope.hostPatiences = "http://localhost:8090";
        $rootScope.loginHost = "http://localhost:8191";
        $rootScope.recordUrl = "http://localhost:8090/medicalRecord";
    });
