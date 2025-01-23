import { FastifyReply, FastifyRequest } from "fastify";

export async function authenticate(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            return reply
                .status(401)
                .send({ message: "Missing authorization." });
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return reply.status(401).send({ message: "Missing token." });
        }
    } catch (error) {
        return reply.status(401).send({ message: "Invalid or expired token." });
    }
}
