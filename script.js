personAccount = {

    firstName : "Korhan" ,
    lastName : "Tokgöz" , 
    incomes : [3500, 2500, 1250],
    expenses : [500, 750, 300],
    
    totalIncome : function () {
        return this.incomes.reduce((a,b) => a+b, 0)
    },

    totalExpense : function () {
        return this.expenses.reduce((a,b) => a+b, 0)
    },

    addIncome : function (params) {
       return this.incomes.push(params)
        
    },

    addExpenses : function (params) {
       return this.expenses.push(params)
    },

    accountInfo : function () {
        return this.totalIncome() - this.totalExpense()
    }




}


console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())

personAccount.addIncome(1000)
personAccount.addExpenses(500)


console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountInfo())
console.log( ` He has total income : ${personAccount.totalIncome()} $”`)
console.log( ` He has total expense : ${personAccount.totalExpense()} $”`)
console.log( ` ${personAccount.firstName} has total ${personAccount.accountInfo()} profit today”`)
