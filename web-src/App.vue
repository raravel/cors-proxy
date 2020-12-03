<template>
	<v-app>
		<v-app-bar
			absolute
			color="white"
			elevate-on-scroll
			scroll-target="#router-view"
			class="custom"
			prominent>
			<img :src="imgs.icon" class="ml-md-8 mr-4 mr-md-12" height="70%"></img>
			<v-toolbar-title
				class="text-overline blue-grey--text text--darken-3"
				style="align-self: auto !important; padding-top: 6px !important; font-size: 1.5rem !important; font-weight: bold;">
				CORS PROXY
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn text height="100%" color="orange darken-4" tile>
				Home
				<v-icon class="ml-2">
					mdi-home
				</v-icon>
			</v-btn>
			<v-btn text height="100%" color="orange darken-4" tile>
				Docs
				<v-icon class="ml-2">
					mdi-notebook-multiple
				</v-icon>
			</v-btn>
			<v-btn text height="100%" color="orange darken-4" tile>
				GITHUB
				<v-icon class="ml-2">
					mdi-github
				</v-icon>
			</v-btn>
		</v-app-bar>
		<v-sheet id="router-view" tile :key="$route.fullPath" class="h-100v" style="overflow-y: auto;">
			<transition name="scroll-y-reverse-transition">
				<router-view style="margin-top: 64px;"/>
			</transition>
		</v-sheet>
	</v-app>
</template>
<style>
.h-100v {
	height: 100vh;
}
html, body {
	overflow: hidden;
}
</style>
<script>
export default {
	name: 'App',

	data() {
		return {
			imgs: {
				icon: require('assets/cors-proxy.png'),
			},
		};
	},
};
</script>
<style scope>
.custom .v-toolbar__content {
	align-items: center !important;
	padding-top: 0 !important;
    padding-bottom: 0 !important;
}
</style>
