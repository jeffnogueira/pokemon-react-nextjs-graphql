import { FIND_ONE_POKEMON } from "@/querys";
import { useQuery } from "@apollo/client/react";
import { PokemonModel } from "@/models/pokemon.model";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { loadingSlice, modalValue } from "@/slice";
import Image from 'next/image';
import Error from "@/components/Error";
import PokemonStatsBar from "../PokemonStatsBar";
import { formatDecimeterToFeetInches, formatGeneration, formatHectogramToPounds, getValueBasedThemeMode } from "@/utils";
import { LIGHT_DARK_ENUM } from "@/enums/light-dark.enum";
import { useTheme } from "next-themes";
import SpanTypePokemon from "../SpanTypePokemon";

export default function DetailPokemon() {
    const { theme } = useTheme();

    const modal = useAppSelector(modalValue);

    const dispatch = useAppDispatch();
    
    const query: useQuery.Result<{ loading: boolean, error: any, pokemons: Array<PokemonModel> }> = useQuery(FIND_ONE_POKEMON, {
        variables: { id: modal.data.id }
    });
    
    useEffect(() => {
        if (query.loading)
            dispatch(loadingSlice.actions.show());
        else 
            dispatch(loadingSlice.actions.hide());
    }, [query.loading, dispatch]);
    
    if (query.error) 
        return <Error message={query.error.message} />;

    const pokemon = query.data?.pokemons[0];

    if (!pokemon) 
        return;
    
    const pokemonForm = pokemon.pokemonforms[0];
    const pokemonFormSprite = pokemonForm.pokemonformsprites[0];
    const valuesImagesByTheme = {
        [LIGHT_DARK_ENUM.LIGHT]: pokemonFormSprite.sprites.front_default,
        [LIGHT_DARK_ENUM.DARK]: pokemonFormSprite.sprites.front_shiny,
        [LIGHT_DARK_ENUM.UNDEFINED]: 'https://archives.bulbagarden.net/media/upload/8/84/WTP_EP001_before.png'
    };
    const valuesHexColorsByTheme = {
        [LIGHT_DARK_ENUM.LIGHT]: 'bg-[#31a8d8ff]',
        [LIGHT_DARK_ENUM.DARK]: 'bg-[#ffcc33ff]',
        [LIGHT_DARK_ENUM.UNDEFINED]: 'bg-[#5b5b5b5b]'
    };
    
    return (
        <div>
            <div className="flex flex-row justify-between items-center pt-5 pb-5">
                <Image src={getValueBasedThemeMode(theme, valuesImagesByTheme)} 
                    alt={'Image ' + pokemon.name} width={300} height={300} />
                <div className={`flex flex-col h-[180] ${getValueBasedThemeMode(theme, valuesHexColorsByTheme)} rounded-[10] p-3`}>
                    <div className="flex flex-row">
                        <div className="flex flex-col pr-10">
                            <div className="flex flex-col">
                                <label className="text-white">Height: </label>
                                <span>{ formatDecimeterToFeetInches(pokemon.height) }</span>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-white">Weight: </label>
                                <span>{ formatHectogramToPounds(pokemon.weight) }</span>
                            </div>
                        </div>
                        <div className="flex flex-col pr-5">
                            <div className="flex flex-col">
                                <label className="text-white">Generation: </label>
                                <span>{ formatGeneration(pokemon.pokemonspecy?.generation.name ?? '') }</span>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-white">Region: </label>
                                <span>{ pokemon.pokemonspecy?.generation.region.name }</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col pr-10">
                        <label className="text-white">Type: </label>
                        <div className="flex flex-row">
                            { pokemon.pokemontypes.map(item => <SpanTypePokemon key={item.type.id} pokemontype={item} />) }
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row">
                { pokemon.pokemonstats.map(item => <PokemonStatsBar pokemonStat={item} key={item.id} />) }
            </div>
        </div>
    )
}