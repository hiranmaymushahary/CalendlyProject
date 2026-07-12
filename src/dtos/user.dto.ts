import { z} from "zod";


export const createUserSchema = z.object({
    email : z.string().email("Invalid email address"),
    name : z.string().min(1,'name is required').max(100,"Must be less than 100 characters"),
    password: z.string().min(6)

});


export type CreateUserDto = z.infer<typeof createUserSchema>;