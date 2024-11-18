
function password(obj){
    if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined ||
        obj.birthYear.toString().length !== 4){
         return 'invalid'

        }
    
    let capitalSiteName=obj.siteName[0].toUpperCase() + obj.siteName.slice(1)
    let passwordstring= capitalSiteName+ '#' + obj.name + '@' +obj.birthYear
    return passwordstring;

}


console.log(password({name:"kolimuddin",birthYear:1999,siteName:"google"}))
console.log(password({name:"rahat",birthYear:1999,siteName:"facebook"}))


console.log(password({name:"toky",birthYear:200,siteName:"facebook"}))


