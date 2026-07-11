 import { Request,Response , NextFunction } from "express";
 
 export function errorhandler(_err : Error , _req : Request , res : Response , _next: NextFunction ){

    res.json({message: "Something went wrong",

    })


 } 