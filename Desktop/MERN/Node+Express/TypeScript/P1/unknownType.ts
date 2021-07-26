// 3. unknown type

    let userInput:any;
    let userName:string
    userInput = 5;
    userInput = "Max";
    userName = userInput;

    let userInput:unknown;
    let userName:string
    userInput = 5;
    userInput = "Max";
    if(typeof userInput === "string")
        userName = userInput;
    console.log(userName);