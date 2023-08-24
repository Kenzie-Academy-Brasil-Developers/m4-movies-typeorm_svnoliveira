import { Movie } from "../entities"
import { MovieCreate, MovieRead, MovieUpdate, PaginationParams } from "../interfaces";
import { movieRepository } from "../repositories";

const create = async (payload: MovieCreate): Promise<Movie> => {
    return await movieRepository.save(payload);
};

const read = async ({ 
    page, 
    nextPage, 
    prevPage, 
    perPage, 
    sort, 
    order 
}:PaginationParams): Promise<any> => {
    const [ movies, count ]: Array<MovieRead | number> = 
    await movieRepository.findAndCount({ 
        order: {[sort]: order},
        skip: page,
        take: perPage
    });

    return {
        prevPage: page <= 1 ? null: prevPage,
        nextPage: count - page <= perPage? null : nextPage,
        count,
        data: movies
    };
};

const update = async (movie: Movie, payload: MovieUpdate): Promise<Movie> => {

    return await movieRepository.save({...movie, ...payload});
};

const destroy = async (movie: Movie): Promise<void> => {
     await movieRepository.remove(movie);
};

export default { create, read, update, destroy };