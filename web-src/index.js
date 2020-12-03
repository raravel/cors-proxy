import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import vuetify from '@/plugins/vuetify';
import Picture from "@/views/Picture";

import '@/plugins/mixin';

Vue.config.productionTip = false;
Vue.component('Picture', Picture);

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount("#app");
