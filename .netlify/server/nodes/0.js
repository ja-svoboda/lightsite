

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.7pxG9XsI.js","_app/immutable/chunks/scheduler.Cv-BTxjP.js","_app/immutable/chunks/index.edX44pJD.js"];
export const stylesheets = [];
export const fonts = [];
