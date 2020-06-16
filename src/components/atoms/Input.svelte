<script>
  export let className = '';
  export let type = 'text';
  export let name;
  export let value = '';
  export let label = '';
</script>

<style>
  input {
    width: 100%;
    padding: var(--common-spacing-unit);
    border: solid 1px var(--common-color-primary-light);
    border-radius: var(--common-border-radius);
    font-family: var(--common-font-family);
    font-size: var(--common-font-size);
    outline: none;
  }
  input:focus {
    border: solid 1px var(--common-color-secondary-light);
  }
  label:focus-within {
    color: var(--common-color-secondary-light);
  }
</style>

<label>{label}
  <input class={className} {type} {name} {value}>
</label>