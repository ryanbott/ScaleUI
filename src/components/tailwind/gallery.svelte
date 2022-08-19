<script>
    export let styleProps;

    const GalleryImages = [
      {
       "src": "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      },
      {
       "src": "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
      },
      {
       "src": "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
      },
      {
       "src": "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
      },
      {
       "src": "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
      },
      {
       "src": "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(78).webp"
      },
      {
       "src": "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(79).webp"
      },
    ];

</script>


<section class="gallery bg-2 overflow-hidden rounded-xl md:rounded-3xl text-gray-700 mx-scale-4 xl:mx-0" style="{ styleProps }">
  <div class="container mx-auto px-scale-4 pt-scale-4 pb-scale-6 lg:px-scale-8 lg:pt-scale-6 lg:pb-scale-8">

    <h3 class="text-scale-7 text-1 mb-scale-3">Gallery Component</h3>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-scale-7">

      {#each GalleryImages as {src} }
        <div class="w-full">
          <img
            alt="gallery"
            class="block object-cover object-center w-full h-full rounded-lg"
            src={src}>
        </div>
      {/each}

    </div>
  </div>
</section>
