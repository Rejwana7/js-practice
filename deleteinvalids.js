

function deleteInvalid(array){
    
    let numberArray=[];
    if(!Array.isArray(array)){
        return "Invalid Array"


    }
    for(let arr of array){
        // console.log(arr);
        // console.log(typeof arr);
        // isnan false hole 
        if(typeof arr === 'number' && isNaN(arr) === false){
            // console.log(arr);
            numberArray.push(arr)
        }
    }
    return  numberArray;

}


console.log(deleteInvalid([1,null,undefined,18,-19,NaN,"12",[1,2]]))
console.log(deleteInvalid(["1",{num:2},NaN]))
console.log(deleteInvalid({num : [1,2,3]}))


// console.log(typeof[1,2,3])