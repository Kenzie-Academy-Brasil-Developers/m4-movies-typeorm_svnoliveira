import { Request, Response } from "express";
import { Movie } from "../entities";
import { movieServices } from "../services";
import { MovieRead } from "../interfaces";


const create = async ( req: Request, res: Response ): Promise<Response> => {
    const movie: Movie = await movieServices.create(req.body);

    return res.status(201).json(movie);
};

const read = async ( req: Request, res: Response ): Promise<Response> => {
    const { pagination } = res.locals;
    const movies: MovieRead = await movieServices.read(pagination);

    return res.status(200).json(movies);
};

const update = async ( req: Request, res: Response ): Promise<Response> => {
    const { movie } = res.locals;
    const { body } = req;

    const newMovie = await movieServices.update(movie, body);
    return res.status(200).json(newMovie);
};

const destroy = async ( req: Request, res: Response ): Promise<Response> => {
    const movie: Movie = res.locals.movie;
    await movieServices.destroy(movie);
    return res.status(204).send();
};

export default { create, read, update, destroy };