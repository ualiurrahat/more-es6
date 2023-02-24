// super or parent class
class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`Thank you ${this.name} for your feedback`);
    }
}

class Instructor extends TeamMember {

    designation = 'web course Instructor';
    team = 'Instructor Assemble';

    // constructor function
    constructor(name, location) {
        // taking value from super or parent class
        super(name, location);
    }
    createQuiz(module) {
        console.log(`Create quiz for moduld ${module}`);
    }
    startClass(time) {
        console.log(`Start class at time: ${time}`);
    }
};
class Developer extends TeamMember {

    designation = 'web developer';
    team = 'Web Developer Heroes';
    tech;
    // constructor function
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developModule(module)
    {
        console.log(`please develop the module ${module}`);
    }

};
class JobPlaceMent extends TeamMember {

    designation = 'web development Instructor';
    team = 'Job Placement Commandos';
    region;
    // constructor function
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    helpStudent(module) {
        console.log(`Please help student in the module: ${module}`);
    }
    takeResume(name) {
        console.log(`Please take the resume of student: ${name}`);
    }
};


// creating objects
const alia = new Developer('alia bhatt', 'india', 'react developer');
console.log(alia);
alia.developModule(25);

const minul = new Instructor("minul hasan", "bangladesh");
console.log(minul);
minul.createQuiz("12");
minul.startClass("8:00");
