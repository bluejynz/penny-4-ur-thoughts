import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateThoughtController } from "./controllers/CreateThoughtController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    }
  );

  fastify.post(
    "/thought",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateThoughtController().createThoughtController(
        request,
        reply
      );
    }
  );
}
