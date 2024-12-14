import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import locale from '@src/locale/index'

const resources = {
    en: {
        translation: locale.en,
    },
    fa: {
        translation: locale.fa,
    },
};

i18n.use(initReactI18next) 
    .init({
        resources,
        lng: "en", 
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
