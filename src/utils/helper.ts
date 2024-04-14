import moment from "moment";

export class helper {
    static upperCaseAsc = (str: string): string => {
        if (!str) return str;
        let resStr = '';
        for (let i = 0; i < str.length; i++) {
            switch (str[i]) {
                case 'i':
                case 'İ':
                    resStr += 'I';
                    break;
                case 'ü':
                case 'Ü':
                    resStr += 'U';
                    break;
                case 'ö':
                case 'Ö':
                    resStr += 'O';
                    break;
                case 'ş':
                case 'Ş':
                    resStr += 'S';
                    break;
                case 'ğ':
                case 'Ğ':
                    resStr += 'G';
                    break;
                case 'ç':
                case 'Ç':
                    resStr += 'C';
                    break;
                default:
                    resStr += str[i]?.toString()?.toUpperCase();
                    break;
            }
        }
        return resStr;
    };
    static camelCase = (value: string, separator = " "): string => {
        if (!value)
            return value;
        const newNameArr = value.split(separator);
        const newArr = newNameArr.map((m, i) => {
            let newM = "";
            m = helper.upperCaseAsc(m)
            for (let c = 0; c < m.length; c++) {
                if (i === 0)
                    newM += m[c].toLowerCase()
                else if (c === 0)
                    newM += m[c].toUpperCase()
                else newM += m[c].toLowerCase()
            }
            return newM;
        });
        return newArr.join("");
    };
    static formatNumber(num: number, digits: number): string | number {
        if (num === undefined) {
            return 0;
        }
        if (isNaN(num)) {
            return "";
        }
        return num.toFixed(digits).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.');
    };
    static getUniqueItemsByProperty = <T>(arr: Array<T>, key: keyof T): Array<T> => {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    };
    static removeInSimColorCodes = (str: string): string => {
        return str.replace(/\^\d/g, '');
    };
    static objectToNumber = (val: string | number | null | undefined): number => {
        if (val == null || val == '' || val == 'undefined') return 0;
        return Number(val);
    };
    static objectToString = (val: string | number | null | undefined): string => {
        if (!val)
            return "";
        return val?.toString();
    };
    static startDate = () => {
        return moment().startOf("day").format('yyyy-MM-DDTHH:mm');
    };
    static endDate = () => {
        return moment().endOf("day").format('yyyy-MM-DDTHH:mm');
    };
    static startWeeklyDate = () => {
        return moment().startOf("isoWeek").format('yyyy-MM-DDTHH:mm');
    };
    static endWeeklyDate = () => {
        return moment().endOf("isoWeek").format('yyyy-MM-DDTHH:mm');
    };
    static startWeeklyDateWithValue = (datevalue: string | Date) => {
        return moment(datevalue).startOf("isoWeek").format('yyyy-MM-DDTHH:mm');
    };
    static endWeeklyDateVithValue = (datevalue: string | Date) => {
        return moment(datevalue).endOf("isoWeek").format('yyyy-MM-DDTHH:mm');
    };
    static startMonthlyDate = () => {
        return moment().startOf("months").format('yyyy-MM-DDTHH:mm');
    };
    static endMonthlyDate = () => {
        return moment().endOf("months").format('yyyy-MM-DDTHH:mm');
    };
    static dateTimeNow = () => {
        return moment().format('yyyy-MM-DDTHH:mm:ss');
    };
    static dateTimeToday = () => {
        return moment().format('yyyy-MM-DD');
    };
    static dateTimeTodayAddDay = (day: number) => {
        return moment().add(day, 'day').format('yyyy-MM-DDT00:00');
    };
    static dateTimeNowAddDay = (day: number) => {
        return moment().add(day, 'day').format('yyyy-MM-DDTHH:mm');
    };
    static dateValueFormat = (datevalue: string | Date) => {
        return moment(datevalue).format('yyyy-MM-DD');
    };
    static dateValueFormat2 = (datevalue: string | Date) => {
        return moment(datevalue).format('DD.MM.yyyy');
    };
    static dateValueFormat3 = (datevalue: string | Date) => {
        return moment(datevalue).format('DD.MM.yyyy HH:mm');
    };
    static dateTimeValueFormat = (dateTime: string | Date) => {
        return moment(dateTime).format('yyyy-MM-DDTHH:mm');
    };
    static timeValueFormat = (datevalue: string | Date) => {
        return moment(datevalue).format('HH:mm');
    };
    static jsonToDateTime = (jsonDate: string) => {
        return moment(jsonDate)
    };
    static formatToDateTime = (date: string, format: string) => {
        return moment(date, format)
    };
    static jsonToShortDateString = (jsonDate: string | Date): string => {
        if (!jsonDate) return '';
        return moment(jsonDate).format('DD.MM.yyyy');
    };
    static jsonToLongDateString = (jsonDate: string | Date): string => {
        if (!jsonDate) return '';
        return moment(jsonDate).format('DD.MM.yyyy HH:mm:ss');
    };
    static jsonToLongTimeString = (jsonDate: string | Date): string => {
        if (!jsonDate) return '';
        return moment(jsonDate).format('HH:mm:ss');
    };
    static jsonToTimeString = (jsonDate: string | Date): string => {
        if (!jsonDate) return '';
        return moment(jsonDate).format('HH:mm');
    };
    static dateTimeAddDay = (date: Date | string, day: number) => {
        return moment(date).add(day, 'day').format('yyyy-MM-DD');
    };
};