<script context="module">

  // import Counter from "../lib/Counter.svelte";

	import { browser, dev } from '$app/env';
  import { loop_guard } from 'svelte/internal';
	// import Select from 'svelte-select';
  // import Highlight from "svelte-highlight";
  // import HighlightTailwind from "svelte-highlight";

  // import cssVars from 'svelte-css-vars';
  // import { css, javascript } from "svelte-highlight/languages";
  // import HighlightTheme from "svelte-highlight/styles/arta";
  // synth-midnight-terminal-dark
  // ros-pine-moon
  // shades-of-purple
  // arta

  // import CodeSnippet from '../components/codeSnippet.svelte';


  import TailwindGallery from '../components/tailwind/gallery.svelte';
  import TailwindTwoCard from '../components/tailwind/twoCard.svelte';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>ScaleUI</title>
	<meta name="description" content="About this app" />
  <!-- {@html HighlightTheme} -->
</svelte:head>



<script>

  let basefont = 16;
  let scaleValue = 1.25;
  let scaleValueArray = [];
  let numberOfTimes = 9;
  let fontSizePrefix = 'scale'
  let fluidPrefix = 'fluid'
  let selectedBaseIndex = 3;
  let minScreenWidth = 400;
  let maxScreenWidth = 1200;

  let fluidValueArray = [];
  let showFluidValues = false;
  let styleProps = '';

  function calcSizeValues() {
    scaleValueArray = [];
    // console.log("new scaleValue: ", scaleValue);

    let scaleIndex = 0;
    let scaleLevel = 1;
    let isBaseValue = false;
    let multiplier;

    for (var i = 0; i <= numberOfTimes - 1; i++) {
      multiplier = i - selectedBaseIndex;

      scaleValueArray.push({
        "index": scaleIndex,
        "scaleLevel": scaleLevel,
        "multiplier": multiplier,
        "isBaseValue": ((scaleIndex == selectedBaseIndex) ? isBaseValue = true : isBaseValue = false),
        "prop": (fontSizePrefix.length > 0 ? `${fontSizePrefix}-` : `${fontSizePrefix}`) + scaleLevel,
        "siteProp": "scale-" + scaleLevel,
        "rem": Math.pow(scaleValue, multiplier).toFixed(3),
        "px": ((Math.pow(scaleValue, multiplier).toFixed(3)) * basefont).toFixed(3),
      })
      scaleIndex += 1;
      scaleLevel += 1;
    }
    scaleValueArray = scaleValueArray;
    // console.table(scaleValueArray);

    styleProps = scaleValueArray.map(({siteProp, rem}) => `--${siteProp}: ${rem}rem`).join('; ');
    console.log("styleProps", styleProps);

  } // END calcSizeValues()


  let fluidMinFont;
  let fluidMaxFont;
  let fluidMinVal;
  let fluidMaxVal;
  let minLevel = 4;
  let maxLevel = 6;

  function calcFluidValues(FontMin, FontMax) {
    let FontMinRem = (FontMin / basefont) + 'rem';
    let FontMaxRem = (FontMax / basefont) + 'rem';

    let m = ((FontMax - FontMin) / (maxScreenWidth - minScreenWidth)); // slope
    let b = (FontMin - (m * minScreenWidth)) // y-intercept
    let preferredValue = ((m * 100).toFixed(3) + 'vw') + ' + ' + ((b / basefont).toFixed(3) + 'rem');
    // console.log(`clamp(${FontMinRem}, ${preferredValue}, ${FontMaxRem})`);

    fluidValueArray.push({
      "prop": `${fluidPrefix}-${minLevel}-${maxLevel}`,
      "value": `clamp(${FontMinRem}, ${preferredValue}, ${FontMaxRem})`,
    });
    fluidValueArray = fluidValueArray;
    console.table(fluidValueArray);
  } // END calcFluidValues()



  /*
  TODO::
    remove scale one from static, have render the loop      - XXXX
    change base level - values can be lower than base       - XXXX
    live, dynamic typography                                - XXXX
    fluid typography                                        - XXXX
    fluid typography in results array                       - XXXX
    live, dynamic tailwind component                        - XXXX
    code styling syntax                                     - XXXX
    design                                                  -
    remove Calculate button, have all display on pageload   -
    docs                                                    -
    Sass results array                                      -
    tailwind component page                                 -


    BUGS::
      keep page `scale` prefix consistent if user changes   -
      change base font level globally if changed on:bind    -
  */

  $: codeCSS = `
  // CSS Custom Properties

  :root {

` +
    scaleValueArray.map(({prop, rem, px}) => `--${prop}: ${rem}rem; // ${px}px `).join('\n')
    +
    fluidValueArray.map(({prop, value}) => `\n--${prop}: ${value};`).join('')
    + `

  }`;


  $: codeTailwind = `
  // tailwind.config.cjs

  module.exports =  {
theme: {
  extend: {
         ...

    fontSize: {
` +
    scaleValueArray.map(({prop, rem, px}) => `'${prop}': '${rem}rem', // ${px}px `).join('\n')
    +
    fluidValueArray.map(({prop, value}) => `\n'${prop}': '${value}'`).join('')
    + `
         },
    spacing: {
` +
    scaleValueArray.map(({prop, rem, px}) => `           '${prop}': '${rem}rem', // ${px}px `).join('\n')
    +
    fluidValueArray.map(({prop, value}) => `\n'${prop}': '${value}'`).join('')
    + `
         },

        ...
       }
     }
  }`;

</script>

<main>

  <div
    class="content"
    style="{styleProps}"
  >
    <div class="flex gap-8 flex-col px-scale-4 md:flex-row">
      <div class="flex flex-col">
        <label class="text-scale-3" for="baseLevel">
          Base Font Level
          <select bind:value={selectedBaseIndex}>
            {#each scaleValueArray as {index, prop, multiplier} }
            <option key={multiplier} value={index}>
              --{prop}
            </option>
            {/each}
          </select>
        </label>

        <label class="text-scale-3" for="basefontInput">
          Base Font (default: 16px)
          <input id="basefontInput" bind:value={basefont} on:change={(e) => console.log(e)}>
        </label>

        <label class="text-scale-4" for="scaleValueInput">
          Scale Value (default: 1.25px) (1.25, 1.33)
          <input id="scaleValueInput" bind:value={scaleValue}>
        </label>

        <label class="text-scale-5" for="numberOfTimesInput">
          Number of Times (default: 9)
          <input id="numberOfTimesInput" bind:value={numberOfTimes}>
        </label>

        <label class="text-scale-4" for="fontSizePrefixInput">
          CSS custom Properties prefix
          <input id="fontSizePrefixInput" bind:value={fontSizePrefix}>
        </label>
      </div>

      <div class="fluid-type-container flex flex-col p-4">
        <h2>Fluid Typography: add each custom fluid prop into results array</h2>
        <label class="text-scale-3" for="minScreenWidthInput">
          Min Screen Width (default 400)
          <input id="minScreenWidthInput" type="number" bind:value={minScreenWidth}>
        </label>

        <label class="text-scale-4" for="maxScreenWidthInput">
          Max Screen Width (default 1200)
          <input id="maxScreenWidthInput" type="number" bind:value={maxScreenWidth}>
        </label>
        <label class="text-scale-4" for="fontSizeFluidPrefixInput">
          CSS custom Properties prefix (default: --fluid-{minLevel}-{maxLevel})
          <input id="fontSizeFluidPrefixInput" bind:value={fluidPrefix}>
        </label>

        <div class="flex">
          <label class="text-scale-4" for="fluidMinFont">
            Min Font
            <select bind:value={fluidMinFont} on:change={(e) => minLevel = e.target.selectedOptions[0].attributes.minLevel.value}>
              {#each scaleValueArray as {scaleLevel, prop, px, rem}, i }
              <option key={i} value={px} minLevel={scaleLevel}>
                --{prop} ({px}px/{rem}rem)
              </option>
              {/each}
            </select>
          </label>

          <label class="text-scale-4" for="fluidMaxFont">
            Max Font
            <select bind:value={fluidMaxFont} on:change={(e) => maxLevel = e.target.selectedOptions[0].attributes.maxLevel.value}>
              {#each scaleValueArray as {scaleLevel, prop, px, rem}, i }
              <option key={i} value={px} maxLevel={scaleLevel}>
                --{prop} ({px}px/{rem}rem)
              </option>
              {/each}
            </select>
          </label>
        </div>
        <div class="fluid-type__button-container">
          <button
            class="button p-4 text-scale-3 font-mono"
            on:click={() => calcFluidValues(fluidMinFont, fluidMaxFont)}
          >
            Calculate new Fluid Prop
          </button>
          <div class="fluid-results">
            <ul>
              {#each fluidValueArray as {prop, value}, i }
                <li key={i}>{prop}: {value};</li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <button
      class="button p-4 mx-4 text-scale-3 font-mono"
      on:click={calcSizeValues}>
      Calculate Values
    </button>


    <ul class="fonts-results">
      {#each scaleValueArray as {rem, px, multiplier, scaleLevel}, i }
        <li key={i} class="{multiplier == 0 ? 'bg-first' : '' }" style="font-size: {rem}rem">Test Heading {scaleLevel}: {rem}rem / {px}px</li>
      {/each}
      {#each fluidValueArray as {prop, value}, i }
        <li key={i} class="" style="font-size: {value}">Fluid Heading --{prop}: {value}</li>
      {/each}
    </ul>




    <TailwindGallery styleProps={styleProps} />
    <TailwindTwoCard styleProps={styleProps} />



  </div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}


  .fluid-type-container {
      background-color: var(--bg-2);
  }

  .fluid-type__button-container {
    background-color: var(--bg-2);
  }


  .button {
    background-color: var(--accent-1);
    color: var(--text-1);
    opacity: 1;
    transition: opacity .15s ease;
  }

  .button:hover {
    opacity: .5;
  }

  .fonts-results {
    margin-block: var(--scale-5);
  }

  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }

  input,
  select {
    background-color: var(--bg-1);
    font-size: var(--scale-4);
    outline: 1px solid var(--accent-1);
    color: var(--text-1);
    margin-bottom: var(--scale-1);
  }

  li {
    line-height: var(--scale-lh);
    list-style: none;
    margin: 0 auto;
    padding-block: var(--scale-1);
    border-bottom: 1px solid var(--text-2);
    color: var(--text-1);
  }

</style>
