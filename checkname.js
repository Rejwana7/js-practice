// last letter a,y,i,e,o,u,w hole good name,na hoy bad name

// function checkName(name){
//     // let lastLetter=name.length-1;
//     if(typeof name !== 'string'){
//         return 'invalid Text';
//     }
//     let lastLetter=name.slice(-1).toLowerCase();
//     // console.log(lastLetter);
//     let result = false; //bad name
//     let checkArray=['a','y','i','e','o','u','w'];
//     for(let char of checkArray){
//         // console.log(char);
//         if( char === lastLetter){
//             result=true;
//         }
//     }
//     return result?'Good Name' : 'Bad Name';


// }

// console.log(checkName('Salman'))
// console.log(checkName('RAFEE'))
// console.log(checkName( 199))
// console.log(checkName(['Rashed']))


function checkName(name){
    // let lastLetter=name.length-1;
    if(typeof name !== 'string'){
        return 'invalid Text';
    }
    let lastLetter=name.slice(-1).toLowerCase();
    // console.log(lastLetter);
    // let result = false; //bad name
     let checkArray=['a','y','i','e','o','u','w'];
    // for(let char of checkArray){
    //     // console.log(char);
    //     if( char === lastLetter){
    //         result=true;
    //     }
    // }
    let result=checkArray.includes(lastLetter);
    // console.log(result);
    return result ? 'Good Name' : 'Bad Name';


}

console.log(checkName('Salman'))
console.log(checkName('RAFEE'))
console.log(checkName( 199))
console.log(checkName(['Rashed']))