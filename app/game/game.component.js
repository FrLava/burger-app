import './game.component.css'
import template from './game.component.html'

class controller {
    constructor (ToppingService, $location) {
        this.ToppingService = ToppingService
        this.$location=$location
        this.score=0
    }

    $onInit () {
        this.restart()
        this.ToppingService.getToppings()
        .then(toppings => this.toppings = toppings)
    }

    selectTopping (topping) {
        this.burger = [...this.burger, topping.name]
        switch (this.ToppingService.checkRecipe(this.burger, this.recipe)) {
            case 'VALID' :
                this.restart()
                this.score=++this.score
                break
            case 'INVALID' :
                this.gameover()
                this.score=0
                break
        }
    }

    restart () {
        this.burger = []
        this.recipe = []
        this.running = true
        this.ToppingService.getRandomRecipe()
        .then(recipe => this.recipe = recipe)
    }

    gameover () {
        this.$location.path('/')
    }
    
}

export let GameComponent = {
    template,
    controller,
    bindings: {}
}