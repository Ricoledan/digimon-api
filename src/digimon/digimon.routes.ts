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

router.post("/digimon", (req: Request, res: Response) => {
    return DigimonController.addOneDigimon(req, res);
});

router.patch("/digimon/:name", (req: Request, res: Response) => {
    return DigimonController.updateOneDigimon(req, res);
});

router.delete("/digimon/:name", (req: Request, res: Response) => {
    return DigimonController.deleteOneDigimon(req, res);
});

export default router;
