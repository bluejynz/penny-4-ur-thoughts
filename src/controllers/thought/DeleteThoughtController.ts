import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteThoughtService } from "../../services/thought/DeleteThoughtService";

class DeleteThoughtController {
  async deleteThought(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as ThoughtByIdProps;
    const deleteThoughtService = new DeleteThoughtService();

    const thought = await deleteThoughtService.deleteThought({ id });

    reply.send(thought);
  }
}

export { DeleteThoughtController };
