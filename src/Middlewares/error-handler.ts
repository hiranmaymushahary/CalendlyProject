 import { Request,Response , NextFunction } from "express";
 import { Apierror } from "../utils/api-error.js";
import { success } from "zod";
import { NODE_ENV } from "../config/env.js";
 
 export function errorhandler(err : Error , _req : Request , res : Response , _next: NextFunction ){

    if (err instanceof Apierror){
        const body : Record<string , unknown> ={
            success : false,
             message : err.message,



        }
        if (err.details) body.details = err.details;
        res.status(err.statusCode).json(body);
        return;

        
    }

    console.error('[error]',err);

    const body : Record<string , unknown> ={
        success : false,
        message : "something went wrong",




    }

    //if(NODE_ENV ==  "development") body.details = err.stack; // In local enviroment its ok  but in production we are not using these.

    res.status(500).json(body);




}