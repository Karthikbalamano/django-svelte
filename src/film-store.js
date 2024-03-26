import { writable } from "svelte/store";

export const FilmStore = writable([
    {id:1, name:'The Godfather', directore:'Francus Ford Coppola'},
    {id:2, name:'The Big Lebowski', directore:'Coen Brothers'}
])
