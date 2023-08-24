import { Movie } from "../entities"
import { MovieCreate, MovieRead, MovieRepo, MovieUpdate } from "../interfaces";
import { movieRepository } from "../repositories";

const create = async (payload: MovieCreate): Promise<Movie> => {
    return await movieRepository.save(payload);
};

const read = async (): Promise<MovieRead> => {

    return await movieRepository.find();
};

const update = async (movie: Movie, payload: MovieUpdate): Promise<Movie> => {

    return await movieRepository.save({...movie, ...payload});
};

const destroy = async (movie: Movie): Promise<void> => {
     await movieRepository.remove(movie);
};

export default { create, read, update, destroy };