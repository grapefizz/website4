type HeaderLink = {
	value: string;
	text: string;
	action: "open" | "copy";
	class?: string; // e.g. "text-blue-500"
};
export const headerLinks: HeaderLink[] = [
	{
		value: "https://github.com/shallowco",
		text: "GitHub: shallowco",
		action: "open",
	},
	{
		value: "@shallowco",
		text: "Discord: @shallowco",
		action: "copy",
	},
	{
		value: "https://ko-fi.com/shallowco",
		text: "Ko-Fi: @shallowco",
		action: "open",
	},
	{
		value: "mailto:shallowco@proton.me",
		text: "Email: shallowco@proton.me",
		action: "open",
	},
];
