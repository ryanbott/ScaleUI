<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	// import '../app.css';
	import '../tailwind.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
