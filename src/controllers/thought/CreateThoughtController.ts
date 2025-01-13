import { z } from "zod";
import { FastifyRequest, FastifyReply } from "fastify";
import { CreateThoughtService } from "../../services/thought/CreateThoughtService";

const thoughtSchema = z.object({
    author: z.string().nonempty({ message: "Author cannot be empty." }),
    saying: z
        .string()
        .nonempty({ message: "Saying cannot be empty." })
        .max(256, "Thought must not exceed 256 characters."),
});

class CreateThoughtController {
    async createThought(request: FastifyRequest, reply: FastifyReply) {
        try {
            const validatedData = thoughtSchema.parse(request.body);
            const thoughtService = new CreateThoughtService();
            const thought = await thoughtService.createThought(validatedData);

            reply.status(201).send(thought);
        } catch (error: any) {
            return reply.status(400).send({ message: error.errors[0].message });
        }
    }
}

export { CreateThoughtController };
