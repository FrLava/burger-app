import template from './recipe.component.html'

class controller {

    constructor ($interval) {
        this.$interval = $interval
    }

    $onChanges (changes) {
        if (changes.toppings && changes.toppings.currentValue) {
            // on retourne le tableau (cloné) avant de l'afficher
            this.toppings = angular.copy(this.toppings).reverse();
            // nouvelle recette === nouveau compteur
            if(this.interval){
                this.cpt = 10
                this.interval = this.$interval(() => {
                    this.cpt--
                    console.log(this.cpt)
                    if (this.cpt === 0) {
                        this.$interval.cancel(this.interval)
                        console.log('perdu')
                    }
                }, 1000)

            }
            
        }
    }

}

export let RecipeComponent = {
    controller,
    template,
    bindings: {
        toppings: '<'
    }
}