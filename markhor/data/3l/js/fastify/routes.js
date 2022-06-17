// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});
