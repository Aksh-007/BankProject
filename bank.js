
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
    withdraw(amount){
        if (amount > this.balance) {
            console.log(`Low Balance`)
            alert(`Low balance in account`)
        }else if(amount < 99){
            console.log(`Only more than 100 is withdraw `)
            alert(`Only more than 100 is withdraw `)
        }
        else{
             this.balance -= amount
            console.log(`Amount withdraw is ${amount} and balance is ${this.balance}`)
        }
    }

    deposit(amount){
        if (amount < 99) {
            console.log(`Only more than 100 is depositied `)
        }else{
            this.balance += amount
            console.log(`Amount ${amount} is depositied and current balance is ${this.balance}`)
        }

    }

    checkBalance(){
        console.log(`${this.name} has Balance of: ${this.balance}`)
    }
	
}
	
const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const balance = document.getElementById('balance');



// creaing customer

// let akshay = new Bank(1000,'akshay')
// akshay.about();

// akshay.withdraw(100)
// akshay.deposit(500)
// akshay.checkBalance();


// let pratik = new Bank(5000, 'pratik')
// pratik.withdraw(1000)
// pratik.deposit(100)
// pratik.checkBalance();

