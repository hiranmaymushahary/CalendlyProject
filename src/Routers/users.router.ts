import { Router } from "express";
import { findAllUsers } from "../services/users.service.js";

export const userRouter:Router = Router();

userRouter.get('/',findAllUsers)