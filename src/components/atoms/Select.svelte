<script>
let s_options = ["Option 1", "Option 2", "Option 3"];
let selected;
</script>

<style>
  .custom-select {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  .custom-select select {
    background-color: #fafafa;
    color: black;
    font-size: inherit;
    padding: 0.5em;
    padding-right: 2.5em;
    border-radius: var(--common-border-radius);
    -webkit-appearance: button; /* hide default arrow in chrome OSX */
    outline: none;
  }

  .custom-select::before,
  .custom-select::after {
    content: "";
    position: absolute;
    pointer-events: none;
  }

  .custom-select::after {
    /*  Custom dropdown arrow */
    content: "\25BC";
    height: 1em;
    font-size: 0.625em;
    line-height: 1;
    right: 1.2em;
    top: 50%;
    margin-top: -0.5em;
  }

  .custom-select::before {
    /*  Custom dropdown arrow cover */
    width: 2em;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 3px 3px 0;
  }

  .custom-select::before {
    background-color: rgba(0, 0, 0, 0.15);
  }
</style>

<span class="custom-select">
  <select bind:value={selected}>
    {#each s_options as option}
        <option>{option}</option>
    {/each}
  </select>
</span>
