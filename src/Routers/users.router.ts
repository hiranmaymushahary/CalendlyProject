import { Router } from "express";
import { findAllUsers, findById } from "../services/users.service.js";

export const userRouter:Router = Router();

userRouter.get('/',findAllUsers);

userRouter.get("/:id",findById);


