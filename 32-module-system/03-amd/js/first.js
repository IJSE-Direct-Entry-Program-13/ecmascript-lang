define([], function(){
    console.log("Beginning of the first.js");

    let x = 10;
    const y = 20;

    class MyClass {
        static {
            console.log("My Class");
        }
    }

    console.log("Ending of the first.js");

    return  {
        x,y, MyClass
    }
});

