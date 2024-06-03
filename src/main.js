import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';

import serbian from './translations/serbian.json'
import english from './translations/english.json'

import store from './store';

const messages = {
    sr: serbian,
    en: english
}

// locale - podrazumevani jezik
// fallbackLocale - jezik koji se koristi ukoliko se prevod ne nađe u podrazumevanom
const forTranslation = createI18n({
    locale: 'sr', 
    fallbackLocale: 'en',
    messages
});

const app = createApp(App);
app.use(forTranslation);
app.use(router);
app.use(store);
app.mount("#app");
