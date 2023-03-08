
class Bank {

    // created constructor of class Bank
    // with default paramater =0
    constructor(balance = 0, name){
        this.balance = balance
        this.name = name
    }
    
    //creating about method that will gives about
    about(){
        console.log(`Name of Holder:${this.name} and balance:${this.balance}`)
    } 

   

}


