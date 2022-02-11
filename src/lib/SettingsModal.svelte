<script>
  import settings from './settings';

  export let selectedLink;
</script>

{#if selectedLink !== null}
  <div class="w-full h-full">
    <div class="w-full h-full bg-black bg-opacity-70 top-0 absolute z-40" />
    <div
      class="w-full md:w-2/3 lg:w-1/3 flex flex-col gap-2 -translate-y-1/2 p-6 bg-gray-600 rounded-none md:rounded-2xl top-1/2 left-1/2 -translate-x-1/2 absolute z-50">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold items-center flex gap-2 select-none">
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
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          Site settings
        </h2>
        <button on:click={() => (selectedLink = null)}>
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
          Title
        </label>
        <input
          class="w-full h-8 text-lg bg-gray-500 outline-none"
          type="text"
          placeholder="My website"
          bind:value={$settings.links[selectedLink].name} />
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
          URL
        </label>
        <input
          class="w-full h-8 text-lg bg-gray-500 outline-none"
          type="text"
          placeholder="https://website.com/"
          bind:value={$settings.links[selectedLink].link} />
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
          Image URl
        </label>
        <input
          class="w-full h-8 text-lg bg-gray-500 outline-none"
          type="text"
          placeholder="https://website.com/logo.png"
          bind:value={$settings.links[selectedLink].image} />
      </div>
    </div>
  </div>
{/if}
