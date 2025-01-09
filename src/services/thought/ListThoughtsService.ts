import prismaClient from "../../prisma";

class ListThoughtsService {
  async listThoughts() {
    const thoughts = await prismaClient.thought.findMany();

    return thoughts;
  }
}

export { ListThoughtsService };
