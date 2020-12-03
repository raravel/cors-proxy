<template>
	<v-dialog
		v-model="dialog">
		<!-- S:Picture -->
		<template v-slot:activator="{ on }">
			<v-row :class="rowClass">
				<v-col align="center">
					<v-hover class="my-12">
						<template v-slot="{ hover }">
							<v-card
								v-on="on"
								:max-width="maxWidth || '600px'"
								:elevation="hover ? 24 : 6">
								<v-img
									:src="src"
									width="100%"></v-img>
							</v-card>
						</template>
					</v-hover>
					<p class="caption">{{ caption }}</p>
				</v-col>
			</v-row>
		</template>
		<!-- E:Picture -->

		<!-- S:Card Dialog -->
		<v-card>
			<v-img :src="src" width="100%"></v-img>
		</v-card>
		<!-- E:Card Dialog -->
	</v-dialog>
</template>
<style scope>
div.v-dialog {
	width: unset;
}
</style>
<script>
export default {
	name: 'Picture',
	props: ['maxWidth', 'src', 'caption', 'rowClass'],
	components: {
	},
	methods: {
	},
	mounted: function() {
	},
	data: function() {
		return {
			dialog: false,
		};
	},
}
</script>
