// @deno-types="npm:@types/express@4"
import { Request, Response} from "npm:express@4.18.2";
import demoData from "../../data_blob.json" assert { type: "json" };
class DigimonService {
    async getDigimon(res: Response) {
        return await res.status(200).json(demoData.digimon);
    }

    async getOneDigimon(req: Request, res: Response) {
        const idx = Number(req.params.id);
        let found = false;
        for (const digimon of demoData.digimon) {
            if (digimon.id === idx) {
                await res.status(200).json(digimon);
                found = true;
                break;
            }
        }
        if (!found) {
            await res.status(400).json({ msg: "User not found" });
        }
    }
}

export default new DigimonService();