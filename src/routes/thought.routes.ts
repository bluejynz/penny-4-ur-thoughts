import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply,
} from "fastify";
import { ListThoughtsController } from "../controllers/thought/ListThoughtsController";
import { GetThoughtByIdController } from "../controllers/thought/GetThoughtByIdController";
import { CreateThoughtController } from "../controllers/thought/CreateThoughtController";
import { UpdateThoughtController } from "../controllers/thought/UpdateThoughtController";
import { DeleteThoughtController } from "../controllers/thought/DeleteThoughtController";

export async function thoughtRoutes(
    fastify: FastifyInstance,
    options: FastifyPluginOptions
) {
    const prefix = "/thought";

    fastify.get(
        `${prefix}`,
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new ListThoughtsController().listThoughts(request, reply);
        }
    );

    fastify.get(
        `${prefix}/id/:id`,
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new GetThoughtByIdController().getThoughtById(
                request,
                reply
            );
        }
    );

    fastify.post(
        `${prefix}`,
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new CreateThoughtController().createThought(request, reply);
        }
    );

    fastify.patch(
        `${prefix}/id/:id`,
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new UpdateThoughtController().updateThought(request, reply);
        }
    );

    fastify.delete(
        `${prefix}/id/:id`,
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new DeleteThoughtController().deleteThought(request, reply);
        }
    );
}
