<script>
  export let onClick;
  export let disabled = false;
  export let variant = "primary";
  export let type = "button"
</script>

<style>
  button {
    border-radius: 5px;
    border: none;
    cursor: pointer;
    box-shadow: var(--common-container-shadow);
    outline: none;
  }

  .primary {
    background-color: var(--common-color-primary-main);
    color: var(--common-color-primary-text);
  }

  .primary:hover,
  .primary:active {
    background-color: var(--common-color-primary-dark);
    transition: 0.5s;
  }

  .secondary {
    background-color: var(--common-color-secondary-main);
    color: var(--common-color-secondary-text);
  }

  .secondary:hover,
  .secondary:active {
    background-color: var(--common-color-secondary-dark);
    transition: 0.5s;
  }
</style>

<button
  class:primary={variant === 'primary'}
  class:secondary={variant === 'secondary'}
  on:click={onClick}
  {disabled}
  type={type}>
  <slot />
</button>
