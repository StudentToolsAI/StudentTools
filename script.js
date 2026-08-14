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
        s1 === 0 ||
        s2 === 0 ||
        s3 === 0 ||
        s4 === 0 ||
        s5 === 0
    ) {
        document.getElementById("cgpaResult").innerText =
            "Please enter all subject marks.";
        return;
    }

    let percentage =
        (s1 + s2 + s3 + s4 + s5) / 5;

    let cgpa = percentage / 9.5;

    document.getElementById("cgpaResult").innerText =
        "Your CGPA is " + cgpa.toFixed(2);
}