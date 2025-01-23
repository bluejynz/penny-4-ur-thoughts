import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { routes } from "./routes";

const port = Number(process.env.PORT) || 3333;

const app = fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    if (error.name === "NotFoundError") {
        reply.code(404).send({ message: error.message });
    } else if (error.name === "UnauthorizedError") {
        reply.code(401).send({ message: error.message });
    } else {
        reply.code(400).send({ message: error.message });
    }
});

const start = async () => {
    await app.register(fastifyCors);
    await app.register(routes);

    try {
        await app.listen({ port, host: "0.0.0.0" });
    } catch (error) {
        process.exit(1);
    }
};

start();
