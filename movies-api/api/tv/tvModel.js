import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TvSeriesSchema = new Schema({
  backdrop_path: { type: String },
  first_air_date: { type: String },  
  genre_ids: [{ type: Number }],
  id: { type: Number, required: true, unique: true },
  name: { type: String },  
  origin_country: [{ type: String }], 
  original_language: { type: String },
  original_name: { type: String },  
  overview: { type: String },
  popularity: { type: Number },
  poster_path: { type: String },
  vote_average: { type: Number },
  vote_count: { type: Number },
  seasons: [{ 
    air_date: { type: String },
    episode_count: { type: Number },
    id: { type: Number },
    name: { type: String },
    overview: { type: String },
    poster_path: { type: String },
    season_number: { type: Number }
  }],  
  episode_run_time: [{ type: Number }],  
  status: { type: String },  
  tagline: { type: String },
  type: { type: String },  
});

TvSeriesSchema.statics.findBySeriesDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('TvSeries', TvSeriesSchema);
