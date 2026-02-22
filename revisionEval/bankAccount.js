function BankAccount (amount){
    let balance =0;
    return{
        deposit(amount){
            if(amount <0){
                return "ammount should be greater than zero"
            }
            balance += amount;
            return balance;
        },
        withdraw(amount){
            if(balance< amount){
                return "Insufficient balance"
            }
            balance -=amount
            return balance;
        },
        getBalance(){
            return balance;
        }
    }
}
const User= BankAccount();
console.log(User.deposit(2000));
console.log(User.withdraw(300));
console.log(User.getBalance());