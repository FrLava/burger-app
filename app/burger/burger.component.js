import template from './burger.component.html'

class controller {

    $onChanges (changes) {
        console.log('$onChanges', this.toppings)
        if (changes.toppings && changes.toppings.currentValue) {
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

