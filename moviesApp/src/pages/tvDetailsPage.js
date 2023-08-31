import React from "react";
import { useParams } from 'react-router-dom';
import TVDetails from "../components/tvDetails/"; 
import TVPageTemplate from "../components/templateTVPage"; 
import { getTV } from '../api/tmdb-api'; 
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const TVDetailsPage = (props) => {
  const { id } = useParams();

  const { data: tv, error, isLoading, isError } = useQuery(
    ["tv", { id: id }],
    getTV
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <TVPageTemplate tv={tv}>
            <TVDetails tv={tv} />
          </TVPageTemplate>
        </>
      ) : (
        <p>Waiting for TV series details</p>
      )}
    </>
  );
};

export default TVDetailsPage;
