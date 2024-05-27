

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DyW3pQr6.js","_app/immutable/chunks/scheduler.Cv-BTxjP.js","_app/immutable/chunks/index.edX44pJD.js","_app/immutable/chunks/entry.uBA7T9fl.js"];
export const stylesheets = [];
export const fonts = [];
