import { writable } from "svelte/store"; 

const ethereumAccount = writable<string> ();

const solanaAccount = writable<string> ();

export {ethereumAccount, solanaAccount};