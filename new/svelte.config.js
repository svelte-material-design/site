import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

const scssIncludePaths = [
	resolve(__dirname, 'src'),
	resolve(__dirname, 'node_modules'),
	resolve(__dirname, 'src/styles'),
	resolve(__dirname, 'src/styles/smui')
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			includePaths: scssIncludePaths
		}
	}),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},

		vite: () => ({
			ssr: {
				noExternal: ['@svelte-material-design/core']
			}
		})
	}
};

export default config;
