import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/spectrum.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.y6SQoYre.js","app":"_app/immutable/entry/app.zvlWboM1.js","imports":["_app/immutable/entry/start.y6SQoYre.js","_app/immutable/chunks/entry.uBA7T9fl.js","_app/immutable/chunks/scheduler.Cv-BTxjP.js","_app/immutable/entry/app.zvlWboM1.js","_app/immutable/chunks/scheduler.Cv-BTxjP.js","_app/immutable/chunks/index.edX44pJD.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
