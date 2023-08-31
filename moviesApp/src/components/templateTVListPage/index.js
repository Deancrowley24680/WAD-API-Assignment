import React from "react";
import Header from "../headerMovieList";
import TVList from "../tvList";
import Grid from "@mui/material/Grid";

function TVListPageTemplate({ tvSeries }) {
  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title="TV Series" />
      </Grid>
      <Grid item container spacing={5}>
        <TVList tv={tvSeries} />
      </Grid>
    </Grid>
  );
}

export default TVListPageTemplate;