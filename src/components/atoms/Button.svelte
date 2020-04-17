<script>
  export let text;
  export let onClick;
  export let disabled = false;
  let className = "";
	export { className as class };

</script>

<style>
</style>

<button on:click={onClick} disabled={disabled} class={className}>
{text}
</button>
