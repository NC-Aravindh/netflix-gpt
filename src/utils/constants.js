export const NETFLIX_LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const LOGIN_BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_small.jpg"

export const USER_LOGIN_ICON = "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"

export const MOVIE_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_ACCESS_TOKEN
    }
  };

  export const TMDB_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w300/"

  export const TMDB_MOVIE_LIST_BASE_URL = "https://api.themoviedb.org/3/movie/"

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
