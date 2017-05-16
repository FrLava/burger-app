import template from './recipe.component.html'

class controller {

    constructor ($timeout) {
        this.$timeout = $timeout
        //this.flag = false
    }

    $onChanges (changes) {
        if (changes.toppings && changes.toppings.currentValue) {
            // on retourne le tableau (cloné) avant de l'afficher
            this.toppings = angular.copy(this.toppings).reverse();
            // reset timer
            //this.flag = !this.flag
            this.time = { value: 15 } 
        }
    }

    end () {
        this.onTimeout()
        console.log('end')
    }

    start (remain) {
        console.log(remain)
    }

}

export let RecipeComponent = {
    controller,
    template,
    bindings: {
        toppings: '<',
        onTimeout: '&',
        time: '<'
    }
}