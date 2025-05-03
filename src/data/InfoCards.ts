type Info = {
	key: string;
	value: string;
};
type InfoCardProps = {
	Title: string;
	Info: Info[];
};
export const aboutInfo: InfoCardProps = {
	Title: "About",
	Info: [
		{ key: "Age", value: "16" },
		{ key: "Pronouns", value: "He/Him" },
		{ key: "Location", value: "Kosovo" },
		{ key: "Time Zone", value: "GMT+1" },
		{ key: "Occupation", value: "High school student" },
	],
};
export const skillsInfo: InfoCardProps = {
	Title: "Skills",
	Info: [
		{ key: "Languages", value: "Java, JavaScript, C++, C, Python, Lua, HTML/CSS" },
		{ key: "Frameworks", value: "Astro, Svelte" },
		{ key: "Tools", value: "Git, Photoshop, Aseprite, Blender" },
		{ key: "Learning", value: "GDScript, Swift" },
	],
};
export const stuffInfo: InfoCardProps = {
	Title: "Cool stuff I use",
	Info: [
		{ key: "Editors", value: "Neovim, VS Code, Visual Studio, ImHex" },
		{ key: "Platforms", value: "macOS" },
		{
			key: "Software",
			value: "Firefox, Raycast, Blender, Aseprite, OBS, Keka, Prism Launcher, yabai",
		},
	],
};
export const personInfo: InfoCardProps = {
	Title: "Things I like",
	Info: [
		{
			key: "I enjoy",
			value:
				"video games, programming, pixel art, mountain biking, swimming, listening to music, urbex",
		},
	],
};
export const riceInfo: InfoCardProps = {
	Title: "macOS Rice",
	Info: [
		{ key: "Terminal", value: "kitty" },
		{ key: "Color Scheme", value: "Catppuccin Mocha" },
		{ key: "Window Manager", value: "yabai" },
		{ key: "Status Bar", value: "SketchyBar" },
		{ key: "Fetch App", value: "neofetch" },
		{ key: "Github Repo", value: "grapefizz/dotfiles" },
	],
};
export const gameInfo: InfoCardProps = {
	Title: "Games I play",
	Info: [
		{ key: "Survival", value: "Subanutica, Minecraft, No Man's Sky" },
		{ key: "2D", value: "Hollow Knight, Plants vs. Zombies, Balatro, Cuphead, Hue" },
		{ key: "FPS", value: "Metro 2033, Metro Last Light, Metro Exodus, Half Life, Half Life 2, Black Mesa, PVZ Garden Warfare 2, Titanfall 2" },
		{ key: "Puzzle", value: "Portal, Portal 2, Portal Reloaded, Portal Revolution, Hue, Portal Stories: Mel"},
	],
};
