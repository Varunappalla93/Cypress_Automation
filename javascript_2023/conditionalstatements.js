// if-else
function checkage(age) {
    if (age >= 18) {
        console.log("can vote")
    }
    else {
        console.log("cannot vote")
    }
}

checkage(30)

// nested if-else
function checkGrade(score) {
    let grade;
    if (score > 90) {
        grade = "A";
    }
    else {
        if (score > 80) {
            grade = "B"
        }
        else {
            if (score >= 70) {
                grade = "C"
            }
            else {
                grade = "D"
            }
        }

    }
    console.log(grade)
}

checkGrade(91) // A


// if-else if-else
let browser = "Chrome"

if (browser == "Chrome") {
    console.log("launch chrome")
}
else if (browser == "edge") {
    console.log("launch edge")
}
else if (browser == "ff") {
    console.log("launch ff")
}
else {
    console.log("Pls pass correct browser")
}



// switch
function checkDay(dayno) {
    let day;
    switch (dayno) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        default:
            console.log("Default")
            break;
    }
    return day
}

console.log(checkDay(1))



let browsername = "chrome";
switch (browsername) {
    case "chrome":
        console.log("Chrome browser launched")
        break;
    case "firefox":
        console.log("firefox browser launched")
        break;
    default:
        console.log("Pls pass correct browser")
        break;
}