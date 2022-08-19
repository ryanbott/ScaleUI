<script>
	// import { page } from '$app/stores';
	// import logo from './svelte-logo.svg';
  import { onMount, afterUpdate } from 'svelte';

  import DarkMode from "svelte-dark-mode";
  let theme;

  onMount(() => {
    console.log("theme is: ", document.body.className);
    document.body.classList = theme || 'light'; // "dark" or "light"
  });

  $: switchTheme = theme === "dark" ? "light" : "dark";
  // $: document.body.className = theme;


  // onMount(() => {
	// 	alert('hello !!');
  // });

  function handleClick() {
		alert('clicked')
	}

</script>

<header class="px-scale-3">
	<div class="container mx-auto bg-2 w-full flex justify-between px-scale-4 py-scale-3 rounded-xl mt-4">
    <div class="logo flex align-center my-auto">
      <a class="text-1 px-2 font-bold" href="/">ScaleUI</a>
    </div>


    <button
      class="button bg-3 text-1 p-2 rounded-xl"
      on:click={handleClick}
    >
      Click me
    </button>


    <div class="flex">
      <DarkMode bind:theme />
      <button
        class="px-scale-4 hover:underline transform scale-100 hover:scale-110"
        on:click={() => ( theme = switchTheme)}
      >
         {#if switchTheme == 'light'}
            <svg class="svg svg-stroke" role="img" width="48" height="48" viewBox="0 0 24 24" aria-labelledby="sunIconTitle" stroke="yellow" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="yellow"> <title id="sunIconTitle">Sun</title> <circle cx="12" cy="12" r="4"/> <path d="M12 5L12 3M12 21L12 19M5 12L2 12 5 12zM22 12L19 12 22 12zM16.9497475 7.05025253L19.0710678 4.92893219 16.9497475 7.05025253zM4.92893219 19.0710678L7.05025253 16.9497475 4.92893219 19.0710678zM16.9497475 16.9497475L19.0710678 19.0710678 16.9497475 16.9497475zM4.92893219 4.92893219L7.05025253 7.05025253 4.92893219 4.92893219z"/> </svg>
            { switchTheme } mode
         {:else if switchTheme == 'dark'}
            <svg class="svg svg-stroke" role="img" width="48" height="48" viewBox="0 0 24 24" aria-labelledby="moonIconTitle" stroke="yellow" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="yellow"> <title id="moonIconTitle">Moon</title> <path d="M10.423839,3 C10.1490474,3.80837289 10,4.67486099 10,5.57616098 C10,9.99443898 13.581722,13.576161 18,13.576161 C18.9013,13.576161 19.7677881,13.4271135 20.576161,13.152322 C19.5038921,16.3066875 16.516978,18.576161 13,18.576161 C8.581722,18.576161 5,14.994439 5,10.576161 C5,7.05918297 7.26947343,4.07226889 10.423839,3 Z"/> </svg>
            { switchTheme } mode
         {:else}
            { switchTheme } mode
         {/if}
      </button>

      <a class="flex align-center my-auto transform scale-100 hover:scale-110" href="https://github.com/ryanbott/ScaleUI" target="_blank">
        <svg class="svg" height="48" viewBox="2 2 20 20" fill="none" aria-hidden="true"><path fill-rule="evenodd" fill="none" clip-rule="evenodd" d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z" /></svg>
      </a>
    </div>
	</div>

</header>

<style>

  .svg {
    width: 24px;
    height: 24px;
    fill: var(--accent-1);
    color: var(--accent-1);
  }

  .svg-stroke {
    stroke: var(--accent-1);
  }

	path {
		fill: var(--background);
	}

</style>
