//  1. function types
    function add(n1:number,n2:number):number
    {
        return n1+n2;
    }
    function printResult(num : number):undefined
    {
        console.log("Result :" + num);
        return;
    }
    printResult(add(51,12));

    let combineValues : (a:number,b:number)=>number;
    combineValues = add;
    //combineValues = printResult
   // combineValues = 5;

    console.log(combineValues(8,8));
    console.log("45");


    let nothing : undefined;
    nothing;


    
