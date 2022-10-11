var DateExtention = DateExtention || {}

DateExtention = {
    getDate: (date ,val) => {
        date = new Date(date);
        date.setDate(date.getDate() + val);
        return date;
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
    },
    getDayOfTime: (d1, d2) => {
        let ms1 = d1.getTime();
        let ms2 = d2.getTime();
        return Math.ceil((ms2 - ms1) / (24*60*60*1000));
    },
    formatDate: (dateSrc) => {
        let date = new Date(dateSrc),
            year = date.getFullYear().toString(),
            month = (date.getMonth() + 1).toString().padStart(2, '0'),
            day = date.getDate().toString().padStart(2, '0');
    
        return `${day}/${month}/${year}`;
    }
}

export default DateExtention