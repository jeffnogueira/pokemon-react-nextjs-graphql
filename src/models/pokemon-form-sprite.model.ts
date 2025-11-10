import { StaticImport } from "next/dist/shared/lib/get-img-props";

export class PokemonFormSprite {
    id: number;
    sprites: Sprites;

    constructor(options: PokemonFormSprite) {
        this.id = options.id ?? 0;
        this.sprites = options.sprites ?? null;
    }
}

interface Sprites {
    back_shiny_female: string | StaticImport;
    front_shiny_female: string | StaticImport;
    back_shiny: string | StaticImport;
    front_shiny: string | StaticImport;
    back_female: string | StaticImport;
    front_female: string | StaticImport;
    back_default: string | StaticImport;
    front_default: string | StaticImport;
}