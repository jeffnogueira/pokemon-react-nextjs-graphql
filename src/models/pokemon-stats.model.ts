import { TYPE_POKEMON_STATS_ENUM } from "@/enums/type-pokemon-stats.enum";

export class PokemonStats {
    id: number;
    effort: number;
    base_stat: number;
    stat: Stat;

    constructor(options: PokemonStats) {
        this.id = options.id;
        this.effort = options.effort;
        this.base_stat = options.base_stat;
        this.stat = options.stat;
    }
}

interface Stat {
    name: TYPE_POKEMON_STATS_ENUM;
}