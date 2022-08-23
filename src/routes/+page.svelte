<script lang="ts">
  import "virtual:windi.css"
  import '../app.css';
  import { browser } from "$app/env";

  if (browser){
    import("virtual:windi-devtools");
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
