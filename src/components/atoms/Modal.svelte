<script>
  import { XIcon } from 'svelte-feather-icons';
  export let id = 'myModal';

  function handleOpen() {
    document.getElementById(id).style.display = 'flex';
  }

  function handleClose() {
    document.getElementById(id).style.display = 'none';
  }
</script>

<style>
  .modal {
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .7);
    z-index: var(--common-zindex-modal);
  }
  .modal-content {
    display: block;
    width: 80%;
    height: auto;
    padding: var(--common-spacing-unit);
    border-radius: var(--common-border-radius);
    background-color: white;
  }
  .close {
    text-align: right;
    margin-bottom: var(--common-spacing-unit);
  }
  .close button {
    line-height: 0;
    cursor: pointer;
  }

</style>

<button type="button" on:click={handleOpen}>abrir</button>
<div class="modal" {id}>
  <div class="modal-content">
    <div class="close">
      <button type="button" on:click={handleClose}>
        <XIcon />
      </button>
    </div>
    <slot></slot>
  </div>
</div>