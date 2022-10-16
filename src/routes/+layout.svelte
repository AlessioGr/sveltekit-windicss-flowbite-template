<script lang="ts">
  import "virtual:windi.css";
  import "../app.css";
  import { browser } from "$app/environment";
  import Header from "$components/Header.svelte";
  import Footer from "$components/Footer.svelte";

  if (browser) {
    import("virtual:windi-devtools");
  }
</script>

<Header/>
<main class="flex flex-col justify-center pt-10 px-4 min-h-121">
  <slot />
</main>
<Footer/>
