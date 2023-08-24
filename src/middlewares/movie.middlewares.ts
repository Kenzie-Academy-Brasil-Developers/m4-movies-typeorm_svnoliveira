import "express-async-errors"
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { MovieRepo } from "../interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";


const nameExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const requestName: string = req.body.name;
    const movieRepository: MovieRepo = AppDataSource.getRepository(Movie);
    
    const foundName = await movieRepository.findOne({
        where: {
            name: requestName
        }
    });

    if (!foundName) {
        console.log("name validated")
        return next();
    } else {
        throw new AppError("Movie already exists.", 409);
    };
};

const idExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const idTarget = Number(req.params.id);
    const movieRepository: MovieRepo = AppDataSource.getRepository(Movie);

    const movie = await movieRepository.findOne({
        where: {
            id: idTarget
        }
    });
    
    if (movie) {
        res.locals.movie = movie;
        console.log("id validated")
        return next();
    } else {
        throw new AppError("Movie not found", 404);
    };
};

export default { nameExists, idExists };