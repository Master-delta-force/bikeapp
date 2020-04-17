<style>
	.card {
		display: flex;
		flex-flow: column nowrap;
		border-radius: 4px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 8px;
		background-color: #fff;
		color: #1a272f;
		overflow: hidden;
	}

</style>

<div class="card">
	<slot>
		<em>no content was provided</em>
	</slot>
</div>