export class TabsController {
    constructor () {
        
        this.listOnglet=[
            {title: "Burger", template: 'burger'},
            {title: "Play", template: 'Application'}
        ]

        this.tabIndex=0
    }

    changTab (tab) {
        this.tabIndex=tab
    }

    getTemplate (index) {
        return 'views/'+this.listOnglet[index].template+'.html'
    }

    tabNav (direction) {
        if(this.tabIndex === this.listOnglet.length-1 && direction === +1){
            this.tabIndex=0
        }
        
        else if(this.tabIndex === 0 && direction === -1){
            this.tabIndex=this.listOnglet.length-1
        }

        else{
            this.tabIndex+=direction
        }
        
    }

    
}