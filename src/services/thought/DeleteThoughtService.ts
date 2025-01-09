import { NotFoundError } from "../../middlewares/NotFoundError";
import prismaClient from "../../prisma";

class DeleteThoughtService {
  async deleteThought({ id }: ThoughtByIdProps) {
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

    await prismaClient.thought.delete({
      where: {
        id: thought.id,
      },
    });

    return { message: `Thought (id: ${thought.id}) deleted!` };
  }
}

export { DeleteThoughtService };
