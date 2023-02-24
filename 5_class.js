// class is called syntactis sugar in ES6 
class Instructor{
    name;
    designation = 'web development Instructor';
    team = 'Programming-Hero';
    location;
    // constructor function
    constructor(name,location)
    {
        this.name = name;
        this.location = location;
    }
    createQuiz(module)
    {
        console.log(`Create quiz for moduld ${module}`);
    }
    startClass(time)
    {
        console.log(`Start class at time: ${time}`);
    }
};

const teacher1 = new Instructor("rahat", "tongi");
console.log(teacher1);
teacher1.createQuiz("25");
teacher1.startClass("8:00");