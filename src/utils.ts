//In the future come back and grab local time type off user data
export function formatDate(date: string):string {
	return new Date(date).toLocaleDateString("en-emodeng", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};