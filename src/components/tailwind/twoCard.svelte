<script>
  export let styleProps;
</script>

<section class="two-card-col flex flex-col flex-wrap justify-center gap-8 my-9" style="{ styleProps }">

  <div class="flex flex-col text-center justify-center">
    <h3 class="text-scale-8 text-1 mb-scale-3">Two Card Component</h3>
    <p class="text-2 w-full md:w-2/3 mx-auto">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  </div>

  <div class="container mx-auto flex flex-col md:flex-row justify-center gap-8 mb-scale-4">

    <div class="bg-color max-w-sm rounded-lg border border-gray-200 shadow-md mx-auto md:mx-0">
      <a href="/">
        <img
        class="rounded-t-lg"
        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
        alt=""
        >
      </a>
      <div class="p-scale-6">
        <a href="#">
          <h5 class="text-1 text-scale-7 mb-scale-1 font-bold">Lorem ipsum dolor sit amet</h5>
        </a>
        <p class="text-1 mb-scale-3 font-normal text-scale-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <a href="#" class="inline-flex items-center py-2 pl-3 pr-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>

    <div class="bg-color-alt max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mx-auto md:mx-0 dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
        class="rounded-t-lg"
        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
        alt=""
        >
      </a>
      <div class="p-scale-6">
        <a href="#">
          <h5 class="text-slate-300 text-scale-6 mb-3 font-bold">Ut enim ad minim veniam</h5>
        </a>
        <p class="text-scale-4 text-blue-200 mb-scale-3 font-normal">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="#" class="inline-flex items-center py-scale-2 px-scale-3 text-sm font-medium text-center text-white bg-1 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
    </div>

  </div>

</section>
