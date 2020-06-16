<script>
  export let number = 0;
  export let className = '';
  export let size = 35;
</script>

<style>
  .notification {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: var(--common-color-secondary-light);
    color: white;
    font-size: var(--common-font-size);
  }
</style>

<span style={`width: ${size}px; height: ${size}px`} class={`notification ${className}`}>{number}</span> 