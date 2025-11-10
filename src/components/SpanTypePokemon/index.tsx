import { PokemonType } from "@/models/pokemon-type.model";
import './style.scss'

export default function SpanTypePokemon({ pokemontype }: Readonly<{ pokemontype: PokemonType }>) {
    
    return (
        <div className={`rounded-md text-center pl-3 pr-3 m-1 background-color-${pokemontype.type.name}`}>
            <span className="text-xs">{pokemontype.type.name}</span>
        </div>
    )
}

