<template>
	<v-main>
		<!-- S:Banner -->
		<v-img dark :src="imgs.banner" class="login-banner" height="600px" style="background-size: contain;">
			<v-row align="center" style="height:536px" class="ma-0">
				<v-col cols="0" sm="1" md="2"></v-col>
				<v-col cols="0" sm="10" md="8" align="center" class="px-12">
					<v-row align="center">
						<v-col cols="12" md="6" align="left" style="height: unset;">
							<h1 class="display-1 orange--text text--lighten-3 font-weight-bold">
								{{ $t('home.banner') }}
							</h1>
							<p class="mt-8 font-weight-bold white--text" style="font-size: 1.1rem !important;" v-html="$t('home.desc')"></p>
							<p class="white--text" style="word-break: keep-all;" v-html="$t('home.detail')"></p>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="0" sm="1" md="2"></v-col>
			</v-row>
		</v-img>
		<!-- E:Banner -->
		<!-- S:Recommand -->
		<v-row align="center" class="ma-0">
			<v-col class="mt-12 mb-5" cols="12" align="center">
				<h1>{{ $t('home.why') }}</h1>
				<v-divider class="my-5" width="100px"></v-divider>
				<p>{{ $t('home.why-desc') }}</p>
			</v-col>
		</v-row>
		<v-row align="center" justify="center" class="ma-0 mt-6 mb-12">
			<v-col cols="12" md="4" style="height: 350px;" align="center">
				<v-avatar
					color="orange"
					size="200">
					<v-icon size="50">
						mdi-cog-sync
					</v-icon>
				</v-avatar>
				<h2 class="mt-8">{{ $t('home.simple') }}</h2>
				<p class="mt-4">{{ $t('home.simple-desc') }}</p>
			</v-col>
			<v-col cols="12" md="4" style="height: 350px;" align="center">
				<v-avatar
					color="orange"
					size="200">
					<v-icon size="50">
						mdi-security
					</v-icon>
				</v-avatar>
				<h2 class="mt-8">{{ $t('home.security') }}</h2>
				<p class="mt-4">{{ $t('home.security-desc') }}</p>
			</v-col>
		</v-row>
		<!-- E:Recommand -->
		<v-row align="center" style="height: 200px; background-color: #f1f1f1;" class="ma-0 mt-6">
			<v-col cols="12" align="center">
				<h2>{{ $t('home.now-start') }}</h2>
				<v-btn @click="$assign('/docs')" class="mt-4" tile color="orange darken-1" dark>
					{{ $t('home.docs') }}
				</v-btn>
			</v-col>
		</v-row>
	</v-main>
</template>
<script>
export default {
	name: 'Home',
	data() {
		return {
			imgs: {
				banner: require('assets/banner.jpg'),
			},
		};
	},
};
</script>
<style scope>
div.v-image.login-banner div.v-responsive__content {
    background: rgba(0, 0, 0, 0.5);
}
div.row {
    width: 100%;
    margin-right:unset;
}
div.v-image.login-banner .v-image__image.v-image__image--cover {
    background-size: cover;
}
</style>
