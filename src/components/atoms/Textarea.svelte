<script>
  export let id;
  export let title;
  export let placeholder;
  export let value;
</script>

<style>
  .label {
    font-size: 1rem;
  }

  .textarea {
    border: solid 1px var(--common-color-primary-light);
    border-radius: 10px;
    outline: none;
    padding: 1rem;
    width: 95%;
  }

  .textarea:focus {
    box-shadow: 5px 10px 5px 0px var(--common-color-shadow, 0.5);
  }
</style>

<label for={id} class="label">{title}</label>
<textarea id={id} class="textarea" placeholder={placeholder} bind:value></textarea>
