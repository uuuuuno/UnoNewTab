import { writable } from 'svelte/store';

const settings = writable(
  JSON.parse(localStorage.getItem('settings')) || {
    searchEngine: 'google',
    customEngine: '',
    links: [
      {
        name: 'Youtube',
        link: 'https://www.youtube.com/',
        image: 'https://www.gstatic.com/youtube/img/branding/favicon/favicon_192x192.png'
      },
      {
        name: 'Spotify',
        link: 'https://open.spotify.com/',
        image: 'https://open.scdn.co/cdn/images/icons/Spotify_512.49a0bf03.png'
      },
      {
        name: 'Gmail',
        link: 'https://gmail.com',
        image: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico'
      },
      {
        name: 'Netflix',
        link: 'https://www.netflix.com/',
        image: 'https://img.icons8.com/color/344/netflix.png'
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/',
        image:
          'https://abs.twimg.com/responsive-web/client-web/icon-default-maskable-large.ee2b7aa5.png'
      },
      {
        name: 'Reddit',
        link: 'https://www.reddit.com/',
        image: 'https://www.redditstatic.com/desktop2x/img/favicon/android-icon-512x512.png'
      }
    ]
  }
);

settings.subscribe(data => localStorage.setItem('settings', JSON.stringify(data)));

export default settings;
