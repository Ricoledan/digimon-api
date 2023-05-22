interface DigimonType {
    id: string;
    name: string;
    level: Level;
    type: string;
    attribute: string;
    techniques: TechniqueType[];
    profile: string;
}

enum Level {
    level0 = "Digitama",
    level1 = "Baby I",
    level2 = "Baby II",
    level3 = "Child",
    level4 = "Adult",
    level5 = "Perfect",
    level6 = "Ultimate",
    level7 = "Super Ultimate",
}

interface TechniqueType {
    name: string;
    description: string;
}