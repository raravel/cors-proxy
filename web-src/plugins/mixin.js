/*
 * mixin.js
 * Created on Thu Dec 03 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import Vue from 'vue';

Vue.mixin({
	methods: {
		$t(key) {
			return this.$vuetify.lang.t('$vuetify.' + key);
		},
		$assign(url) {
			const router = this && this.$router;
			if ( typeof url === "string" && router ) {
				if ( router.history.current.path !== url ) {
					router.push({ path: url });
				}
			}
		},
	},
});
