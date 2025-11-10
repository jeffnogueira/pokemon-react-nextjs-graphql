import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { PokemonModel } from "@/models/pokemon.model";

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    value: false
  },
  reducers: {
    show: state => { state.value = true },
    hide: state => { state.value = false }
  }
});
const loadingValue = (state: RootState) => state.loading.value;

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: { open: false, title: '', data: undefined as unknown as PokemonModel },
    
  },
  reducers: {
    show: (state, data) => { state.value = { open: true, title: data.payload.title, data: data.payload.pokemon } },
    hide: state => { state.value = { open: false, title: '', data: undefined as unknown as PokemonModel } }
  }
});
const modalValue = (state: RootState) => state.modal.value;

export { loadingSlice, loadingValue, modalSlice, modalValue };