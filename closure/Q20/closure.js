//declaring outer function
function createCounter(){
    let count =0;      //private value assigned in outer function
    return {
        //writing too many inner functions.
        // all inner functions has outer functions value's access. i.e count=0
        increment: function(){
            count++;            //here inner function reads value of outer function and add 1 value in it. and remembers its value.
            console.log(count)
        },                      //after running this function conter value is incremented and remembered by inner func. count variable value is changed.
        decrement: function(){
            count--;            // it just decrements 1 value from previous count which as used in before function. it still remembers the count.
            console.log(count)
        },                      // count variable value is changes
        doubleIncre: function(){
            count+=2;           //it does +2 in pervious count, 
            console.log(count)
        },                      // count variable value is changes
        tripleIncre: function(){
            count+=3;            // it does +3 in pervious count, 
            console.log(count)
        }                   // count variable value is changes
    }
};
let counter = createCounter()
counter.increment()// output: 1 ===> 0+1=1  given to next 
counter.increment()// output: 2  ===> 1+1=2 given to next
counter.decrement()// output: 1  ===> 2-1=1 given to next
counter.doubleIncre()// output: 3  ===> 1+2=3 given to next
counter.tripleIncre()// output: 6  ===> 3+3=6 given to next

{
    function createBankccount(){
        let balance=0;                //initally balance is 0
        let transaction = []
        return {
            deposit: function(n){
                balance = balance+n;             // adding deposit value in balance
                transaction.push(`Deposited ${balance}`)     /// for transaction history add deposited value to the transcation arr
                console.log(`Deposited ${n}`)        /// ouputing deposited value
            },                                      /// balance value is changed . 0 => deposited value
            withdraw: function(n){
                if(balance >=n){                  //checking withdraw value is less than and equal to balance
                    balance = balance-n;         //if yes withdrawing value from previous balance value i.e deposited value.
                    transaction.push(`Withdraw ${balance}`)      /// for transaction history add withdraw value to the transcation arr
                    console.log(`withdrown ${n}`)          
                }else{
                    console.log("Insufficient balance")           
                }
                
            },
            checkbal: function(){            /// for checking balance the closure always remebers its parent variables. can access it even the parent function is excuted. 
                console.log(balance)        /// still remember the parent variables value with what ever updatation happens on it.
            },
            transactionHistory : function(){
                return transaction;             /// returning transcation arr that is parent variable.
            }
        } 
    }
   const account = createBankccount();
    account.deposit(500); // Output: Deposited: 500   => 5000+500 = 5500
    account.withdraw(200); // Output: Withdrawn: 200  => 5500-200 = 5300
    account.withdraw(400); // Output: Insufficient balance
    account.checkbal()  // ouput: 4900====> 5000+500-400-200 = 4900
    account.transactionHistory().forEach(t=>console.log(t))
    console.log(account.balance); // Output: undefined


}