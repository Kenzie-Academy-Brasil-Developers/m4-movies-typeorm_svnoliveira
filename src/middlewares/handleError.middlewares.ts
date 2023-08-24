import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors';
import { ZodError } from 'zod';

const handleErrors = (
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
): Response => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
    };

    if (error instanceof ZodError) {
        const message = error.flatten().fieldErrors;
        return res.status(400).json({message});
    };

    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
};

export default { handleErrors };