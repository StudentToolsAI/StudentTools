function calculatePercentage() {

    const marksInput = document.getElementById("marks");
    const totalInput = document.getElementById("total");
    const result = document.getElementById("result");

    const marks = Number(marksInput.value);
    const total = Number(totalInput.value);

    if (marksInput.value === "" || totalInput.value === "") {
        result.innerText = "Please enter both marks and total marks.";
        return;
    }

    if (marks < 0 || total <= 0 || marks > total) {
        result.innerText = "Please enter valid marks.";
        return;
    }

    const percentage = (marks / total) * 100;

    result.innerText =
        "Your Percentage is " + percentage.toFixed(2) + "%";
}


function calculateAge() {

    const birthDateInput = document.getElementById("birthDate");
    const result = document.getElementById("ageResult");

    if (birthDateInput.value === "") {
        result.innerText = "Please enter your date of birth.";
        return;
    }

    const birthDate = new Date(birthDateInput.value);
    const today = new Date();

    if (birthDate > today) {
        result.innerText = "Date of birth cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerText =
        `Your age is ${years} years, ${months} months and ${days} days.`;
}


function calculateCGPA() {

    const inputs = [
        document.getElementById("subject1"),
        document.getElementById("subject2"),
        document.getElementById("subject3"),
        document.getElementById("subject4"),
        document.getElementById("subject5")
    ];

    const result = document.getElementById("cgpaResult");

    for (const input of inputs) {
        if (input.value === "") {
            result.innerText = "Please enter marks for all 5 subjects.";
            return;
        }

        const marks = Number(input.value);

        if (marks < 0 || marks > 100) {
            result.innerText =
                "Please enter marks between 0 and 100.";
            return;
        }
    }

    const total =
        inputs.reduce((sum, input) => sum + Number(input.value), 0);

    const percentage = total / 5;
    const cgpa = percentage / 10;

    result.innerText =
        "Your approximate CGPA is " + cgpa.toFixed(2);
}


function calculateAttendance() {

    const totalInput =
        document.getElementById("totalClasses");

    const attendedInput =
        document.getElementById("attendedClasses");

    const result =
        document.getElementById("attendanceResult");

    if (
        totalInput.value === "" ||
        attendedInput.value === ""
    ) {
        result.innerText =
            "Please enter both class values.";
        return;
    }

    const totalClasses = Number(totalInput.value);
    const attendedClasses = Number(attendedInput.value);

    if (
        totalClasses <= 0 ||
        attendedClasses < 0 ||
        attendedClasses > totalClasses
    ) {
        result.innerText =
            "Please enter valid class numbers.";
        return;
    }

    const attendance =
        (attendedClasses / totalClasses) * 100;

    let message =
        "Your Attendance: " +
        attendance.toFixed(2) +
        "%.";

    if (attendance < 75) {

        const requiredClasses = Math.ceil(
            (0.75 * totalClasses - attendedClasses) / 0.25
        );

        message +=
            " You need to attend " +
            requiredClasses +
            " more classes continuously to reach 75%.";
    } else {

        message +=
            " Great! You are maintaining 75% attendance.";
    }

    result.innerText = message;
}


function calculateGrade() {

    const marksInput =
        document.getElementById("gradeMarks");

    const totalInput =
        document.getElementById("gradeTotal");

    const result =
        document.getElementById("gradeResult");

    if (
        marksInput.value === "" ||
        totalInput.value === ""
    ) {
        result.innerText =
            "Please enter both marks and total marks.";
        return;
    }

    const marks = Number(marksInput.value);
    const total = Number(totalInput.value);

    if (
        marks < 0 ||
        total <= 0 ||
        marks > total
    ) {
        result.innerText =
            "Please enter valid marks.";
        return;
    }

    const percentage = (marks / total) * 100;

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

    result.innerText =
        "Percentage: " +
        percentage.toFixed(2) +
        "% | Grade: " +
        grade;
}
