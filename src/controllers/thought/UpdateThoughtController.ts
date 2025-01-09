import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateThoughtService } from "../../services/thought/UpdateThoughtService";

class UpdateThoughtController  {
  async updateThought (request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as ThoughtByIdProps;
    const { saying } = request.body as UpdateThoughtProps;
    const updateThoughtService = new UpdateThoughtService();

    const thought = await updateThoughtService.updateThought({ id, saying });

    reply.send(thought);
  }
}

export { UpdateThoughtController  };
