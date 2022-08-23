<script lang="ts">
  import "virtual:windi.css";
  import "../app.css";
  import { browser } from "$app/env";
  import Header from "$components/Header.svelte";

  if (browser) {
    import("virtual:windi-devtools");
  }
</script>

<Header/>
<main class="flex flex-col justify-center pt-10 px-4 min-h-121">
  <slot />
</main>