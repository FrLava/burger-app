import template from './burger.component.html'

class controller {

    $onChanges (changes) {
        if (changes.toppings && changes.toppings.currentValue) {
            // on retourne le tableau (cloné) avant de l'afficher
            this.toppings = angular.copy(this.toppings).reverse();
        }
    }

}

export let BurgerComponent = {
    controller,
    template,
    bindings: {
        toppings: '<'
    }
}