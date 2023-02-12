const fastify = require("fastify")({ logger: true });
fastify.get("/", async function (requ, res) {
  return "hello world";
});
const start = async () => {
  try {
    await fastify.listen({ port: 4000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
start();
