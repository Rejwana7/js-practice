// ticket 120; bay bad dile remaininng amount

function calculateMoney(ticketSale){
    if( ticketSale<0 || typeof ticketSale !== 'number'){
        return 'Invalid Number'

    }
    let remainingAmount=ticketSale*120-(500+8*50);
    return remainingAmount;


}

const totalamount =calculateMoney(10);
const totalamount1 =calculateMoney(1055)
const totalamount2 =calculateMoney(-130)
const totalamount3 =calculateMoney('edf')
console.log(totalamount);
console.log(totalamount1);
console.log(totalamount2);
console.log(totalamount3)