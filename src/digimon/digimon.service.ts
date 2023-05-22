import demoData from "../../data_blob.json" assert { type: "json" };

class DigimonService {
    getDigimon() {
        return demoData.digimon;
    }

    getOneDigimon(id: number) {
        return demoData.digimon.find((d) => d.id === id) || null;
    }
}

export default DigimonService;
