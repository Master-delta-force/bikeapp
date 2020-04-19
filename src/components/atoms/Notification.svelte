<script>
  export let number = 0;
  export let className = '';
</script>

<style>
  .notification {
    display: flex;
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: var(--common-color-secondary-light);
    color: white;
    font-size: var(--common-font-size);
  }
</style>

<span class={`notification ${className}`}>{number}</span> 