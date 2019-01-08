const students = [
    {name:"May",grade:99},
    {name:"Eri",grade:55},
    {name:"Elen",grade:77},
    {name:"Rit",grade:45},
    {name:"Rato",grade:89},
    {name:"More",grade:98},
    {name:"Epi",grade:76},
    {name:"Ent",grade:45},
    {name:"Ronal",grade:33},
    {name:"Bib",grade:75}
];
  
  // sort by name
  students.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  console.log(students)
