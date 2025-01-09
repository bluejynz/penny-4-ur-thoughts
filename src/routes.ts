import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { ListThoughtsController } from "./controllers/thought/ListThoughtsController";
import { GetThoughtByIdController } from "./controllers/thought/GetThoughtByIdController";
import { CreateThoughtController } from "./controllers/thought/CreateThoughtController";
import { DeleteThoughtController } from "./controllers/thought/DeleteThoughtController";
import { UpdateThoughtController } from "./controllers/thought/UpdateThoughtController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/thoughts",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListThoughtsController().listThoughts(request, reply);
    }
  );

  fastify.get(
    "/thought/id/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new GetThoughtByIdController().getThoughtById(request, reply);
    }
  );

  fastify.post(
    "/thought",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateThoughtController().createThought(request, reply);
    }
  );

  fastify.patch(
    "/thought/id/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdateThoughtController().updateThought(request, reply);
    }
  );

  fastify.delete(
    "/thought/id/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteThoughtController().deleteThought(request, reply);
    }
  );
}
