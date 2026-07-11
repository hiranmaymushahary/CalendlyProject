import {getAll, getById} from "../repositories/user.repository.js";

import {notFound} from "../utils/api-error.js"

export async function findAllUsers() {

    const users = await getAll();

    return users;
    
}

export async function findById(id:number) {
    console.log("Inside service")
    const user = await getById(id);
    return user;

    if (!user){
        throw notFound("User not found");
    }
    return user;
}

