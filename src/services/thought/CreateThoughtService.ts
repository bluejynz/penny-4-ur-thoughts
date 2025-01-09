import prismaClient from "../../prisma";

class CreateThoughtService {
  async createThought({ author, saying }: CreateThoughtProps) {
    if (!author || !saying) {
      throw new Error("Missing required fields");
    }

    const thought = await prismaClient.thought.create({
      data: {
        author: author,
        saying: saying,
      },
    });

    return thought;
  }
}

export { CreateThoughtService };
