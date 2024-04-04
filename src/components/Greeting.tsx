import { useState } from "react";
import { Button } from "./ui/button";
type GreetingProps = {
  messages: string[];
};

export default function Greeting(props: GreetingProps) {
  const nextGreet = (): string => {
    //removed random draw as fix to random drawing the same greeting making it look like the button doesn't work
    // messages[Math.floor(Math.random() * messages.length)];
    const messages = props.messages;
    const message: string | undefined = messages.shift();
    if (message !== undefined) {
      messages.push(message);
      return message;
    } else {
      return "Hi!";
    }
  };

  const [greeting, setGreeting] = useState<string>(props.messages[0] || "");

  return (
    <div>
      <h3>{greeting} Thank you for visiting!</h3>
      <Button onClick={() => setGreeting(nextGreet())}>New Greeting</Button>
    </div>
  );
}
