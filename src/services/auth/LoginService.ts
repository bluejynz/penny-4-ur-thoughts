import prismaClient from "../../prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class LoginService {
    async login({ email, password }: LoginProps) {
        if (!email || !password) {
            throw new Error("Missing required fields");
        }

        const user = await prismaClient.user.findUnique({
            where: { email },
        });

        if (!user) {
            throw new Error("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET ?? "", {
            expiresIn: "1d",
        });

        const { password: _, ...userLogin } = user;

        return {
            user: userLogin,
            token: token,
        };
    }
}

export { LoginService };
