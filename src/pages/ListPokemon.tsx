import { FIND_ALL_POKEMON } from "@/querys";
import { useQuery } from "@apollo/client/react";
import { PokemonModel } from "@/models/pokemon.model";
import CardPokemon from "@/components/CardPokemon";
import Error from "@/components/Error";
import { useWindowDimensions } from "@/utils";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks";
import { loadingSlice, modalSlice } from "@/slice";
import DetailPokemon from "@/components/DetailPokemon";
import Modal from "@/components/Modal/Modal";
import "./style.scss";

export default function ListPokemon() {

    const dispatch = useAppDispatch();

    const [ { height }, setHeight ] = useState(useWindowDimensions());
    const [ size, setSize ] = useState(Math.max(Math.round((height - 130) / 350) * 6, 12));
    
    const [ pageOffset, setPageOffset ] = useState(size);

    const query: useQuery.Result<{ loading: boolean, error: any, pokemons: Array<PokemonModel>, fetchMore: any }> = useQuery(FIND_ALL_POKEMON, {
        variables: { limit: size, offset: 0 }
    });

    const paginate = () => {
        setPageOffset(pageOffset + size);
        query.fetchMore({
            variables: {
                limit: size,
                offset: pageOffset
            }, 
            updateQuery: (prevResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prevResult;

                return {
                    ...prevResult,
                    ...fetchMoreResult,
                    pokemons: [
                        ...prevResult?.pokemons,
                        ...fetchMoreResult?.pokemons
                    ]
                };
            },
        });
    };

    const openModal = (pokemon: PokemonModel) => {
        dispatch(modalSlice.actions.show({ title: `#${String(pokemon.id).padStart(4, '0')} ${pokemon.name}`, pokemon: pokemon }));
    };

    const closeModal = () => {
        dispatch(loadingSlice.actions.hide());
        dispatch(modalSlice.actions.hide());
    };

    useEffect(() => {
        if (query.loading)
            dispatch(loadingSlice.actions.show());
        else 
            dispatch(loadingSlice.actions.hide());
    }, [query.loading, dispatch]);

    if (query.error) 
        return <Error message={query.error.message} />;
    
    return (
        query.data &&
            <section className="flex flex-col justify-center items-center pl-6 pr-6 h-1/2 md:h-full w-full md:w-full mt-[130] capitalize">
                <article className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
                    { query.data?.pokemons.map((item: PokemonModel) => 
                        <div key={item.id} onClick={() => openModal(item)}>
                            <CardPokemon pokemon={item} className="flex flex-col items-center p-4" />
                        </div>
                    ) }
                </article>
                <Button className="z-[0] button-component" onClick={paginate}>
                    <span>Load More</span>
                    <svg width="24" height="24" fill="currentColor"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
                </Button>
                <Modal onClose={closeModal}>
                    <DetailPokemon />
                </Modal>
            </section>
    )
}