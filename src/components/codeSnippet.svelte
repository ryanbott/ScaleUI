<script>
  import Highlight from "svelte-highlight";

  export let code;
  export let language;
  export let containerClass;

</script>

<div class={containerClass}>
  <Highlight language={language} {code} />
</div>
