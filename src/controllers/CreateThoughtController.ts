import { FastifyRequest, FastifyReply } from "fastify";
import { CreateThoughtService } from "../services/CreateThoughtService";

class CreateThoughtController {
  async createThoughtController(request: FastifyRequest, reply: FastifyReply) {
    const { author, saying } = request.body as CreateThoughtProps;
    const thoughtService = new CreateThoughtService();
    const thought = await thoughtService.createThoughtService({author, saying});

    reply.send(thought);
  }
}

export { CreateThoughtController };
