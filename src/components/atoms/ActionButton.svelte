<script>
    export let fixed = true
    export let type = 'primary'
    export let onClick
</script>

<style>
    button {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        border: none;
        cursor: pointer;
        box-shadow: var(--common-container-shadow);
        outline: none;
    }

    .fixed {
        position: fixed;
        z-index: var(--common-zindex-action-button);
        bottom: 16px;
        right: 16px;
    }

    .primary {
        background-color: var(--common-color-primary-main);
        color: var(--common-color-primary-text);
    }

    .primary:hover, .primary:active {
        background-color: var(--common-color-primary-dark);
        transition: .5s;
    }

    .secondary {
        background-color: var(--common-color-secondary-main);
        color: var(--common-color-secondary-text);
    }

    .secondary:hover, .secondary:active {
        background-color: var(--common-color-secondary-dark);
        transition: .5s;
    }
</style>

<button
    class:primary={type === 'primary'}
    class:secondary={type === 'secondary'}
    class:fixed={fixed}
    on:click={onClick}
>
    <slot></slot>
</button>