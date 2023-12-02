export const Apps = {
	Empty: "",
	Phone: "PHONE",
	Christmas: "CHRISTMAS",
} as const;

export const AppsDisplayNameMap = {
	[Apps.Empty]: "Nothing",
	[Apps.Phone]: "Phone",
} as const;
