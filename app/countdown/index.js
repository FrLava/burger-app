import angular from 'angular'
import { CountdownComponent } from './countdown.component'

export default angular.module('countdown', [])
.component('dtaCountdown', CountdownComponent)
.name