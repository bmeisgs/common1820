console.log('global scope');

aaa = "This should be global scope, variable, overwritable";
let aab = "This should also be global scope, overwriteable";
const aac = "This is a constant in global scope";

const obj = {"info":"this is an object","anotherprop":"another property"};

obj.info = "i am a bloodthirsty piranha";
obj = {"info":"this is another object","anotherprop":"another property"};

console.log("obj is:",obj);

function something() {
    console.log("local scope");
    aaa = "Now that's something";
    let aab = "Now that's local, baby";
    const aac = "A local constant";
    console.log("/ the global variable:",aaa);
    console.log("/ the local variable:",aab);
    console.log("/ the local constant:",aac);
}

console.log("/ the global variable:",aaa);
console.log("/ the local variable:",aab);
console.log("/ the local constant:",aac);
something();
console.log("once again, back to global scope");
console.log("/ the global variable:",aaa);
console.log("/ the local variable:",aab);
console.log("/ the local constant:",aac);
