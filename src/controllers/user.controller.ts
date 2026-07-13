import {Request , Response} from "express";
import {findAllUsers as findAllUsersService , findById as findByIdService , createUser as createUserService ,updateUser as updateUserService , deleteUser as deleteUserService} from "../services/users.service.js";
import { sendSuccess } from "../utils/api-response.js";

export async function findAllUsers(_req:Request , res:Response){
    const response = await findAllUsersService();
    sendSuccess(res,response);


}

export async function findById(req:Request , res:Response){
    const { id } = req.params;
    console.log("Inside controller");
    const response = await findByIdService (Number(id));
    sendSuccess(res,response);
}

export async function createUser(req:Request , res:Response) {
    const newUser = await createUserService(req.body)
    sendSuccess(res , newUser, 201 , "User created sccesfully");
    
    
}

export async function updateUser(req:Request , res:Response) {
    const {id} = req.params;
    const updateUser = await updateUserService(Number(id),req.body);
    sendSuccess(res , updateUser, 200 , "User updated sccesfully");
    
    
}
 

export async function deleteUser(req:Request , res:Response) {
    const {id} = req.params;
    const deleteUser = await deleteUserService(Number(id));
    sendSuccess(res , deleteUser, 200 , "User deleted sccesfully");
    
}
 
 