import { PokemonModel } from "@/models/pokemon.model";
import SpanTypePokemon from "../SpanTypePokemon";
import Image from 'next/image';
import { LIGHT_DARK_ENUM } from "@/enums/light-dark.enum";
import { getValueBasedThemeMode } from "@/utils";
import { useTheme } from "next-themes";
import './style.scss';

export default function CardPokemon({ pokemon, className }: Readonly<{ pokemon: PokemonModel, className: string }>) {
    const { theme } = useTheme();

    const pokemonForm = pokemon.pokemonforms[0];
    const pokemonFormSprite = pokemonForm.pokemonformsprites[0];
    const valuesByTheme = {
        [LIGHT_DARK_ENUM.LIGHT]: pokemonFormSprite.sprites.front_default,
        [LIGHT_DARK_ENUM.DARK]: pokemonFormSprite.sprites.front_shiny,
        [LIGHT_DARK_ENUM.UNDEFINED]: 'https://archives.bulbagarden.net/media/upload/8/84/WTP_EP001_before.png'
    };

    return (
        <div className={`card-pokemon-component cursor-pointer rounded-[10] z-[1] ${className}`}>
            <Image src={getValueBasedThemeMode(theme, valuesByTheme)} 
                alt={'Image ' + pokemon.name} width={300} height={300} />
            
            <div className="flex flex-col items-start w-full">
                <div className="flex flex-col">
                    <label className="font-black text-sm">#{String(pokemon.id).padStart(4, '0')}</label>
                    <label className="text-2xl">{pokemon.name}</label>
                </div>
                <div className="flex flex-row">
                    { pokemon.pokemontypes.map(item => <SpanTypePokemon key={item.type.id} pokemontype={item} />) }
                </div>
            </div>
        </div>
    )
}