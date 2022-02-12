<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let name, link, image;
</script>

<div
  class="relative group bg-gray-600 hover:bg-gray-700 rounded-xl p-4 h-full border border-gray-600 hover:border-gray-800 border-1 transition-colors duration-500 hover:border-opacity-50 border-opacity-100">
  <button
    title="Edit shortcut"
    on:click={() => dispatch('edit')}
    class="absolute right-0 top-0 z-30 px-2 py-1 scale-0 group-hover:scale-100 transition-transform">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
  </button>
  <a class="place-content-center text-gray-200 relative" href={link}>
    <img src={image} class="w-full aspect-square rounded-2xl" alt="" />
    <p class="text-center mt-3 truncate">{name}</p>
  </a>
</div>
