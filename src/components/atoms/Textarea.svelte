<script>
  export let t_id;
  export let t_title;
  export let t_placeholder;
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

<label for={t_id} class="label">{t_title}</label>
<textarea id={t_id} class="textarea" placeholder={t_placeholder} bind:value></textarea>
