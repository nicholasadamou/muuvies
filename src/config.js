const config = {
    apiURL: {
      search: `https://api.themoviedb.org/3/search/movie`,
      movie: `https://api.themoviedb.org/3/movie`,
      popular: `https://api.themoviedb.org/3/movie/popular`
    },
    API_KEY: SuperAgent.get(process.env.TMDB_API_KEY),
    language: 'en'
  };

  export const BASE_NAME ='/muuvies';

  export const tmdb = 'https://www.themoviedb.org/static_cache/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png';

  export default config;