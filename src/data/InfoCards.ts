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
		{ key: "Age", value: "15" },
		{ key: "Pronouns", value: "He/Him" },
		{ key: "Location", value: "Kosovo" },
		{ key: "Time Zone", value: "GMT+1" },
		{ key: "Occupation", value: "High school student" },
	],
};
export const skillsInfo: InfoCardProps = {
	Title: "Skills",
	Info: [
		{ key: "Languages", value: "Java, JavaScript, C++, C, Python, HTML/CSS" },
		{ key: "Frameworks", value: "Astro, Svelte" },
		{ key: "Tools", value: "Git, Photoshop, Aseprite, Blender" },
		{ key: "Learning", value: "GDScript, Swift" },
	],
};
export const stuffInfo: InfoCardProps = {
	Title: "Cool stuff I use",
	Info: [
		{ key: "Editors", value: "Neovim, VS Code" },
		{ key: "Platforms", value: "macOS" },
		{
			key: "Software",
			value: "Firefox, raycast, blender, aseprite",
		},
		{ key: "Color scheme", value: "Nord, Everforest" },
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
