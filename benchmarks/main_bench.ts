Deno.bench("Single User", async () => {
  await fetch(`http://localhost:3000/digimon/2`);
});

Deno.bench("All Users", async () => {
  await fetch(`http://localhost:3000/digimon`);
});
