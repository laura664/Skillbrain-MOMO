function theWeekDay(n) {
    let text;
    switch (n) {
        case 1:
            return "Luni";
        case 2:
            return "Marti";
        case 3:
            return "Miercuri";
        case 4:
            return "Joi";
        case 5:
            return "Vineri";
        case 6:
            return "Sambata";
        case 7, 0:
            return "Duminica";
        default:
            throw "necunoscut";
    }

    return text;
}

let dayNumber = 4;
let dayString;

let text = theWeekDay(dayNumber);

console.log(theWeekDay(dayNumber));