const GLOBAL_CONFIG = new Config({
  temperature: {
    location: 'New York',
    scale: 'F'
  },
  clock: 'h:i p',
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  }
});
