 import { Request,Response , NextFunction } from "express";
 import { Apierror } from "../utils/api-error.js";
import { success } from "zod";
 
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

    res.status(500).json(body);
    



}