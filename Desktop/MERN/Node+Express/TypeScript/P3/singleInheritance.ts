class Parent{
        name : string;
        setName(name:string) : void
        {
            this.name = name;
        }
    }
    class Child extends Parent
    {
        getName() : string
        {
            return this.name;
        }
    }

    let o1 = new Child();
    o1.setName("Inheritance classes")
    console.warn(o1.getName());