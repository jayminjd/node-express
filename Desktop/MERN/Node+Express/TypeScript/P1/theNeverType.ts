// 4. the never type
function generateError(message:string,code:number):never{
    throw {message:message,errorCode : code};
}
generateError("An error Occurred",500);