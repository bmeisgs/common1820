let ref2 = {"what":"it is an object","num":3.14,"boo":false,"obby":{"what":"another object in an object","nobby":false}};
let ref3 = {"what":"me, a simple object"};

ref2.pointsTo = ref3;
ref3.pointsTo = ref2;

function trace_object(obj) {
    let keys = 3;
    keys = Object.keys(obj);
    for(let i=0;i<keys.length;i++) {
        if (typeof obj[keys[i]]==='object') {
            console.log("key: ",keys[i],"value: an object, descending...");
            trace_object(obj[keys[i]]);
        } else {
            console.log("key: ",keys[i],"value: ",obj[keys[i]]);
        }
    }
}

console.log(ref2);
trace_object(ref2);
