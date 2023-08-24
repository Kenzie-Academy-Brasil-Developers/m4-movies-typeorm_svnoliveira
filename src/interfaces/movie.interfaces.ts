import { z } from "zod";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";
import { Movie } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type MovieCreate = z.infer<typeof movieCreateSchema>;
type MovieRead = Movie[];
type MovieUpdate = DeepPartial<Movie>;
type MovieRepo = Repository<Movie>;

export { MovieCreate, MovieRead, MovieUpdate, MovieRepo };