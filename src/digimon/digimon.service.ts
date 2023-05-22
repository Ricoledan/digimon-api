import demoData from "../../data_blob.json" assert { type: "json" };

class DigimonService {
    getDigimon() {
        return demoData.digimon;
    }

    getOneDigimonByName(name: string) {
        return demoData.digimon.find((d) => d.name === name) || null;
    }
}

export default DigimonService;
