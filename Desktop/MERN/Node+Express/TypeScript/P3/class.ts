 class App
    {
        name
        constructor(name : string)
        {
            this.name = name
        }
        getName():void
        {
            console.warn(this.name);
            
        }
    }
    let a1 = new App("Hello Gujarat");
    a1.getName();