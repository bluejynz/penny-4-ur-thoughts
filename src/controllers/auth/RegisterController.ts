import { z } from "zod";
import { FastifyRequest, FastifyReply } from "fastify";
import { RegisterService } from "../../services/auth/RegisterService";

const userSchema = z.object({
    name: z
        .string({ required_error: "Name is required." })
        .nonempty("Name cannot be empty.")
        .min(2, "Name must be at least 2 characters long."),
    email: z
        .string({ required_error: "Email is required." })
        .nonempty("Email cannot be empty.")
        .email("Invalid email format."),
    password: z
        .string({ required_error: "Password is required." })
        .nonempty("Password cannot be empty.")
        .min(8, "Password must be at least 8 characters long.")
        .max(50, "Password must not exceed 50 characters.")
        .regex(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            "Password must include uppercase, lowercase, number, and special character."
        ),
});

class RegisterController {
    async register(request: FastifyRequest, reply: FastifyReply) {
        try {
            const validatedData = userSchema.parse(request.body);
            const registerService = new RegisterService();
            const user = await registerService.register(validatedData);

            reply.status(201).send(user);
        } catch (error: any) {
            console.log(error);

            return reply.status(400).send({ message: error.errors[0].message });
        }
    }
}

export { RegisterController };
