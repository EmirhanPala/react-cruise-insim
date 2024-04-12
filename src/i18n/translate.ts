import { helper } from "src/utils/helper";
import i18n from ".";

export const translate = (key: TKeyType, defaultValue: string): string => {
    if (!defaultValue)
        return defaultValue;
    return i18n.t(key + "|" + helper.camelCase(defaultValue), defaultValue);
};
type TKeyType = "apps|login" | "apps|register" | "apps|rules" | "apps|dashboard";