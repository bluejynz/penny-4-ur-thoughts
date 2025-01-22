import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { thoughtRoutes } from "./routes/thought.routes";

export async function routes(
    fastify: FastifyInstance,
    options: FastifyPluginOptions
) {
    await fastify.register(thoughtRoutes);
}
