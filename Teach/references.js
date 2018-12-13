let ref1 = "It's a string";
let ref2 = {"what":"it is an object"};
let ref3 = {"what":"me, a simple object"};

ref2.pointsTo = ref3;
ref3.pointsTo = ref2;

ref3.pointsTo.pointsTo.pointsTo.pointsTo.pointsTo.pointsTo.pointsTo.pointsTo.what = "your brain is now broken";

console.log("ref2.pointsTo:",ref2.pointsTo);
console.log("ref3.pointsTo:",ref3.pointsTo);


console.log("ref3:",ref3);

console.log("ref1:",ref1);
console.log("ref2:",ref2);

function something(aString,anObject) {
    aString = "now it's another string!";
    anObject = {"what":"it is a slightly different object!"};
    //anObject.what = "it is a slightly different object!";
    console.log("* ref1:",aString);
    console.log("* ref2:",anObject);
}

something(ref1,ref2);

console.log("ref1:",ref1);
console.log("ref2:",ref2);
