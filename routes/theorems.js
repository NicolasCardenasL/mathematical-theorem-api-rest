import { Router } from "express";
import { TheoremsController } from "../controllers/theorems.js";

export const theoremsRouter = Router()
theoremsRouter.get('/', TheoremsController.getAll)
theoremsRouter.get('/random', TheoremsController.getRandom)
theoremsRouter.get('/:id', TheoremsController.getById)
