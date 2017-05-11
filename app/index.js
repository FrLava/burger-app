import angular from 'angular'
import css from 'bootstrap/dist/css/bootstrap.css'
import {BurgerController} from './burger.controller.js'
import {InfoAppController} from './infoapp.controller.js'
import {TabsController} from './tabs.controller.js'
import {TotoFilter} from './toto.filter.js'
import {ReverseString} from './reverseString.filter.js'
import {BurgerService} from './burger.service.js'

angular.module('app', [])   // on créer un module app qui ne depend d'aucun module []

.controller('BurgerController', BurgerController)
.controller('InfoAppController', InfoAppController)
.controller('TabsController', TabsController)
.filter('toto', TotoFilter )
.filter('reverse', ReverseString)
.service('BurgerService', BurgerService)


// .config(function(){
//     console.log('Config Angular');
// })

// //Récupération du module app (getter)
// .run(function(){
//     console.log('RUN ANGULAR');
// });

