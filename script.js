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
// Length Converter

const lengthUnits = {
    nm: 1e-9,
    um: 1e-6,
    mm: 1e-3,
    cm: 1e-2,
    dm: 1e-1,
    m: 1,
    dam: 10,
    hm: 100,
    km: 1000,

    mil: 0.0000254,
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
    rod: 5.0292,
    chain: 20.1168,
    furlong: 201.168,
    mi: 1609.344,

    fathom: 1.8288,
    nmi: 1852,

    au: 149597870700,
    ly: 9460730472580800,
    pc: 30856775814913670
};


function convertLength() {

    const valueInput =
        document.getElementById("lengthValue");

    const fromUnit =
        document.getElementById("lengthFrom").value;

    const toUnit =
        document.getElementById("lengthTo").value;

    const result =
        document.getElementById("lengthResult");

    if (valueInput.value === "") {
        result.innerText =
            "Please enter a value.";
        return;
    }

    const value = Number(valueInput.value);

    if (!Number.isFinite(value)) {
        result.innerText =
            "Please enter a valid number.";
        return;
    }

    const valueInMeters =
        value * lengthUnits[fromUnit];

    const convertedValue =
        valueInMeters / lengthUnits[toUnit];

    result.innerText =
        "Result: " + formatLengthResult(convertedValue);
}


function formatLengthResult(value) {

    if (value === 0) {
        return "0";
    }

    if (
        Math.abs(value) >= 0.000001 &&
        Math.abs(value) < 1000000000
    ) {
        return value.toLocaleString(
            undefined,
            {
                maximumFractionDigits: 10
            }
        );
    }

    return value.toExponential(6);
}


function swapLengthUnits() {

    const fromSelect =
        document.getElementById("lengthFrom");

    const toSelect =
        document.getElementById("lengthTo");

    const oldFrom = fromSelect.value;

    fromSelect.value = toSelect.value;
    toSelect.value = oldFrom;

    const valueInput =
        document.getElementById("lengthValue");

    if (valueInput.value !== "") {
        convertLength();
    }
}
// Weight / Mass Converter

const weightUnits = {
    ug: 0.000001,
    mg: 0.001,
    g: 1,
    kg: 1000,
    tonne: 1000000,

    oz: 28.349523125,
    lb: 453.59237,
    st: 6350.29318,
    uston: 907184.74,

    quintal: 100000
};


function convertWeight() {

    const valueInput =
        document.getElementById("weightValue");

    const fromUnit =
        document.getElementById("weightFrom").value;

    const toUnit =
        document.getElementById("weightTo").value;

    const result =
        document.getElementById("weightResult");

    if (valueInput.value === "") {
        result.innerText =
            "Please enter a value.";
        return;
    }

    const value = Number(valueInput.value);

    if (!Number.isFinite(value)) {
        result.innerText =
            "Please enter a valid number.";
        return;
    }

    const valueInGrams =
        value * weightUnits[fromUnit];

    const convertedValue =
        valueInGrams / weightUnits[toUnit];

    result.innerText =
        "Result: " + formatWeightResult(convertedValue);
}


function formatWeightResult(value) {

    if (value === 0) {
        return "0";
    }

    if (
        Math.abs(value) >= 0.000001 &&
        Math.abs(value) < 1000000000
    ) {
        return value.toLocaleString(
            undefined,
            {
                maximumFractionDigits: 10
            }
        );
    }

    return value.toExponential(6);
}


function swapWeightUnits() {

    const fromSelect =
        document.getElementById("weightFrom");

    const toSelect =
        document.getElementById("weightTo");

    const oldFrom = fromSelect.value;

    fromSelect.value = toSelect.value;
    toSelect.value = oldFrom;

    const valueInput =
        document.getElementById("weightValue");

    if (valueInput.value !== "") {
        convertWeight();
    }
}
// Temperature Converter

function convertTemperature() {

    const valueInput =
        document.getElementById("temperatureValue");

    const fromUnit =
        document.getElementById("temperatureFrom").value;

    const toUnit =
        document.getElementById("temperatureTo").value;

    const result =
        document.getElementById("temperatureResult");

    if (valueInput.value === "") {
        result.innerText =
            "Please enter a temperature.";
        return;
    }

    const value = Number(valueInput.value);

    if (!Number.isFinite(value)) {
        result.innerText =
            "Please enter a valid temperature.";
        return;
    }

    let celsius;

    // Convert FROM selected unit to Celsius
    if (fromUnit === "celsius") {
        celsius = value;

    } else if (fromUnit === "fahrenheit") {
        celsius = (value - 32) * 5 / 9;

    } else if (fromUnit === "kelvin") {
        celsius = value - 273.15;

    } else if (fromUnit === "rankine") {
        celsius = (value - 491.67) * 5 / 9;
    }


    // Convert Celsius TO selected unit
    let convertedValue;

    if (toUnit === "celsius") {
        convertedValue = celsius;

    } else if (toUnit === "fahrenheit") {
        convertedValue = (celsius * 9 / 5) + 32;

    } else if (toUnit === "kelvin") {
        convertedValue = celsius + 273.15;

    } else if (toUnit === "rankine") {
        convertedValue = (celsius + 273.15) * 9 / 5;
    }


    result.innerText =
        "Result: " + convertedValue.toFixed(2);
}


function swapTemperatureUnits() {

    const fromSelect =
        document.getElementById("temperatureFrom");

    const toSelect =
        document.getElementById("temperatureTo");

    const oldFrom = fromSelect.value;

    fromSelect.value = toSelect.value;
    toSelect.value = oldFrom;

    const valueInput =
        document.getElementById("temperatureValue");

    if (valueInput.value !== "") {
        convertTemperature();
    }
}
// Time Converter

const timeUnits = {
    second: 1,
    minute: 60,
    hour: 3600,
    day: 86400,
    week: 604800
};


function convertTime() {

    const valueInput =
        document.getElementById("timeValue");

    const fromUnit =
        document.getElementById("timeFrom").value;

    const toUnit =
        document.getElementById("timeTo").value;

    const result =
        document.getElementById("timeResult");

    if (valueInput.value === "") {
        result.innerText =
            "Please enter a time value.";
        return;
    }

    const value = Number(valueInput.value);

    if (!Number.isFinite(value) || value < 0) {
        result.innerText =
            "Please enter a valid time value.";
        return;
    }

    const valueInSeconds =
        value * timeUnits[fromUnit];

    const convertedValue =
        valueInSeconds / timeUnits[toUnit];

    result.innerText =
        "Result: " + formatTimeResult(convertedValue);
}


function formatTimeResult(value) {

    if (value === 0) {
        return "0";
    }

    return value.toLocaleString(
        undefined,
        {
            maximumFractionDigits: 10
        }
    );
}


function swapTimeUnits() {

    const fromSelect =
        document.getElementById("timeFrom");

    const toSelect =
        document.getElementById("timeTo");

    const oldFrom = fromSelect.value;

    fromSelect.value = toSelect.value;
    toSelect.value = oldFrom;

    const valueInput =
        document.getElementById("timeValue");

    if (valueInput.value !== "") {
        convertTime();
    }
}
// Area Converter

const areaUnits = {
    mm2: 0.000001,
    cm2: 0.0001,
    m2: 1,
    km2: 1000000,

    in2: 0.00064516,
    ft2: 0.09290304,
    yd2: 0.83612736,
    mi2: 2589988.110336,

    acre: 4046.8564224,
    hectare: 10000
};


function convertArea() {

    const valueInput =
        document.getElementById("areaValue");

    const fromUnit =
        document.getElementById("areaFrom").value;

    const toUnit =
        document.getElementById("areaTo").value;

    const result =
        document.getElementById("areaResult");

    if (valueInput.value === "") {
        result.innerText =
            "Please enter an area value.";
        return;
    }

    const value = Number(valueInput.value);

    if (!Number.isFinite(value) || value < 0) {
        result.innerText =
            "Please enter a valid area value.";
        return;
    }

    const valueInSquareMeters =
        value * areaUnits[fromUnit];

    const convertedValue =
        valueInSquareMeters / areaUnits[toUnit];

    result.innerText =
        "Result: " + formatAreaResult(convertedValue);
}


function formatAreaResult(value) {

    if (value === 0) {
        return "0";
    }

    return value.toLocaleString(
        undefined,
        {
            maximumFractionDigits: 10
        }
    );
}


function swapAreaUnits() {

    const fromSelect =
        document.getElementById("areaFrom");

    const toSelect =
        document.getElementById("areaTo");

    const oldFrom = fromSelect.value;

    fromSelect.value = toSelect.value;
    toSelect.value = oldFrom;

    const valueInput =
        document.getElementById("areaValue");

    if (valueInput.value !== "") {
        convertArea();
    }
}
// Volume Converter

const volumeUnits = {
    ml: 0.001,
    l: 1,
    cm3: 0.001,
    m3: 1000,

    in3: 0.016387064,
    ft3: 28.316846592,
    yd3: 764.554857984,

    gallon: 3.785411784,
    quart: 0.946352946,
    pint: 0.473176473,
    cup: 0.2365882365
};


function convertVolume() {

    const valueInput =
        document.getElementById("volumeValue");

    const fromUnit =
        document.getElementById("volumeFrom").value;

    const toUnit =
        document.getElementById("volumeTo").value;

    const result =
        document.getElementById("volumeResult");

    if (valueInput.value === "") {
        result.innerText =
            "Please enter a volume value.";
        return;
    }

    const value = Number(valueInput.value);

    if (!Number.isFinite(value) || value < 0) {
        result.innerText =
            "Please enter a valid volume value.";
        return;
    }

    const valueInLiters =
        value * volumeUnits[fromUnit];

    const convertedValue =
        valueInLiters / volumeUnits[toUnit];

    result.innerText =
        "Result: " + formatVolumeResult(convertedValue);
}


function formatVolumeResult(value) {

    if (value === 0) {
        return "0";
    }

    return value.toLocaleString(
        undefined,
        {
            maximumFractionDigits: 10
        }
    );
}


function swapVolumeUnits() {

    const fromSelect =
        document.getElementById("volumeFrom");

    const toSelect =
        document.getElementById("volumeTo");

    const oldFrom = fromSelect.value;

    fromSelect.value = toSelect.value;
    toSelect.value = oldFrom;

    const valueInput =
        document.getElementById("volumeValue");

    if (valueInput.value !== "") {
        convertVolume();
    }
}
