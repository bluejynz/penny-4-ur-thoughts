import { FastifyRequest, FastifyReply } from "fastify";
import { ListThoughtsService } from "../../services/thought/ListThoughtsService";

class ListThoughtsController {
  async listThoughts(request: FastifyRequest, reply: FastifyReply) {
    const listThoughtsService = new ListThoughtsService();

    const thoughts = await listThoughtsService.listThoughts();
    
    reply.send(thoughts);
  }
}

export { ListThoughtsController };
