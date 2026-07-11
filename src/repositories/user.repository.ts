import { prisma } from "../config/database.js";

export async function getAll() {
    const users = await prisma.user.findMany();
    return users;
}

export async function getById(id:number) {
    console.log('Inside Repository');
    const user = await prisma.user.findUnique({

    where :{
        id

    }
    });
    console.log("User :" , user);
    return user;

}