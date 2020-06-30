<script>
    export let src
    export let alt
    export let caption = ''
</script>

<style>
    div {
        height: 0;
        padding: 56.25% 0 0 0;
        position: relative;
        width: 100%;
    }

    img {
        border-radius: var(--common-border-radius);
        box-shadow: var(--common-container-shadow);
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        width: 100%;
        animation: fadeInImage 1s;
    }

    figure {
        margin: calc(var(--common-spacing-unit) * 3) 0;
    }

    figcaption {
        word-break: break-word;
        padding: 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        padding-top: 8px;
    }
</style>

<figure>
    <div>
        <img src={src} alt={alt}/>
    </div>
    <figcaption title={caption}>{caption}</figcaption>
</figure>