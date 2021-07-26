type newType = "as-number" | "as-string"

function add(num1 : number | string, num2:number | string, types:newType):number
{
    if(types !== "as-number")
    {
        return +num1 + +num2;
    }    
    else
    { 
        return +num1 + +num2
    }
}
add(12,22,"as-number");
add("30","55"