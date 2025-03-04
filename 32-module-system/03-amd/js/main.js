requirejs(["js/first.js", "js/second.js"],
    function (a, {x, y, MyClass2}) {
        console.log("Main module");
        console.log(a.x, a.y, new a.MyClass());
        console.log("================");
        console.log(x, y, new MyClass2());
    });




