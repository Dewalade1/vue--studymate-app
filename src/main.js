import { createApp } from 'vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App.vue";
import BaseCard from "./utils/BaseCard/BaseCard.vue";
import BaseButton from "./utils/BaseButton/BaseButton.vue";


const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);

app.mount('#app');
