import { z} from "zod";


export const createUserSchema = z.object({
    email : z.string().email("Invalid email address"),
    name : z.string().min(1,'name is required').max(100,"Must be less than 100 characters"),
    password: z.string().min(6)

});

export const updateUserSchema = z.object({
    email : z.email("Invalid email address").optional(),
    name : z.string().min(1,'name is required').max(100,"Must be less than 100 characters").optional(),
}).refine((data) => data.email ! == undefined || data.name ! == undefined , {
    message : "Atleast one field must be provided",
});


export type CreateUserDto = z.infer<typeof createUserSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;


