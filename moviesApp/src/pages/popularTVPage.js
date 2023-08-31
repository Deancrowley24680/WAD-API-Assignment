import React from "react";
import { getPopularTV } from "../api/tmdb-api"; 
import PageTemplate from "../components/templateTVListPage"; 
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'; 

const PopularTVPage = (props) => {
  
  const { data, error, isLoading, isError } = useQuery('popular-tv', getPopularTV); 

  console.log("Fetched data:", data);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const tvSeries = data.results 


  const favourites = tvSeries.filter(tv => tv.favourite);
  localStorage.setItem('tv-favourites', JSON.stringify(favourites)); 
  const addToFavourites = (tvId) => true;

  return (
    <PageTemplate
      title="Discover Popular TV Series"
      tvSeries={tvSeries} 
      action={(tv) => {
        return <AddToFavouritesIcon tv={tv} />
      }}
    />
  );
};

export default PopularTVPage;
