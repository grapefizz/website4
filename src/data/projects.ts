type tag = {
	name: string;
	color:
		| "slate"
		| "gray"
		| "zinc"
		| "neutral"
		| "stone"
		| "red"
		| "orange"
		| "amber"
		| "yellow"
		| "lime"
		| "green"
		| "emerald"
		| "teal"
		| "cyan"
		| "sky"
		| "blue"
		| "indigo"
		| "violet"
		| "purple"
		| "fuchsia"
		| "pink"
		| "rose";
};
type Project = {
	name: string;
	description: string;
	github: string;
	tags?: tag[];
};
const rust: tag = { name: "Rust", color: "red" };
const typescript: tag = { name: "TypeScript", color: "blue" };
const cli: tag = { name: "CLI", color: "gray" };
const web: tag = { name: "Web", color: "violet" };
const vue: tag = { name: "Vue", color: "green" };
const css: tag = { name: "CSS", color: "blue" };
const nuxt: tag = { name: "nuxt", color: "emerald" };
const astro: tag = { name: "Astro", color: "blue" };
const svelte: tag = { name: "Svelte", color: "orange" };

const swift: tag = { name: "Swift", color: "orange" }
const python: tag = { name: "Python", color: "emerald" }
const lua: tag = { name: "Lua", color: "blue" }

export const projects: Project[] = [
	{
		name: "Phoenix Launcher",
		description: "A beautiful macOS game launcher Completely open source, built with SwiftUI, and optimized for macOS.",
		github: "https://github.com/PhoenixLauncher/Phoenix/",
		tags: [swift],
	},
	{
		name: "cratr",
		description: "Linux server file manager application build with Rust.",
		github: "https://github.com/grapefizz/cratr",
		tags: [rust, cli],
	},
	{
		name: "Dots",
		description: "Collection of all the dotfiles for my macOS rice.",
		github: "https://github.com/grapefizz/dotfiles",
		tags: [],
	},
	{
		name: "H-O-L",
		description: "Simple Python game. First thing I ever made.",
		github: "https://github.com/grapefizz/HigherOrLower",
		tags: [python, lua, cli],
	},
];
