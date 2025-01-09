import { FastifyRequest, FastifyReply } from "fastify";
import { CreateThoughtService } from "../../services/thought/CreateThoughtService";

class CreateThoughtController {
  async createThought(request: FastifyRequest, reply: FastifyReply) {
    const { author, saying } = request.body as CreateThoughtProps;
    const thoughtService = new CreateThoughtService();
    const thought = await thoughtService.createThought({author, saying});

    reply.status(201).send(thought);
  }
}

export { CreateThoughtController };
