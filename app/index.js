import angular from 'angular'
import css from 'bootstrap/dist/css/bootstrap.css'
import {UserController} from './user.controller.js'
import {InfoAppController} from './infoapp.controller.js'
import {TabsController} from './tabs.controller.js'
import {TotoFilter} from './toto.filter.js'
import {ReverseString} from './reverseString.filter.js'

angular.module('app', [])   // on créer un module app qui ne depend d'aucun module []

.controller('UserController', UserController)
.controller('InfoAppController', InfoAppController)
.controller('TabsController', TabsController)
.filter('toto', TotoFilter )
.filter('reverse', ReverseString)


// .config(function(){
//     console.log('Config Angular');
// })

// //Récupération du module app (getter)
// .run(function(){
//     console.log('RUN ANGULAR');
// });

