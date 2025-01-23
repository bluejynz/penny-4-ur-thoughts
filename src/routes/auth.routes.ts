import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply,
} from "fastify";
import { RegisterController } from "../controllers/auth/RegisterController";
import { LoginController } from "../controllers/auth/LoginController";

export async function authRoutes(
    fastify: FastifyInstance,
    options: FastifyPluginOptions
) {
    fastify.post(
        "/register",
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new RegisterController().register(request, reply);
        }
    );

    fastify.post(
        "/login",
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new LoginController().login(request, reply);
        }
    );
}
