function analyzeMarks(marks, passMark = 50) {

    // A. VALIDATE THE INPUTS

    // Check if marks is an array and is not empty
    if (!Array.isArray(marks) || marks.length === 0) {
        return "Invalid marks: marks must be a non-empty array.";
    }

    // Check that passMark is a whole number from 0 to 100
    if (!Number.isInteger(passMark) || passMark < 0 || passMark > 100) {
        return "Invalid passMark: it must be a whole number between 0 and 100.";
    }

    // Check every mark
    for (let i = 0; i < marks.length; i++) {
        if (!Number.isInteger(marks[i]) || marks[i] < 0 || marks[i] > 100) {
            return "Invalid marks: every mark must be a whole number between 0 and 100.";
        }
    }


    // B. PROCESS THE ARRAY USING A LOOP

    let total = 0;
    let highest = marks[0];
    let lowest = marks[0];

    let passed = 0;
    let failed = 0;
    let evenCount = 0;

    for (let i = 0; i < marks.length; i++) {

        let mark = marks[i];

        // Calculate total
        total += mark;

        // Find highest
        if (mark > highest) {
            highest = mark;
        }

        // Find lowest
        if (mark < lowest) {
            lowest = mark;
        }

        // Count passed and failed students
        if (mark >= passMark) {
            passed++;
        } else {
            failed++;
        }

        // Count even marks
        if (mark % 2 === 0) {
            evenCount++;
        }
    }

    let average = total / marks.length;

    let range = highest - lowest;

    let passRate = (passed / marks.length) * 100;

    // Round average and passRate to 2 decimal places
    average = Number(average.toFixed(2));
    passRate = Number(passRate.toFixed(2));


    // C. MAKE DECISIONS AND RETURN THE REPORT

    // Use ternary operator for the status
    let status = average >= passMark ? "Target met" : "Needs support";

    // Use switch(true) to assign grade
    let grade;

    switch (true) {
        case average >= 80:
            grade = "A";
            break;

        case average >= 60:
            grade = "B";
            break;

        case average >= 50:
            grade = "C";
            break;

        default:
            grade = "D";
    }

    // Return the report
    return {
        total: total,
        average: average,
        highest: highest,
        lowest: lowest,
        passed: passed,
        failed: failed,
        evenCount: evenCount,
        range: range,
        passRate: passRate,
        grade: grade,
        status: status
    };
}


// D. DEMONSTRATE AND EXPLAIN

const marks = [78, 45, 90, 62, 50, 0, 100, 33];

console.log(analyzeMarks(marks, 50));

console.log(analyzeMarks([0, 50, 100], 50));

console.log(analyzeMarks(["70", 40], 50));

console.log(analyzeMarks([], 50));

console.log(analyzeMarks(marks, 101));