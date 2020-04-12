<script>
    export let src
    export let alt
</script>

<style>
    div {
        border-radius: var(--common-border-radius);
        display: block;
        height: 0;
        overflow: hidden;
        padding: 56.25% 0 0 0;
        position: relative;
        width: 100%;
    }

    img {
        box-shadow: var(--common-container-shadow);
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        width: 100%;
        animation: fadeInImage 1s ease;
    }
</style>

<div>
    <img src={src} alt={alt}/>
</div>