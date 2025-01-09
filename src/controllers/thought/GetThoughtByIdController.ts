import { FastifyRequest, FastifyReply } from "fastify";
import { GetThoughtByIdService } from "../../services/thought/GetThoughtByIdService";

class GetThoughtByIdController {
  async getThoughtById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as ThoughtByIdProps;
    const getThoughtByIdService = new GetThoughtByIdService();

    const thought = await getThoughtByIdService.getThoughtById({ id });

    reply.send(thought);
  }
}

export { GetThoughtByIdController };
