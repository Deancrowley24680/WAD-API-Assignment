import fetch from 'node-fetch';

export const getUpcomingMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getTrendingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_KEY}`
      ).then((response) => {
        if (!response.ok) throw new Error(response.json().message);
        return response.json();
    }).catch((e) => {
        throw e
    });
};

export const getUpcomingSeries = () => {
    return fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
};

export const getTrendingSeries = () => {
    return fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) throw new Error(response.json().message);
        return response.json();
    }).catch((e) => {
        throw e;
    });
};
