
import { AppDataSource } from './data-source';
import { Movie } from './entities';
import { MovieRepo } from './interfaces';

const movieRepository: MovieRepo = AppDataSource.getRepository(Movie);

export { movieRepository };