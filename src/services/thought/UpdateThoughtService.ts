import { NotFoundError } from "../../middlewares/NotFoundError";
import prismaClient from "../../prisma";

class UpdateThoughtService {
  async updateThought({ id, saying }: UpdateThoughtByIdProps) {
    if (!id) {
      throw new Error("Id required");
    }

    if (!saying) {
      throw new Error("Missing required field");
    }

    const thought = await prismaClient.thought.findFirst({
      where: {
        id: id,
      },
    });

    if (!thought) {
      throw new NotFoundError(`Thought (id: ${id}) not found`);
    }

    const updatedThought = await prismaClient.thought.update({
      where: {
        id: id,
      },
      data: {
        saying: saying,
      },
    });

    return updatedThought;
  }
}

export { UpdateThoughtService };
