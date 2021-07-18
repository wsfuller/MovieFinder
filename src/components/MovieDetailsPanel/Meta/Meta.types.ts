import { IMovie } from '../../../redux/movies/movies';

interface IMetaProps {
  budget: IMovie['budget'];
  revenue: IMovie['revenue'];
  runtime: IMovie['runtime'];
  releaseDate: IMovie['release_date'];
  status: IMovie['status'];
  homepage: IMovie['homepage'];
  imdbId: IMovie['imdb_id'];
  productionCompanies: IMovie['production_companies'];
}

export default IMetaProps;
