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
            const name = req.params.name
            const digimon = await this.digimonService.getOneDigimonByName(name);

            if (digimon) {
                return res.status(200).json(digimon);
            } else {
                return res.status(404).json({ error: 'Digimon not found' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async addOneDigimon(req: Request, res: Response) {
        try {
            const getDigimonFromReq = req.body;
            const digimon = await this.digimonService.addOneDigimon(getDigimonFromReq);
            return res.status(201).json(digimon);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateOneDigimon(req: Request, res: Response) {
        try {
            const name = req.params.name
            const digimon = await this.digimonService.getOneDigimonByName(name);

            if (digimon) {
                const updatedDigimon = await this.digimonService.updateOneDigimonByName(digimon);
                return res.status(200).json(updatedDigimon);
            } else {
                return res.status(404).json({ error: 'Digimon not found' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteOneDigimon(req: Request, res: Response) {
        try {
            const name = req.params.name
            const digimon = await this.digimonService.getOneDigimonByName(name);

            if (digimon) {
                await this.digimonService.deleteOneDigimonByName(digimon);
                return res.status(200).json({ message: 'Digimon deleted' });
            } else {
                return res.status(404).json({ error: 'Digimon not found' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}

export default new DigimonController();
