const checkPassword = (pass) =>{
    if(pass.length < 2){
        return false;
    }

    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let special = "~`!@#$%^&*()_+-={}[]";

    let res1 = false;
    let res2 = false;
    let res3 = false;

    for(let i=0; i<pass.length; i++){
        if(alphabets.includes(pass[i])){
            res1 = true;
        }
        if(numbers.includes(pass[i])){
            res2 = true;
        }
        if(special.includes(pass[i])){
            res3 = true;
        }
    }

    return res1 && res2 && res3 ? true : false;
}

module.exports={
    checkPassword
}