var DateExtention = DateExtention || {}

DateExtention = {
    getDate: (date ,val) => {
        date = new Date(date);
        date.setDate(date.getDate() + val);
        return date.toISOString();
    },
    getMonday: () => {
        var d = new Date();
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6:1);
        return new Date(d.setDate(diff));
    },
    getFistDayOfYear: () => {
        var d = new Date(new Date().getFullYear(), 0, 1);
        return d;
    }
}

export default DateExtention