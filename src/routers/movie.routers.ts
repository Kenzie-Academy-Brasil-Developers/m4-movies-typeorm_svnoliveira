import { Router } from "express";
import { movieControllers } from "../controllers";
import { bodyMiddlewares, movieMiddlewares } from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";

const movieRouter: Router = Router();

movieRouter.post("",
bodyMiddlewares.validate(movieCreateSchema),
movieMiddlewares.nameExists,
movieControllers.create);

movieRouter.get("", movieControllers.read);

movieRouter.patch("/:id",
bodyMiddlewares.validate(movieUpdateSchema),
movieMiddlewares.idExists,
movieMiddlewares.nameExists,
movieControllers.update);

movieRouter.delete("/:id", 
movieMiddlewares.idExists,
movieControllers.destroy);

export  default movieRouter;