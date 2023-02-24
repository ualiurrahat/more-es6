//topics: access value, optional chaining for nested object
const [a, b, ...r] = [18, 1, 8, 10, 25]; // r is an array containing remaining elememts
console.log(a, b, r, typeof a, typeof b, typeof r);




// optional chaining
const myself = {
    name: "rahat",
    age: 22,
    education: {
        ssc: 2014,
        hsc: 2016,
        varsity: 2018,
        degree: ["jsc", "ssc", "hsc", "bsmrstu curse"],
    },
    skills: {
        first: "eee",
        second: {
            one: "web development",
            two: "problem solving",
            three: "dsa",
        }
    }
};
console.log(myself.education.degree[3]);
const bestSkill = myself.skills.second.three;
console.log(bestSkill);
// optional chaining: if undefined value is found, do not go forward
const secondSkill = myself.skills.secon?.two;
// shows undefined. since second is undefined, it is not going forward.
console.log(secondSkill);