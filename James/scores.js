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

students.sort(function(name, grade) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    return 0;
  });

    console.log(students)