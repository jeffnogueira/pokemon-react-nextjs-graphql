import { PokemonFormSprite } from "./pokemon-form-sprite.model";

export class PokemonForm {
    id: number;
    name: String;
    pokemonformsprites: Array<PokemonFormSprite>;

    constructor(options: PokemonForm) {
        this.id = options.id ?? 0;
        this.name = options.name ?? '';
        this.pokemonformsprites = options.pokemonformsprites ?? [];
    }
}