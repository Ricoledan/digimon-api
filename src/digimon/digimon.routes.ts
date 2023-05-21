// @deno-types="npm:@types/express@4"
import express, { Request, Response, Router } from "npm:express@4.18.2";
import demoData from "../../data_blob.json" assert { type: "json" };

const router: Router = express.Router();

router.get("/digimon", (_req: Request, res: Response) => {
  res.status(200).json(demoData.digimon);
});

router.get("/digimon/:id", (req: Request, res: Response) => {
  const idx: number = Number(req.params.id);
  let found = false;
  for (const user of demoData.digimon) {
    if (user.id === idx) {
      res.status(200).json(user);
      found = true;
      break;
    }
  }
  if (!found) {
    res.status(400).json({ msg: "User not found" });
  }
});

export default router;
