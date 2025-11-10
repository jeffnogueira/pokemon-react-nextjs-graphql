export class PokemonSpecy {
    evolution_chain_id: number;
    generation: GenerationModel;

    constructor(options: PokemonSpecy) {
        this.evolution_chain_id = options.evolution_chain_id;
        this.generation = options.generation;
    }
}

interface GenerationModel {
    id: number;
    name: string;
    region: RegionModel
}

interface RegionModel {
    id: number;
    name: string;
}