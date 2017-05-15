import './game.component.css'
import template from './game.component.html'

class controller {
    constructor (ToppingService) {
        this.ToppingService = ToppingService
        this.burger = []
    }

    $onInit () {
        this.ToppingService.getToppings()
        .then(toppings => this.toppings = toppings)

        this.ToppingService.getRandomRecipe()
        .then(recipe => this.recipe = recipe)
    }

    selectTopping (topping) {
        this.burger = [...this.burger, topping.name]
        const check = this.ToppingService.checkRecipe(this.burger, this.recipe)
        if (check === 'VALID') {
            this.burger = []
            this.recipe = []
            this.ToppingService.getRandomRecipe()
            .then(recipe => this.recipe = recipe)
        }
    }
}

export let GameComponent = {
    template,
    controller,
    bindings: {}
}