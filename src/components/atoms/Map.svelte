<script>
  import { onMount } from "svelte";
  let center;
  let map;
  let marker;

  onMount(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    function success(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      center = { lat: latitude, lng: longitude };
      map = new google.maps.Map(document.getElementById("container"), {
        zoom: 15,
        center: center
      });

      marker = new google.maps.Marker({
        draggable: true,
        position: center,
        map: map,
        title: "Current position"
      });
    }

    function error(e) {
      console.log(e);
      alert("Unable to retrieve your location");
    }

    navigator.geolocation.getCurrentPosition(success, error);
  });
</script>

<style>
  .map {
    border-radius: var(--common-border-radius);
    box-shadow: var(--common-container-shadow);
    height: 400px; /* The height is 400 pixels */
    width: 100%; /* The width is the width of the web page */
  }
</style>

<svelte:head>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key=API_KEY">

  </script>
</svelte:head>
<div id="container" class="map" />
