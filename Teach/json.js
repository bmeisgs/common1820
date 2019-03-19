let dstruct1 = "its a string";
let dstruct2 = {
    "astring":"this is a string, once again",
    "itsabool":true,
    "itsanum":3.14,
    "ohanull":null,
    "sanarray":[1,3,"shit",null,true,"whatever"],
    "anobject":{
        "ohreally":"yes",
        "itstheend":true
    }
};

console.log("dstruct1 serialized: ",JSON.stringify(dstruct1));
console.log("let returning = ",JSON.stringify(dstruct2),';');
console.log(dstruct2);
