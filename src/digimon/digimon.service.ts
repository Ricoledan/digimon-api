import demoData from "../../data_blob.json" assert { type: "json" };

class DigimonService {
    getDigimon() {
        return demoData.digimon;
    }

    getOneDigimonByName(name: string) {
        return demoData.digimon.find((d) => d.name === name) || null;
    }

    async addOneDigimon(digimon: any) {
        return await digimon;
    }

    async updateOneDigimonByName(digimon: any) {
        return await digimon;
    }

    async deleteOneDigimonByName(digimon: any) {
        return await digimon;
    }

}

export default DigimonService;
