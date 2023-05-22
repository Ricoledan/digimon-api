// @deno-types="npm:@types/express@4"
import { Request, Response } from "npm:express@4.18.2";
import DigimonService from './digimon.service.ts';

class DigimonController {
    private digimonService: DigimonService;

    constructor() {
        this.digimonService = new DigimonService();
    }

    async getDigimon(res: Response) {
        try {
            const digimon = await this.digimonService.getDigimon();
            return res.status(200).json(digimon);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getOneDigimon(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const digimon = await this.digimonService.getOneDigimon(id);

            if (digimon) {
                return res.status(200).json(digimon);
            } else {
                return res.status(404).json({ error: 'Digimon not found' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default new DigimonController();
