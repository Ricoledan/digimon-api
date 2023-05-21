import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";

Deno.test("Plural Users Route", async () => {
  const res = await fetch(`http://localhost:3000/digimon`);
  const response = await res.json();
  console.log(response);
  assertEquals(res.status, 200);
});

Deno.test("Single User Route & User Data", async () => {
  const res = await fetch(`http://localhost:3000/digimon/2`);
  const response = await res.json();
  assertEquals(res.status, 200);
  assertEquals(response.name, "Palmon");
});
