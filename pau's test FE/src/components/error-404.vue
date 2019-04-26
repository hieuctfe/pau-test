<template>
	<div class="container">
		<div class="row">
			<div class="col col-12">
				<div class="error-message-pic">
					<img src="@/assets/images/404/404.png" alt="404">
				</div>
				<div class="error-message">
					<div class="error-message-oops"><strong>ERROR</strong>. Page not found!</div>
					<!--<router-link :to="{ name : 'Home'}" class="btn btn-warning error-message-btn">Back to home</router-link>-->
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Page404',
	computed: {
		message() {
			return 'The bodyguard said that you can\'t enter this page...';
		},
	},
};
</script>

<style  lang="scss" scoped>
@import 'src/assets/style';

.error-message {
	position: relative;
	width: 100%;
	padding: 30px 0;
	overflow: hidden;
	text-align: center;
	&-pic{
		position: relative;
		width: 100%;
		overflow: hidden;
		text-align: center;
		padding: 0;
		margin-top: 50px;

		img {
			max-width: 100%;
		}
	}
	&-oops {
		font-size: 22px;
		color: $text-color;
		margin-bottom: 20px;
		line-height: 25px;
		strong{
			font-weight: bold;
			font-size: 25px;
		}
	}

	&-btn{
		background: $yellow;
		color:#fff;
		border-radius: 25px;
		padding: 6px 25px;
		&:hover{
			color:#fff;
		}
		&:focus,&:visited{
			color:#fff;
		}
	}
}

</style>
