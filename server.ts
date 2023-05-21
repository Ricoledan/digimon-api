import app from "./src/app.ts";

const port: number = Number(Deno.env.get("PORT")) || 3000;

console.log(`Listening on ${port} ...`);

await app.listen({ port });
