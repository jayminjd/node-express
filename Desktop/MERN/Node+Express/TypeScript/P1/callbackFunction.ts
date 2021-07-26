// 2. callback function
    function addAndHandle(n1:number,n2:number,cb:(num:number)=>void)
    {
        const result = n1 + n2;
        const ans = cb(result);
        console.log(ans);
        
    }

    addAndHandle(10,20,(result)=>{
        console.log(result);
        return result*2;
    });