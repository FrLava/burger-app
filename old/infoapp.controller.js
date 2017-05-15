export class InfoAppController{
    constructor(){
    
        this.name='Burger-app';
        this.version='1.0.0';

        this.show=false;

        // this.users = [
        //     {name: 'jhon', email:'boqsci@qosuh'},
        //     {name: 'dfb', email:'bofdqvsci@qosdh'},
        //     {name: 'dfgh', email:'jhvi@qxwvuh'},
        //     {name: 'Franc', email:'franc@kjlm'},
        //     {name: 'jlkn', email:'bzcdci@qsdsuh'}
        // ]
    }
    showVersion(){
        
         console.log(this.version);

    }

    toggleVersion(){
        if( this.show===true ? this.show=false : this.show=true);
    }
}