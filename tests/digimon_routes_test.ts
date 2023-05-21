import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";

Deno.test("Plural Digimon Route", async () => {
  const res = await fetch(`http://localhost:3000/api/digimon`);
  const response = await res.json();
  console.log(response);
  assertEquals(res.status, 200);
  assertEquals(response, [
    { id: 1, name: "Agumon" },
    { id: 2, name: "Palmon" },
    { id: 3, name: "Guilmon" },
    { id: 4, name: "Renamon" },
  ]);
});

Deno.test("Single User Route & User Data", async () => {
  const res = await fetch(`http://localhost:3000/api/digimon/2`);
  const response = await res.json();
  assertEquals(res.status, 200);
  assertEquals(response.name, "Palmon");
});
