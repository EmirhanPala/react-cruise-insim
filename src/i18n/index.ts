import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const i18n = i18next.createInstance();
i18n
    .use(initReactI18next)
    .use(HttpApi)
    .init({
        initImmediate: true,
        react: {
            useSuspense: false
        }
    });
export default i18n;
