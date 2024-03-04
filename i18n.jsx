import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "learnProgram.title": "Learning Program",
        "test.title": "Tests",
        "break.title": "Break",
        "officeInfo.title": "Information about offices",
        "phoneNumber.title": "Phone number",
        "busSchedule.title": "Bus Schedule",
        "settings.title": "Settings",
        "settings.language": "Change the language",
        "theoty.title": "Theoty",
        "safety.title": "Safety equipment",
        "shift.title": "Shift",
        "shift.theory": "Training department (Theory)",
        "shift.technical": "Technical department, MUST01, Warehouse, QS-WE",
        "shift.busOffice": "Office shuttle buses",
        "bus.busOfficePolyova": "Poleva route",
        "color.title": "Colors",
      },
    },
    ua: {
      translation: {
        "learnProgram.title": "Навчальна програма",
        "test.title": "Тести",
        "break.title": "Перерва",
        "officeInfo.title": "Інформація про кабінети",
        "phoneNumber.title": "Номер телефону",
        "busSchedule.title": "Розклад автобусів",
        "settings.title": "Налаштування",
        "settings.language": "Змінити Мову",
        "theoty.title": "Теорія",
        "safety.title": "Техніка безпеки",
        "shift.title": "Зміна",
        "shift.theory": "Навчальний відділ(Теорія)",
        "shift.technical": "Технічний відділ, MUST01, Склад, QS-WE",
        "bus.busOffice": "Офісні маршрутки",
        "bus.busOfficePolyova": "Маршрут Польова",
        "color.title": "Кольори",
      },
    },
    de: {
      translation: {
        "learnProgram.title": "Lehrplan",
        "test.title": "Tests",
        "break.title": "Brechen",
        "officeInfo.title": "Informationen zu Büros",
        "phoneNumber.title": "Telefonnummer",
        "busSchedule.title": "Busfahrplan",
        "settings.title": "Einstellungen",
        "settings.language": "Ändere die Sprache",
        "theoty.title": "Theorie",
        "safety.title": "Sicherheitsausrüstung",
        "shift.title": "Schicht",
        "shift.theory": "Abteilung Ausbildung (Theorie)",
        "shift.technical": "Technische Abteilung, MUST01, Lager, QS-WE",
        "shift.busOffice": "Büro-Kleinbusse",
        "bus.busOfficePolyova": "Route Poleva",
        "color.title": "Farben",
      },
    },
  },
  lng: "ua",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
