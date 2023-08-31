import React from "react";
import { getPopularActors } from "../api/tmdb-api";
import PageTemplate from "../components/templateActorListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const PopularActorsPage = (props) => {
  
  const { data, error, isLoading, isError } = useQuery('popular-actors', getPopularActors);

  console.log("Fetched data:", data);


  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const actors = data.results 

  // Redundant, but necessary to avoid app crashing.
  const favourites = actors.filter(m => m.favourite);
  localStorage.setItem('favourites', JSON.stringify(favourites));
  const addToFavourites = (movieId) => true;

  return (
    <PageTemplate
      title="Discover Popular Actors"
      actors={actors}
      action={(actor) => {
        return <AddToFavouritesIcon actor={actor} />
      }}
    />
  );
  
};

export default PopularActorsPage;
