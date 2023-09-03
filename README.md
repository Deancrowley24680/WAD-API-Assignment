# Assignment 2 - Web API.

Name: Dean Crowley (20089889)

## Features.
 
 + Feature 1 - API Routes for TV Series 
 + Feature 2 - Integration with React App from Assignment 1
 + Feature 3 - Login & Signup Pages Introduced to React App
 + Feature 4 - User Authentication Introduced to React App


## Installation Requirements

```bat
git clone https://github.com/Deancrowley24680/WAD-API-Assignment.git
```

Installation in both the 'movies-api' & 'moviesApp' directories:

```bat
npm install
```
&

```bat
npm run
```

## API Configuration

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://localhost:27017/movies_db
SEED_DB=True
SECRET='YOURSECRET'
TMDB_KEY='YOURKEY'
```


## API Design

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/movies/tmdb/upcoming | Get all upcoming movies | N/A | N/A | N/A 
| /api/movies/tmdb/trending | Get all trending movies | N/A | N/A | N/A
| /api/users | Get all list of all users | Register OR authenticate a user | N/A | N/A
| /api/users/:id | N/A | N/A | Update any user | N/A
| /api/users/:userName/favourites | Get a list of that user's favourites | Add a favourite | N/A | N/A
| /api/users/:userName/watchlist | Get a list of that user's watchlist | Add a movie to the watchlist | N/A | N/A
| /api/genres | Get all genres | N/A | N/A | N/A
| /api/tv |Gets a list of TV Series | N/A | N/A |
| /api/tv/{tvid} | Get a TV Series | N/A | N/A | N/A
| /api/tv/{tvid}/reviews | Get all reviews for a TV Series | Create a new review for a TV Series | N/A | N/A  
| /api/tv/tmdb/upcoming | Get all upcoming TV Series | N/A | N/A | N/A 
| /api/tv/tmdb/trending | Get all trending TV Series | N/A | N/A | N/A



## Security and Authentication
This app uses JWT Tokens for authenticating logins. On the React app, each page bar the Home page requires authentication to access.

## Integrating with React App 

~~~Javascript
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

~~~

 
