import { Application } from "./Application";

const server = new Application();
server.startServer();
// const fastify = require("fastify")({ logger: true });
// fastify.get("/", async function (requ, res) {
//   return "hello world";
// });
// const start = async () => {
//   try {
//     await fastify.listen({ port: 3000 });
//     console.log("server start on port 3000");
//   } catch (error) {
//     fastify.log.error(error);
//     process.exit(1);
//   }
// };
// start();
