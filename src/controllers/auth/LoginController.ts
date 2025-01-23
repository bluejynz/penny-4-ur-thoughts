import { z } from "zod";
import { FastifyRequest, FastifyReply } from "fastify";
import { LoginService } from "../../services/auth/LoginService";

const loginSchema = z.object({
    email: z
        .string()
        .nonempty("Email is required.")
        .email("Invalid email format."),
    password: z.string().nonempty("Password is required."),
});

class LoginController {
    async login(request: FastifyRequest, reply: FastifyReply) {
        try {
            const validatedData = loginSchema.parse(request.body);
            const loginService = new LoginService();
            const user = await loginService.login(validatedData);

            reply.status(201).send(user);
        } catch (error: any) {
            return reply.status(400).send({ message: error.errors[0].message });
        }
    }
}

export { LoginController };
