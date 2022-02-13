<script>
  import logo from './assets/logo.webp';
  import YandexLogo from './assets/yandex.svg';
  import GoogleLogo from './assets/google.svg';
  import SearchLogo from './assets/search.svg';
  import DuckduckgoLogo from './assets/duckduckgo.svg';
  import BraveLogo from './assets/brave.svg';
  import Link from './lib/Link.svelte';
  import SettingsMenu from './lib/SettingsMenu.svelte';
  import SettingsModal from './lib/SettingsModal.svelte';
  import settings from './lib/settings';

  let selectedLink = null,
    searchInputData = '',
    isSettingsMenuOpen = false;

  $: searchEngines = {
    yandex: { url: 'https://yandex.ru?q=', image: YandexLogo },
    google: { url: 'https://www.google.com/search?q=', image: GoogleLogo },
    duckduckgo: { url: 'https://duckduckgo.com?q=', image: DuckduckgoLogo },
    brave: { url: 'https://search.brave.com/search?q=', image: BraveLogo },
    custom: { url: $settings.customEngine, image: SearchLogo }
  };
</script>

<SettingsMenu bind:open={isSettingsMenuOpen} />
<SettingsModal bind:selectedLink />

<nav class="flex items-center justify-between max-w-7xl p-4 mx-auto">
  <a
    class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors duration-500 p-2"
    href="/">
    <img src={logo} alt="Waving hand" class="hover:rotate-12 transition-transform duration-500" />
  </a>
  <button
    title="Settings"
    class="text-gray-900 hover:text-white transition-all duration-500 hover:rotate-45"
    on:click={() => (isSettingsMenuOpen = !isSettingsMenuOpen)}>
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
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </button>
</nav>

<div class="sm:h-96 xl:h-full container mx-auto px-5">
  <div class="justify-center flex mt-12 md:mt-24 xl:mt-32 content-center pt-12 sm:pt-32 ">
    <div class="w-full max-w-7xl mx-2 px-4 md:mx-6">
      <form
        on:submit|preventDefault={() =>
          (window.location.href = `${searchEngines[$settings.searchEngine].url}${encodeURIComponent(
            searchInputData
          )}`)}
        class="flex items-center gap-2 bg-gray-600 border border-gray-600 hover:border-gray-800 border-1 transition-colors duration-500 hover:border-opacity-50 border-opacity-100 rounded-xl py-4 px-4">
        <img src={searchEngines[$settings.searchEngine].image} class="h-6 w-6" alt="logo" />
        <input
          bind:value={searchInputData}
          type="text"
          class="w-full border-0 outline-none text-gray-300 bg-gray-600 caret-pink-white"
          placeholder="Search..." />
      </form>
      <div
        class="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-6 mt-12 gap-10 mb-6 select-none">
        {#each $settings.links as link, i}
          <Link {...link} on:edit={() => (selectedLink = i)} />
        {/each}
      </div>
    </div>
  </div>
</div>
