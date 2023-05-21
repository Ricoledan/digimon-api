#!/usr/bin/env -S deno run --allow-write
const fakeData = {
  digimon: [
    {
      id: 1,
      name: "Agumon",
    },
    {
      id: 2,
      name: "Palmon",
    },
    {
      id: 3,
      name: "Guilmon",
    },
    {
      id: 4,
      name: "Renamon",
    },
  ],
};
await Deno.writeTextFile(
  "./data_blob.json",
  JSON.stringify(fakeData, null, 2),
);
