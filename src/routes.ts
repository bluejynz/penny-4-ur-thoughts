import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { thoughtRoutes } from "./routes/thought.routes";
import { authRoutes } from "./routes/auth.routes";
import { authenticate } from "./middlewares/Authenticate";

export async function routes(
    fastify: FastifyInstance,
    options: FastifyPluginOptions
) {
    await fastify.register(thoughtRoutes, { prefix: "/thought" });
    await fastify.register(authRoutes, { prefix: "/auth" });
}
