//we can also destructured an object.
interface Student {
    name: string;
   
    isEnrolled: boolean;
    course: string;
    address: {
        city: string;
        state: string;
        country: string;
    };
    grades: {
        [subject: string]: number;
    };
    greet:() => void;
}

const students: Student = {
    name: "Huma Mohsin",
    isEnrolled: true,
    course: "Generative AI",
    address: {
        city: "Karachi",
        state: "Sindh",
        country: "Pakistan"
    },
    grades: {
        "Mathematics": 90,
        "Science": 85,
        "Literature": 88
    },
    greet() {
        return(`Welcome To Destructuring An Object`);
    }
};
//Traditional way to access property from an object as:
console.log(students.grades);
console.log(students.address);
console.log("\n")
//Destructuring An Object.
//syntax: let {}=objectName

let { name: stdName, isEnrolled, course: Course_studied, address, grades, greet } = students;
console.log(`${stdName} is Enrolled :` , isEnrolled);
console.log(`Governor IT Initiative offers "${Course_studied}" course in "${address.city}"`);
console.log("Greetings:", greet())
//Author-Huma Mohsin