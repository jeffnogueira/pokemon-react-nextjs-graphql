import { PokemonStats } from "@/models/pokemon-stats.model";
import { useTheme } from "next-themes";
import { LIGHT_DARK_ENUM } from "@/enums/light-dark.enum";
import { getValueBasedThemeMode } from "@/utils";
import "./style.scss";

export default function PokemonStatsBar({ pokemonStat }: Readonly<{ pokemonStat: PokemonStats }>) {
    const { theme } = useTheme();

    const valuesByTheme = {
        [LIGHT_DARK_ENUM.LIGHT]: '#31a8d8ff',
        [LIGHT_DARK_ENUM.DARK]: '#ffcc33ff',
        [LIGHT_DARK_ENUM.UNDEFINED]: '#5b5b5b5b'
    };
    const percentStat: number = 0;
    const divMarkers: Array<number> = [90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

    const calculatePercentStat = (): number => {
        return (pokemonStat.base_stat * 100 / 255);
    }

    const getLinearGradient = (percentMarker: number): string => {
        if (calculatePercentStat() > percentMarker)
            return `linear-gradient(0deg, ${getValueBasedThemeMode(theme, valuesByTheme)} ${getDifferencePercent(percentMarker)}%, transparent 0%)`;

        return 'transparent';
    }

    const getDifferencePercent = (percentMarker: number): number => {
        const differencePercent = percentStat - percentMarker;

        return differencePercent > 0 && differencePercent < 10 ? differencePercent * 10 : 100;
    }
    
    return (
        <div className="pokemon-stats-bar-component flex flex-col items-center w-[18%] p-[0_5]">
            <div className="flex flex-col justify-between w-full h-[150] bg-transparent">
                { divMarkers.map(item => <div className="divMarker border border-[#9b9b9b] h-[10%] mb-[1]" style={{'background': getLinearGradient(item)}} key={item}></div>) }
            </div>
            <p className="text-center mt-1">
                <span className="text-[15px] font-bold">
                    { pokemonStat.stat.name.replace('-', ' ') }
                </span>
            </p>
        </div>
    )
}

