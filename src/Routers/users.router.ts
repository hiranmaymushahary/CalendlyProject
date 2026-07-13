import { Router } from "express";
import {createUser ,findAllUsers, findById, updateUser  } from "../controllers/user.controller.js";
import { createUserSchema, updateUserSchema } from "../dtos/user.dto.js";
import {validate} from "../Middlewares/validate.js"
import { deleteUser } from "../services/users.service.js";


export const userRouter:Router = Router();

userRouter.get('/',findAllUsers);

userRouter.get("/:id",findById);

userRouter.post("/" ,validate(createUserSchema), createUser);


userRouter.patch("/" ,validate(updateUserSchema), updateUser);


userRouter.delete("/:id",deleteUser);