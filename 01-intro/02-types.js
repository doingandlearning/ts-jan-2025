// 7 Primitive Types
// String, Number, Boolean, undefined, null, Symbol, BigInt
// Everything else is an object:
// Object, Function, Array
{
    var location_1 = "Belfast";
    var name_1 = "Kevin";
    var age = 41;
    age = "41";
    var a = null;
    a = undefined;
}
{
    // any, unknown, void,  never
    var name_2 = "Kevin";
    name_2 = 1234;
    // implicit any
    var age = 41;
    function doSomethingWithAge(age) {
        age;
        if (typeof age === "string") {
            age;
        }
    }
    function noReturn() {
        // return 1
    }
    function example(x) {
        if (typeof x === "string") {
            return x;
        }
        else if (typeof x === "number") {
            return x;
        }
        x;
        throw new Error("Unhandled variable type");
    }
}
{
    console.log(200 /* STATUS_CODE.OK */);
}
