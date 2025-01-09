import prismaClient from "../prisma";

class CreateThoughtService {
  async createThoughtService({ author, saying }: CreateThoughtProps) {
    if (!author || !saying) {
      throw new Error("Missing required fields");
    }

    const thought = await prismaClient.thought.create({
      data: {
        author: author,
        saying: saying,
      },
    });

    console.log(`${author} says '${saying}'`);
    return thought;
  }
}

export { CreateThoughtService };
