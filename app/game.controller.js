export class GameController {
  constructor (ToppingService) {
    this.ToppingService = ToppingService
  
    this.ToppingService.getToppings()
    .then(toppings => this.toppings = toppings)

    this.ToppingService.getRandomRecipe()
    .then(recipe => {
      console.log(recipe)
    })

    console.log('game controller')
  }
  
}