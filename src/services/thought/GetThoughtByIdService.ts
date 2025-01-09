import { NotFoundError } from "../../middlewares/NotFoundError";
import prismaClient from "../../prisma";

class GetThoughtByIdService {
  async getThoughtById({ id }: ThoughtByIdProps) {
    if (!id) {
      throw new Error("Id required");
    }

    const thought = await prismaClient.thought.findFirst({
      where: {
        id: id,
      },
    });

    if (!thought) {
      throw new NotFoundError(`Thought (id: ${id}) not found`);
    }

    return thought;
  }
}

export { GetThoughtByIdService };
