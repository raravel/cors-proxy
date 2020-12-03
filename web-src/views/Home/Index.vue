<template>
	<v-main>
		<v-img dark :src="imgs.banner" class="login-banner" height="600px" style="background-size: contain;">
			<HomeHeader />
			<v-row align="center" style="height:536px" class="ma-0">
				<v-col cols="0" sm="1" md="2"></v-col>
				<v-col cols="0" sm="10" md="8" align="center" class="px-12">
					<v-row align="center">
						<v-col cols="12" md="7" align="left" style="height: unset;">
							<h1 class="display-1 indigo--text text--lighten-4 font-weight-bold">
								{{ $t('home.login.baner') }}
							</h1>
							<p class="mt-12 white--text" style="word-break: keep-all;" v-html="$t('home.login.desc')"></p>
							<p class="text-right ma-0 mr-0 mt-10">
							<v-btn
								text
								tile
								large
								@click="$assign('/register/')"
								color="indigo lighten-4">
								{{ $t('home.login.sign-in') }}
							</v-btn>
							</p>
						</v-col>
						<v-col cols="12" md="5" align="right" style="height: unset;">
							<!--
							<v-form>
								<v-text-field
									:label="$t('home.login.email')"
									regular dark
									v-model="form.email"
									color="indigo lighten-3"></v-text-field>
								<v-text-field
									:label="$t('home.login.pw')"
									regular dark
									v-model="form.passwd"
									color="indigo lighten-3"
									type="password"></v-text-field>
								<v-btn
									color="indigo darken-2"
									class="mt-9"
									@click="login"
									:loading="loading"
									:disabled="loading"
									large block dark tile>
									{{ $t('home.login.login') }}
								</v-btn>
							</v-form>
							-->
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="0" sm="1" md="2"></v-col>
			</v-row>
		</v-img>
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
