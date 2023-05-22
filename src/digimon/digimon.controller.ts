// @deno-types="npm:@types/express@4"
import { Request, Response} from "npm:express@4.18.2";
import DigimonService from './digimon.service.ts';
class DigimonController {
    getDigimon(res: Response) {
        return DigimonService.getDigimon(res);
    }

    getOneDigimon(req: Request, res: Response) {
        return DigimonService.getOneDigimon(req, res);
    }
}

export default new DigimonController;