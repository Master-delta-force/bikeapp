<script>
  import Siema from "siema";
  import { onMount, createEventDispatcher } from "svelte";

  export let perPage = 1;
  export let loop = true;
  export let autoplay = 0;
  export let duration = 200;
  export let easing = "ease-out";
  export let startIndex = 0;
  export let draggable = true;
  export let multipleDrag = true;
  export let threshold = 20;
  export let rtl = false;

  let siema;
  let controller;
  let currentIndex = startIndex;

  /*A reactive declaration of dots to use it for render the number of slides */
  $: dots = controller ? controller.innerElements : [];

  const dispatch = createEventDispatcher();

  onMount(() => {
    controller = new Siema({
      selector: siema,
      perPage,
      loop,
      duration,
      easing,
      startIndex,
      draggable,
      multipleDrag,
      threshold,
      rtl,
      onChange: handleChange
    });

    autoplay && setInterval(right, autoplay);

    return () => {
      autoplay && clearTimeout(timer);
      controller.destroy();
    };
  });

  function left() {
    controller.prev();
  }

  function right() {
    controller.next();
  }

  function go(index) {
    controller.goTo(index);
  }

  function handleChange(event) {
    currentIndex = controller.currentSlide;
    dispatch("change", {
      currentSlide: controller.currentSlide,
      slideCount: controller.innerElements.length
    });
  }
</script>

<style>
  .carousel {
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .slides {
    height: 100%;
    width: 100%;
  }
  button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    z-index: var(--common-zindex-action-button);
    margin-top: -20px;
    border: none;
    background-color: transparent;
  }

  button:focus {
    outline: none;
  }

  .left {
    left: 0;
    padding: 0;
    margin: 0;
  }

  .right {
    right: 0;
    padding: 0;
    margin: 0;
  }

  ul {
    list-style-type: none;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -20px;
    padding: 0;
  }

  ul li {
    margin-left: 0.4em;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    height: 0.4em;
    width: 0.4em;
  }

  ul li:hover {
    background-color: rgba(255, 255, 255, 0.85);
  }

  ul li.active {
    background-color: rgba(255, 255, 255, 1);
  }
</style>

<div class="carousel">
  <button class="left" on:click={left}>
    <slot name="left-control" />
  </button>
  <div class="slides" bind:this={siema}>
    <slot />
  </div>
  <ul>
    {#each dots as dot, i}
      <li on:click={() => go(i)} class={currentIndex === i ? 'active' : ''} />
    {/each}
  </ul>
  <button class="right" on:click={right}>
    <slot name="right-control" />
  </button>
</div>
