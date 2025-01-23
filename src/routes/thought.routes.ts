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
import { authenticate } from "../middlewares/Authenticate";

export async function thoughtRoutes(
    fastify: FastifyInstance,
    options: FastifyPluginOptions
) {
    fastify.get(
        "/",
        { preHandler: authenticate },
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new ListThoughtsController().listThoughts(request, reply);
        }
    );

    fastify.get(
        "/id/:id",
        { preHandler: authenticate },
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new GetThoughtByIdController().getThoughtById(
                request,
                reply
            );
        }
    );

    fastify.post(
        "/",
        { preHandler: authenticate },
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new CreateThoughtController().createThought(request, reply);
        }
    );

    fastify.patch(
        "/id/:id",
        { preHandler: authenticate },
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new UpdateThoughtController().updateThought(request, reply);
        }
    );

    fastify.delete(
        "/id/:id",
        { preHandler: authenticate },
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new DeleteThoughtController().deleteThought(request, reply);
        }
    );
}
