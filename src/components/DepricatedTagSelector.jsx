import { useState } from "react";

// const uniqueTags = [
// 	...new Set(posts.map((post) => post.frontmatter.tags).flat()),
// ];

export default function Greeting({ tags }) {
	const activate = () => {};

	const deactivate = () => {};

	const [activetags, setTags] = useState({ tags });

	return (
		<div>
			{tags.map((tag) => (
				<button
					class="rounded bg-amber-500 px-1 text-white"
					onClick={() => deactivate(tag())}>
					{tag}
				</button>
			))}
		</div>
	);
}
