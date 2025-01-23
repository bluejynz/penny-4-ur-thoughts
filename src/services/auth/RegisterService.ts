import prismaClient from "../../prisma";
import bcrypt from "bcrypt";

class RegisterService {
    async register({ name, email, password }: CreateUserProps) {
        if (!name || !email || !password) {
            throw new Error("Missing required fields");
        }

        const userExists = await prismaClient.user.findUnique({
            where: { email },
        });

        if (userExists) {
            throw new Error("User already exists");
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPass,
            },
        });

        const {password: _, ...user} = newUser;

        return user;
    }
}

export { RegisterService };
