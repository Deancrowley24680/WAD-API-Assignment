import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function TVCard({ tv }) {
 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={
          <Typography variant="h5" component="p">
            {tv.name}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} 
      />
      <CardActions disableSpacing>
        <Link to={`/tv/${tv.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
