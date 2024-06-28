import { writable } from "svelte/store";
const PCMain = writable<string>(undefined);
const PC1 = writable<string>(undefined);
const PC2 = writable<string>(undefined);
const paintCode = writable<string[]>([""]);
export { PCMain, PC1, PC2, paintCode };