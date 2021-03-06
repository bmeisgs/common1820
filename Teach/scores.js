class Student {
    constructor(name) {
        this.name = name;
        this.subjects = {};
        this.finalGrades = {};
        this.gpa = 0;
        this.reasontolive = 0
    }
    getreasontolive(yes){
        this.reasontolive = 10
    }
    addSubject(subject) {
        if (typeof this.subjects[subject]==='undefined') {
            this.subjects[subject] = [];
            this.finalGrades[subject] = 0;
        }
    }
    recalculate(subject) {
        if (typeof subject==='undefined') {
            this.gpa = 0;
            const subs = Object.keys(this.subjects);
            for(let i=0;i<subs.length;i++) {
                let av = this.recalculate(subs[i]);
                if (av>0) {
                    this.gpa = (this.gpa===0) ? av : (this.gpa+av)/2;
                }
            }
            return this.gpa;
        } else {
            if (this.subjects[subject].length===0) {
                return 0;
            }
            let subgpa = 0;
            for(let i=0;i<this.subjects[subject].length;i++) {
                subgpa = (subgpa===0) ? this.subjects[subject][i] : (this.subjects[subject][i]+subgpa)/2;
            }
            this.finalGrades[subject] = subgpa;
            return subgpa;
        }
    }
    addGrade(subject,grade) {
        this.addSubject(subject);
        this.subjects[subject].push(grade);
        this.recalculate();
    }
    finalGrade(subject) {
        this.addSubject(subject);
        return this.recalculate(subject);
    }
}

let James = new Student('James');
James.addGrade('CSHL',6);
console.log(James.gpa)
James.addGrade('Math',4);
James.addGrade('Math',2);
James.addGrade('Math',5);
James.addGrade('Business',6);
James.addGrade('Business',7);

console.log(James.subjects);
console.log(James.finalGrades);
console.log(James.gpa);

/*
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

students.sort(function(a,b) {
    return b["grade"]-a["grade"];
    if (a["name"]<b["name"]) return -1;
    if (a["name"]>b["name"]) return 1;
    return 0;
});x


console.log(students);
*/
