import { gql } from "@apollo/client";

const FIND_ALL_POKEMON = gql`
    query GetPokemonList($limit: Int!, $offset: Int!) {
        pokemons: pokemon(
            limit: $limit
            offset: $offset
            order_by: {id: asc}
        ) {
            id
            name
            pokemontypes(distinct_on: id, order_by: {id: asc}) {
                type {
                    id
                    name
                }
            }
            pokemonforms {
                id
                name
                pokemonformsprites {
                    sprites
                    id
                }
            }
        }
    }
`;

const FIND_ONE_POKEMON = gql`
    query GetPokemonDetails($id: Int!) {
        pokemons: pokemon(where: {id: {_eq: $id}}) {
            id
            name
            height
            weight
            pokemontypes(order_by: {id: asc}) {
                type {
                    id
                    name
                }
            }
            pokemonforms {
                id
                name
                pokemonformsprites {
                    sprites
                    id
                }
            }
            pokemonstats {
                id
                effort
                base_stat
                stat {
                    name
                }
            }
            pokemonspecy {
                evolution_chain_id
                id
                name
                generation {
                    name
                    id
                    region {
                        name
                        id
                    }
                }
            }
        }
    }
`;

export { FIND_ALL_POKEMON, FIND_ONE_POKEMON };