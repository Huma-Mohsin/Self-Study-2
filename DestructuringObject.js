var students = {
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
    greet: function () {
        return ("Welcome To Destructuring An Object");
    }
};
//Traditional way to access property from an object as:
console.log(students.grades);
console.log(students.address);
console.log("\n");
//Destructuring An Object.
//syntax: let {}=objectName
var stdName = students.name, isEnrolled = students.isEnrolled, Course_studied = students.course, address = students.address, grades = students.grades, greet = students.greet;
console.log("".concat(stdName, " is Enrolled :"), isEnrolled);
console.log("Governor IT Initiative offers \"".concat(Course_studied, "\" course in \"").concat(address.city, "\""));
console.log("Greetings:", greet());
//Author-Huma Mohsin
