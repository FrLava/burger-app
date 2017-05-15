import angular from 'angular'
import RouteModule from 'angular-route'
import css from 'bootstrap/dist/css/bootstrap.css'

import {BurgersController} from './burgers.controller.js'
import {BurgerController} from './burger.controller.js'
import {InfoAppController} from './infoapp.controller.js'
import {TabsController} from './tabs.controller.js'
import {TotoFilter} from './toto.filter.js'
import {ReverseString} from './reverseString.filter.js'
import {BurgersService} from './burgers.service.js'
import {BurgerService} from './burger.service.js'
import { GameController } from './game.controller.js'

import ToppingsComponent from './toppings'
import ToppingsModule from './toppings'
import GravatarModule from './gravatar'

angular.module('app', [
    RouteModule,//'ngRoute'
    GravatarModule,
    ToppingsModule
])   // on créer un module app qui ne depend d'aucun module []

.controller('BurgersController', BurgersController)
.controller('InfoAppController', InfoAppController)
.controller('TabsController', TabsController)
.controller('GameController', GameController)
.controller('BurgerController', BurgerController)
.controller('MyController', class MyController {
    constructor () {
        this.thomas = 'tmoyse@gmail.com'
        this.nicolas = 'naholyr@gmail.com'
    }

    talk(word){
        console.log(word, ' Franc')
    }
})

.component('dtaToppings',ToppingsComponent)

.filter('toto', TotoFilter )
.filter('reverse', ReverseString)

.service('BurgersService', BurgersService)
.service('BurgerService', BurgerService)


.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true)

    $routeProvider
    .when('/', {
        controller: 'BurgersController',
        templateUrl: 'views/burgers.html',
        controllerAs: '$burger'
    })
    .when('/game', {
        controller: 'GameController',
        templateUrl: 'views/game.html',
        controllerAs: '$game'
    })
    .when('/burger/:id?', {
        controller: 'BurgerController',
        templateUrl: 'views/Burger.html',
        controllerAs: '$burger'
    })
    .otherwise({
        redirectTo: "/"
    })
    
})

// //Récupération du module app (getter)
// .run(function(){
//     console.log('RUN ANGULAR');
// });

