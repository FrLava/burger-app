export class UserController{
    constructor(){
        console.log('UserController');
        this.firstName='Franc';
        this.lastName='LAVAUD'
    }

    completeName(){
        return this.firstName+' '+this.lastName;
    }
    
}