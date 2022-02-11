<script>
  import settings from '../lib/settings';
  import { fade } from 'svelte/transition';

  export let open = true;
</script>

{#if open}
  <div
    transition:fade
    class="bg-gray-600 right-0 top-0 bottom-0 fixed w-full md:w-72 shadow-lg p-5 space-y-6 z-30">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold items-center flex gap-2 select-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Settings
      </h2>
      <button on:click={() => (open = false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 cursor-pointer text-gray-800 hover:text-white transition-all duration-500 hover:rotate-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <form action="f,j,f" class="space-y-3">
      <div
        class="bg-gray-500 px-3 py-2 rounded-xl border border-gray-800 border-opacity-50 hover:border-opacity-90 transition-colors duration-500">
        <label
          class="text-sm font-medium select-none flex items-center gap-1"
          for="customSearchEngineInput">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
          Search engine
        </label>
        <select
          class="w-full h-8 text-lg bg-gray-500"
          id="searchEngineInput"
          bind:value={$settings.searchEngine}>
          <option value="duckduckgo">Duckduckgo</option>
          <option value="yandex">Yandex</option>
          <option value="google">Google</option>
          <option value="brave">Brave</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <div
        class="bg-gray-500 px-3 py-2 rounded-xl border border-gray-800 border-opacity-50 hover:border-opacity-90 transition-colors duration-500">
        <label
          class="text-sm font-medium select-none flex items-center gap-1"
          for="customSearchEngineInput">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          Custom search engine
        </label>
        <input
          class="w-full h-8 text-lg bg-gray-500 outline-none"
          type="text"
          placeholder="https://yandex.ru/?q="
          id="customSearchEngineInput"
          bind:value={$settings.customEngine} />
      </div>
    </form>

    <div class="rounded-full border-gray-800 border border-opacity-50 border-secondary" />

    <div class="space-y-3">
      <p class="text-md font-medium select-none">
        This site / extension is open-source and licensed under GPL v3. Check out our source code on
        GitHub.
      </p>
      <button
        href="/"
        class="w-full text-center bg-gray-500 hover:bg-gray-700 border border-gray-800 border-opacity-50 px-3 py-2 text-lg rounded-xl transition-colors duration-500 hover:border-opacity-80 group overflow-hidden relative flex items-center">
        <span
          class="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4 duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M20.11554,5.90131a3.88274,3.88274,0,0,0-.26-.31,4.41253,4.41253,0,0,0,.21-.76,5.28351,5.28351,0,0,0-.35-2.8s-1.12-.35-3.69,1.38a12.47675,12.47675,0,0,0-3.35-.45,12.60429,12.60429,0,0,0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.26343,5.26343,0,0,0-.35,2.77,4.21027,4.21027,0,0,0,.22.79c-.09.1-.18.21-.26.31a5.13973,5.13973,0,0,0-1.12,3.3,7.68624,7.68624,0,0,0,.04.85c.31994,4.43,3.27,5.46,6.08,5.78a2.55759,2.55759,0,0,0-.77,1.39,4.02183,4.02183,0,0,0-.13,1.09v1.30957c-1.11822.09937-2.26648-.06335-2.62219-1.06134a5.69461,5.69461,0,0,0-1.83447-2.41211,1.1789,1.1789,0,0,1-.169-.1123,1.00141,1.00141,0,0,0-.93066-.64551H3.77441a.99965.99965,0,0,0-1,.99512c-.0039.8125.80909,1.33691,1.14258,1.51562a4.4665,4.4665,0,0,1,.92285,1.3584c.36426,1.02344,1.4292,2.57812,4.46582,2.376.001.03515.002.06835.00245.09863l.00439.26758a.99974.99974,0,0,0,1,1l.00311-.00061V23.001h4.71112a.99974.99974,0,0,0,1-1s.00733-3.15967.00733-3.68964a4.02421,4.02421,0,0,0-.13-1.09l-.00183-.0061.00336.0061c-.00861-.035-.02173-.06353-.03113-.09747A2.53213,2.53213,0,0,0,15.134,15.8313l.0116.02087c-.00684-.00616-.01324-.01489-.02008-.02087,2.81-.32,5.74-1.37,6.06-5.78a7.68675,7.68675,0,0,0,.04-.85A5.2306,5.2306,0,0,0,20.11554,5.90131Z"
              data-name="Brand Logos" />
          </svg>
        </span>
        <p class="group-hover:ml-8 transition-all duration-500">GitHub</p>
      </button>
    </div>
  </div>
{/if}
