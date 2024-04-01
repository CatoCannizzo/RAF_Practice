import { useState } from "react";
let holder = "";
type GreetingProps = {
  messages: string[];
};

export default function Greeting({ messages }: GreetingProps) {
  const randomMessage = (): string => {
    if (holder.length > 0) {
      messages.push(holder);
    }
    //removed random draw as fix to random drawing the same greeting making it look like the button doesn't work
    // messages[Math.floor(Math.random() * messages.length)];
    const message: string | undefined = messages.shift();
    if (message !== undefined) {
      holder = message;
      return holder;
    } else {
      return "Hi!";
    }
  };

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting} Thank you for visiting!</h3>
      <button
        className="rounded bg-amber-500 px-1 text-white focus:bg-sky-500 "
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}
