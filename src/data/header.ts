type HeaderLink = {
	value: string;
	text: string;
	action: "open" | "copy";
	class?: string; // e.g. "text-blue-500"
};
export const headerLinks: HeaderLink[] = [
	{
		value: "https://github.com/grapefizz",
		text: "GitHub: grapefizz",
		action: "open",
	},
	{
		value: "@grapefizz",
		text: "Discord: @grapefizz",
		action: "copy",
	},
	{
		value: "https://ko-fi.com/grapefizz",
		text: "Ko-Fi: @grapefizz",
		action: "open",
	},
	{
		value: "mailto:arikarakushi@proton.me",
		text: "Email: arikarakushi@proton.me",
		action: "open",
	},
];
