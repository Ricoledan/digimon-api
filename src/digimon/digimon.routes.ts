// @deno-types="npm:@types/express@4"
import express, { Request, Response, Router } from "npm:express@4.18.2";
import DigimonController from "./digimon.controller.ts";

const router: Router = express.Router();

router.get("/digimon", (_req: Request, res: Response) => {
    return DigimonController.getDigimon(res);
});

router.get("/digimon/:name", (req: Request, res: Response) => {
    return DigimonController.getOneDigimon(req, res);
});

export default router;
