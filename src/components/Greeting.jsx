import { useState } from "react";
let holder = "";

export default function Greeting({ messages }) {
	const randomMessage = () => {
		if (holder.length > 0) {
			messages.push(holder);
		}
		//removed random draw as fix to random drawing the same greeting making it look like the button doesn't work
		// messages[Math.floor(Math.random() * messages.length)];
		holder = messages.shift();
		return holder;
	};

	const [greeting, setGreeting] = useState(messages[0]);

	return (
		<div>
			<h3>{greeting}! Thank you for visiting!</h3>
			<button
				class="rounded bg-amber-500 px-1 text-white focus:bg-sky-500"
				onClick={() => setGreeting(randomMessage())}>
				New Greeting
			</button>
		</div>
	);
}
