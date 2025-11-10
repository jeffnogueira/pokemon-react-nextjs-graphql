export class PokemonType {
    type!: Type;

    constructor(options: PokemonType) {
        this.type = options.type;
    }
}

interface Type {
    id: number;
    name: string;
}