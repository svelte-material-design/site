/** @type {import('svelte-preprocess')["default"]} */
// @ts-ignore
const sveltePreprocess = require("svelte-preprocess");
const path = require("path");
const Handlebars = require("handlebars");
const ejs = require("ejs");

module.exports = {
	preprocess: sveltePreprocess({
		typescript: {
			tsconfigFile: "./tsconfig.json",
		},
		scss: {
			includePaths: [path.resolve("src"), path.resolve("node_modules")],
		},
		handlebars: ({ content }) => {
			const code = Handlebars.compile(content)();

			return { code };
		},
		ejs: ({ content, attributes }) => {
			console.log(attributes);
			const code = ejs.render(content, attributes);
			return { code };
		},
	}),
	preserveWhitespace: true,
	dev: true,
};
