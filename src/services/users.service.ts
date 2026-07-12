import { CreateUserDto } from "../dtos/user.dto.js";
import {findByEmail, getAll, getById , create} from "../repositories/user.repository.js";

import { notFound, conflict } from "../utils/api-error.js"

export async function findAllUsers() {

    const users = await getAll();

    return users;
    
}

export async function findById(id:number) {
    console.log("Inside service")
    const user = await getById(id);
    

    if (!user){
        throw notFound("User not found");
    }
    return user;
}


export async function createUser(data:CreateUserDto){
    const existinguser = await findByEmail(data.email);
    if(existinguser){
        throw conflict("user already exist");
    }

    return create(data);

    
}

 