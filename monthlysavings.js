

function monthlySavings(arr,livingCost){
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return "invalid input"
    }
    // calculate total income
    let totalIncome=0;
    for(let payment of arr){
        if(payment >=3000){
            //deduct tax amount
            let tax= payment*0.2
            totalIncome+=payment-tax
        }
      else{
        totalIncome+=payment
      }
       
    }
    let savings= totalIncome-livingCost;
    // if(savings >= 0){
    //     return savings
    // }
    // else{
    //     return "Earn More"
    // }
    return savings>=0? savings:"Earn More"

}


console.log( monthlySavings([1000,2000,3000],5400))
console.log( monthlySavings([900,2700,3400],10000))
console.log( monthlySavings(10000,[900,2700,3400]))