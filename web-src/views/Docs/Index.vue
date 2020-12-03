<!--
 * Index.vue
 * Created on Thu Dec 03 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
-->
<template>
	<v-main style="background-color: #fafafa;">
		<v-row align="center" class="ma-0 mt-12">
			<v-col cols="12" md="6" offset-md="3">
				<h1>{{ $t('docs.getting-start') }}</h1>
				<v-divider width="30%" class="my-6"></v-divider>
				<p v-html="$t('docs.start-desc2')"></p>
				<p v-html="$t('docs.start-desc')"></p>
				
				<Picture :src="imgs.docs1"></Picture>
				<br>
				<p v-html="$t('docs.start-desc3')"></p>
				<Picture :src="imgs.docs2"></Picture>
				<br>
				<p v-html="$t('docs.start-desc4')"></p>
			</v-col>
		</v-row>
		<!-- S:Footer -->
		<v-divider class="mt-12 mb-3" style="margin-left: auto; margin-right: auto;" width="70%"></v-divider>
		<v-row class="my-6 ma-0">
			<v-col align="center">
				<p class="orange--text text--lighten-2">{{ $t('author') }}</p>
			</v-col>
		</v-row>
		<!-- E:Footer -->
	</v-main>
</template>
<script>
export default {
	name: 'Docs',
	data() {
		return {
			imgs: {
				'docs1': require('assets/docs-1.png'),
				'docs2': require('assets/docs-2.png'),
			},
		};
	},
};
</script>
<style scope>
code {
	box-shadow: unset !important;
	background-color: #ECEFF1 !important;
	color: #BF360C !important;
	font-weight: 400 !important;
	font-family: unset !important;
	padding: 3px 6px !important;
}
</style>
