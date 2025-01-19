type HeaderLink = {
	value: string;
	text: string;
	action: "open" | "copy";
	class?: string; // e.g. "text-blue-500"
};
export const headerLinks: HeaderLink[] = [
	{
		value: "https://github.com/NotAriRay",
		text: "GitHub: NotAriRay",
		action: "open",
	},
	{
		value: "@ariray",
		text: "Discord: @ariray",
		action: "copy",
	},
	{
		value: "https://ko-fi.com/notariray",
		text: "Ko-Fi: @notariray",
		action: "open",
	},
	{
		value: "mailto:ariray@proton.me",
		text: "Email: ariray@proton.me",
		action: "open",
	},
];
