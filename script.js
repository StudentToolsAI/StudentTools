function calculatePercentage() {

    let marks = document.getElementById("marks").value;
    let total = document.getElementById("total").value;

    if (marks === "" || total === "") {
        document.getElementById("result").innerText =
            "Please enter both values.";
        return;
    }

    let percentage = (marks / total) * 100;

    document.getElementById("result").innerText =
        "Your Percentage is " + percentage.toFixed(2) + "%";
}
function calculateAge() {

    let birthDate = document.getElementById("birthDate").value;

    if (birthDate === "") {
        document.getElementById("ageResult").innerText =
            "Please enter your date of birth.";
        return;
    }

    let birth = new Date(birthDate);
    let today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    let monthDifference =
        today.getMonth() - birth.getMonth();

    if (
        monthDifference < 0 ||
        (
            monthDifference === 0 &&
            today.getDate() < birth.getDate()
        )
    ) {
        age--;
    }

    document.getElementById("ageResult").innerText =
        "Your age is " + age + " years.";
}
function calculateCGPA() {

    let s1 = Number(document.getElementById("subject1").value);
    let s2 = Number(document.getElementById("subject2").value);
    let s3 = Number(document.getElementById("subject3").value);
    let s4 = Number(document.getElementById("subject4").value);
    let s5 = Number(document.getElementById("subject5").value);

    if (
        s1 < 0 || s1 > 100 ||
        s2 < 0 || s2 > 100 ||
        s3 < 0 || s3 > 100 ||
        s4 < 0 || s4 > 100 ||
        s5 < 0 || s5 > 100
    ) {
        document.getElementById("cgpaResult").innerText =
            "Please enter marks between 0 and 100.";
        return;
    }

    let percentage =
        (s1 + s2 + s3 + s4 + s5) / 5;

    let cgpa = percentage / 10;

    document.getElementById("cgpaResult").innerText =
        "Your approximate CGPA is " + cgpa.toFixed(2);
}
function calculateAttendance() {

    let totalClasses = Number(document.getElementById("totalClasses").value);
    let attendedClasses = Number(document.getElementById("attendedClasses").value);

    if (totalClasses <= 0 || attendedClasses < 0) {
        document.getElementById("attendanceResult").innerText =
            "Please enter valid class numbers.";
        return;
    }

    if (attendedClasses > totalClasses) {
        document.getElementById("attendanceResult").innerText =
            "Attended classes cannot be greater than total classes.";
        return;
    }

    let attendance = (attendedClasses / totalClasses) * 100;

    let result = "Your Attendance is " + attendance.toFixed(2) + "%.";

    if (attendance < 75) {

        let requiredClasses =
            Math.ceil((0.75 * totalClasses - attendedClasses) / 0.25);

        result +=
            " You need to attend " +
            requiredClasses +
            " more classes continuously to reach 75%.";

    } else {

        result +=
            " Great! You are maintaining 75% attendance.";
    }

    document.getElementById("attendanceResult").innerText = result;
}
function calculateGrade() {

    let marks = Number(document.getElementById("gradeMarks").value);
    let total = Number(document.getElementById("gradeTotal").value);

    if (marks < 0 || total <= 0 || marks > total) {
        document.getElementById("gradeResult").innerText =
            "Please enter valid marks.";
        return;
    }

    let percentage = (marks / total) * 100;
    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B+";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else if (percentage >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("gradeResult").innerText =
        "Percentage: " + percentage.toFixed(2) + "% | Grade: " + grade;
}
