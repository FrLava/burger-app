import template from './gameover.component.html'

class controller {
    constructor ($location) {
        this.$location=$location
    }

    restart () {
        console.log('restart')
        this.$location.path('/play')
    }

}

export let GameoverComponent = {
    template,
    controller,
    bindings: {}
}