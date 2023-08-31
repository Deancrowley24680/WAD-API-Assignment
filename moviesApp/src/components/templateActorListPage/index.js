import React from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({ actors }) {
  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title="Actors" />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList actors={actors} />
      </Grid>
    </Grid>
  );
}

export default ActorListPageTemplate;
