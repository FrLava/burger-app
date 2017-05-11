import {uniq} from 'lodash'
import angular from 'angular'
import uuid from 'uuid'

export class BurgerController{
    constructor(BurgerService){
        this.burger=[]
        this.burgerService=BurgerService.getBurgers()
            .then(burger => this.burger=burger)
        
        console.log(this.burgerService)
        this.newburger = this._initBurger()

        this.col='name'
        this.desc=false

        this.listToppings=[]; 
    }

    getToppingsInBurger () {
        if(!this.burger) return []
        return uniq(this.burger
        // {toppings} vaut la propriété toppings de burger
        .reduce( (acc, {toppings} ) => [...acc, ...toppings], [] ) )

    }

    sortBy (col) {
        if (this.col !== col) this.desc = false
        else this.desc = !this.desc
        this.col = col
    }

    applySort (burger) {
        if(this.col==='name') return burger['name']
        if(this.col==='topping') return burger.toppings.length
    }

    save (form) {

        if(form.$invalid) return
        
        console.log(this.newburger.name)
        if(!this.newburger.id){
            this.newburger.id=uuid()
            this.burger.push(angular.copy(this.newburger))
            
            
        }
        else{
            
            let idx = this.burger.findIndex(b => b.id === this.newburger.id)
            if(idx!==-1){
                this.burger[idx]=(angular.copy(this.newburger))
            }
        } 

        this.newburger = this._initBurger()

        form.$setUntouched()
    }

    updateBurger (burger) {
        this.newburger=burger;
       
    }

    _initBurger () {
        return {
            id: null,
            name: '',
            toppings: [],
            creator: ''
        }
  }
    
    
}