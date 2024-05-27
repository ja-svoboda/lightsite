

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B576jrt3.js","_app/immutable/chunks/scheduler.Cv-BTxjP.js","_app/immutable/chunks/index.edX44pJD.js"];
export const stylesheets = ["_app/immutable/assets/2._IhEalnW.css"];
export const fonts = [];
