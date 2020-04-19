<style>
  .card {
    display: flex;
    flex-flow: column nowrap;
    border-radius: var(--common-border-radius);
    box-shadow: var(--common-container-shadow);
    padding: calc(var(--common-spacing-unit) * 3);
    margin: var(--common-spacing-unit);
    background-color: var(--common-color-background-default);
    color: var(--common-color-primary-dark);
    overflow: hidden;
  }
</style>

<div class="card">
  <slot>
    <em>no content was provided</em>
  </slot>
</div>
