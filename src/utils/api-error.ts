export class Apierror extends Error {
     readonly statusCode:number;
     readonly details?: unknown;

     constructor(statusCode:number , message :string, details?:unknown){
        super(message);
        this.statusCode=statusCode;
        this.details = details;
        this.name = "Apierror";

        Error.captureStackTrace(this,this.constructor);
     }

     
} 

export const badRequest = (message: string, details?: unknown) => new Apierror(400, message, details);
export const notFound = (message: string, details?: unknown) => new Apierror(404, message, details);
export const internalServerError = (message = "Internal server error") => new Apierror(500, message);
export const unauthorized = (message: string, details?: unknown) => new Apierror(401, message, details);
export const forbidden = (message: string, details?: unknown) => new Apierror(403, message, details);
export const conflict = (message: string, details?: unknown) => new Apierror(409, message, details);
