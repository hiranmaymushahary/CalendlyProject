import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto.js";
import { findByEmail, getAll, getById, create, update, remove } from "../repositories/user.repository.js";
import { notFound, conflict } from "../utils/api-error.js";

export async function findAllUsers() {
    const users = await getAll();
    return users;
}

export async function findById(id: number) {
    console.log("Inside service");
    const user = await getById(id);

    if (!user) {
        throw notFound("User not found");
    }
    return user;
}

export async function createUser(data: CreateUserDto) {
    const existinguser = await findByEmail(data.email);
    if (existinguser) {
        throw conflict("user already exist");
    }

    return create(data);
}

export async function updateUser(id: number, data: UpdateUserDto) {
    const user = await getById(id);
    if (!user) {
        throw notFound("user not found");
    }

    if (data.email && data.email !== user.email) {
        const existinguser = await findByEmail(data.email);
        if (existinguser) {
            throw conflict("user already exist");
        }
    }

    return update(id, data);
}

export async function deleteUser(id: number) {
    const user = await getById(id);
    if (!user) {
        throw notFound("user not found");
    }

    return remove(id);
}