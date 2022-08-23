<script lang="ts">
  import "virtual:windi.css"
  import '../app.css';
  import { browser } from "$app/env";

  if (browser){
    import("virtual:windi-devtools");
  }
</script>

<main class="flex flex-col justify-center pt-10 px-4 min-h-121">
  <slot />
</main>