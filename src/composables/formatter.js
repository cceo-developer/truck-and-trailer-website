export default function useFormatter() {
    return {
        // DATES
        userDateFormat(date, with_time = false) {
            date = this.validDate(date);
            let dateObject = date ? new Date(date) : new Date();

	        return dateObject.toLocaleDateString('en-US', {
                ...(with_time ? {hour: '2-digit', minute: '2-digit'} : {}),
                day: '2-digit', month: '2-digit', year: 'numeric',
            });
        },
        userDateFormatMonth(date, with_time = false) {
            date = this.validDate(date);
            let dateObject = date ? new Date(date) : new Date();

	        return dateObject.toLocaleDateString('en-US', {
                ...(with_time ? {hour: '2-digit', minute: '2-digit'} : {}),
                day: '2-digit', month: 'short', year: 'numeric',
            });
        },
        userTimeFormat(date) {
            date = this.validDate(date);
            let dateObject = date ? new Date(date) : new Date();

            let hours = dateObject.getHours();
            const minutes = String(dateObject.getMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12;
            hours = hours ? hours : 12;

            return `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
        },
        userDateStringFormat(date) {
            date = this.validDate(date);
            let dateObject = date ? new Date(date) : new Date();

	        const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateObject);
            const day = dateObject.getDate();
            const year = dateObject.getFullYear();

            return `${month}, ${day} ${year}`;
        },
        userDateMonthYearFormat(date) {
            let time = date.includes(':') ? '' : ' 00:00:00';
            let dateObject = date ? new Date(`${date}${time}`) : new Date();
            const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
            const year = dateObject.getFullYear();

            return `${month}/${year}`;
        },
        differenceInMinutes(start_date, end_date) {
            if(!start_date || !end_date) {
                return null;
            }
            const start = new Date(start_date);
            const end = new Date(end_date);
            const diff = Math.max(end - start, 0);

            return diff / (1000 * 60);
        },
        nowDatabaseFormat(time = false) {
            let now = new Date();
            let _time = now.toLocaleTimeString('es-ES', { hourCycle: 'h23', hour: '2-digit', minute: '2-digit', second: '2-digit' });
	        return now.toLocaleDateString('sv') + (time ? ` ${_time}` : '');
        },
        // MONEY
        currency(value) {
            if(value == null || typeof value !== 'number') {
                return null;
            }
            return Number(Number(value).toFixed(2)).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        },
        // STRINGS
        capitalizeFirstLetter(str) {
            
            return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
        },
        // TIME
        minutesToString(minutes) {
            if(minutes == null || typeof minutes !== 'number') {
                return null;
            }
            if(minutes <= 0) {
                return 'Error: The arrival date is less than or equal to the departure date.'
            }
            const days = Math.floor(minutes / 1440);
            const hours = Math.floor((minutes % 1440) / 60);
            const mins = minutes % 60;
        
            const parts = [];
        
            if (days > 0) parts.push(`${days} day${days > 1 ? 's' : ''}`);
            if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
            if (mins > 0 || (days === 0 && hours === 0)) parts.push(`${mins} min`);
        
            return parts.join(', ');
        },
        minutesToTimeValues(minutes_value) {
            if(!minutes_value || typeof minutes_value !== 'number' || minutes_value <= 0) {
                return null;
            }
            const minutesPerHour = 60;
            const hoursPerDay = 24;
            const daysPerWeek = 7;
            const daysPerMonth = 30;
            const monthsPerYear = 12;

            const minutesPerDay = minutesPerHour * hoursPerDay;
            const minutesPerWeek = minutesPerDay * daysPerWeek;
            const minutesPerMonth = minutesPerDay * daysPerMonth;
            const minutesPerYear = minutesPerMonth * monthsPerYear;
        
            const years = Math.floor(minutes_value / minutesPerYear);
            minutes_value %= minutesPerYear;
        
            const months = Math.floor(minutes_value / minutesPerMonth);
            minutes_value %= minutesPerMonth;
        
            const weeks = Math.floor(minutes_value / minutesPerWeek);
            minutes_value %= minutesPerWeek;
        
            const days = Math.floor(minutes_value / minutesPerDay);
            minutes_value %= minutesPerDay;
        
            const hours = Math.floor(minutes_value / minutesPerHour);
            const minutes = minutes_value % minutesPerHour;
        
            return {
                years: years,
                months: months,
                weeks: weeks,
                days: days,
                hours: hours,
                hours_plus_fraction: hours + (minutes > 0 ? 1 : 0), 
                minutes: minutes,
            };
        },
        // VALUES
        currencyValue(value) {
            if(value == null || typeof value !== 'number') {
                return null;
            }
            return Number(Number(value).toFixed(2));
        },
        userFileSizeFormat(value) {
            if(value == null || typeof value !== 'number') {
                return '0 B';
            }
            if (value < 1024) return value + ' B';
            else if (value < 1024 * 1024) return (value / 1024).toFixed(2) + ' KB';
            else if (value < 1024 * 1024 * 1024) return (value / (1024 * 1024)).toFixed(2) + ' MB';
            else return (value / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
        },
        // VALIDATIONS
        validDate(date) {
            if(!date) {
                return null;
            }
            return date.includes(":") ? date : `${date} 00:00:00`;
        }
    }
}