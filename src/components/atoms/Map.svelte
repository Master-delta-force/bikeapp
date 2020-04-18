<script>

  function initMap() {
    var uluru = { lat: -25.344, lng: 131.036 };
    var map = new google.maps.Map(document.getElementById("mapper"), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({ position: uluru, map: map });
  }
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
    src="https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap">
  </script>
</svelte:head>

<div id="mapper" class="map" />
