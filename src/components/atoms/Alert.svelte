<script>
	import { afterUpdate } from 'svelte';
    import {
        AlertCircleIcon,
        AlertTriangleIcon,
        CheckCircleIcon,
        XCircleIcon
    } from 'svelte-feather-icons'

    export let message
    export let open
    export let onClose
    export let type = 'success'
    export let fixed = true
    export let time = 6000
    export let infinite = false
    let timeout

    afterUpdate(() => {
        if (!infinite && open) {
            timeout = setTimeout(() => onClose(), time)
        }
        !infinite && !open && clearTimeout(timeout)
    })

</script>

<style>
    .container {
        display: grid;
        grid-template-columns: 3em 1fr 3em;
        border-radius: var(--common-border-radius);
        font-weight: var(--common-font-medium);
        animation-name: bounceInLeft;
        animation-duration: .5s;
        margin: var(--common-spacing-unit) 0;
    }

    .fixed {
        position: fixed;
        bottom: calc(var(--common-spacing-unit) * 2);
        left: calc(var(--common-spacing-unit) * 2);
        right: calc(var(--common-spacing-unit) * 2);
    }

    .icon-subcontainer {
        align-self: center;
        justify-self: center;
        display: flex;
    }

    .text-subcontainer {
        align-self: center;
        padding: 0 calc(var(--common-spacing-unit) * 3)
    }

    .success {
        background-color: var(--common-color-success);
        color: var(--common-color-success-text);
    }

    .error {
        background-color: var(--common-color-error);
        color: var(--common-color-error-text);
    }

    .warning {
        background-color: var(--common-color-warning);
        color: var(--common-color-warning-text);
    }

    button {
        padding: calc(0.75em - 2px) 0.75em;
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        outline: none;
        border-radius: 0;
        border-top-right-radius: var(--common-border-radius);
        border-bottom-right-radius: var(--common-border-radius);
        height: 100%;
    }

    button:hover, button:active {
        background: var(--common-color-button-action-background);
        outline:0;
    }

    p {
        word-break: break-word;
    }

    @media screen and (min-width: 960px) {
        .container {
            max-width: 300px
        }
    }

</style>

{#if open}
    <div class={`container ${type}`} class:fixed={fixed}>
        <div class="icon-subcontainer">
            {#if type === 'success'}
                <CheckCircleIcon/>
            {:else if type === 'warning'}
                <AlertTriangleIcon/>
            {:else if type === 'error'}
                <AlertCircleIcon/>
            {/if}
        </div>
        <div class="text-subcontainer"><p>{message}</p></div>
        <button class={type} on:click={onClose}>
            <XCircleIcon/>
        </button>
    </div>
{/if}