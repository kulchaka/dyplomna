function formateDay(day) {
    if (day === 0) {
        return 'Sun';
    }
    if (day === 1) {
        return 'Mon';
    }
    if (day === 2) {
        return 'Tue';
    }
    if (day === 3) {
        return 'Wed';
    }
    if (day === 4) {
        return 'Thu';
    }
    if (day === 5) {
        return 'Fri';
    }
    if (day === 6) {
        return 'Sat';
    }
}

export {
    formateDay
};