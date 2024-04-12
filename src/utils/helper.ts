export class helper {
    static UpperCaseAsc = (str: any): string => {
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
            m = helper.UpperCaseAsc(m)
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
};