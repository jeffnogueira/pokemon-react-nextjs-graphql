import { PokemonForm } from "./pokemon-forms.model";
import { PokemonType } from "./pokemon-type.model";
import { PokemonStats } from "./pokemon-stats.model";
import { PokemonSpecy } from "./pokemon-specy.model";

export class PokemonModel {
    id: number;
    name: String;
    height: number;
    weight: number;
    pokemontypes: Array<PokemonType>;
    pokemonforms: Array<PokemonForm>;
    pokemonstats: Array<PokemonStats>;
    pokemonspecy: PokemonSpecy | null;

    constructor(options?: PokemonModel) {
        this.id = options?.id ?? 0;
        this.name = options?.name ?? '';
        this.height = options?.height ?? 0;
        this.weight = options?.weight ?? 0;
        this.pokemontypes = options?.pokemontypes ?? [];
        this.pokemonforms = options?.pokemonforms ?? [];
        this.pokemonstats = options?.pokemonstats ?? [];
        this.pokemonspecy = options?.pokemonspecy ?? null;
    }
}