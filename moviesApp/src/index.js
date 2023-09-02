import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import PopularActorsPage from "./pages/popularActorsPage";
import PopularTVPage from "./pages/popularTVPage";
import SignUpPage from "./pages/signupPage";
import LoginPage from "./pages/loginPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TVDetailsPage from "./pages/tvDetailsPage";
import AuthContextProvider from "./contexts/authContext";
import PrivateRoute from "./privateRoute";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/tv/:id" element={<PrivateRoute><TVDetailsPage /></PrivateRoute>} />
              <Route path="/tv/popular" element={<PrivateRoute><PopularTVPage /></PrivateRoute>} />
              <Route path="/person/popular-actors" element={<PrivateRoute><PopularActorsPage /></PrivateRoute>} />
              <Route path="/movies/popular" element={<PrivateRoute><PopularMoviesPage /></PrivateRoute>} />
              <Route path="/reviews/form" element={<PrivateRoute><AddMovieReviewPage/></PrivateRoute>} />
              <Route path="/movies/upcoming" element={<PrivateRoute><UpcomingMoviesPage /></PrivateRoute>} />
              <Route path="/reviews/:id" element={<PrivateRoute><MovieReviewPage /></PrivateRoute>} />
              <Route path="/movies/favourites" element={<PrivateRoute><FavouriteMoviesPage /></PrivateRoute>} />
              <Route path="/movies/:id" element={<PrivateRoute><MoviePage /></PrivateRoute>} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
