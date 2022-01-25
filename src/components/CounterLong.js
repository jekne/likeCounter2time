// this is beeing right in the full way, step by step, instead the arrow function in the
// button we used to call the function the button
import { useState } from "react";

export default function CounterLong() {
  const initialState = 0;

  const [numLikes, set_NumLikes] = useState(initialState);

  const [liked, setLiked] = useState(false);

  const increment = () => {
    set_NumLikes(numLikes + 1);
  };
  const reset = () => {
    set_NumLikes(initialState);
  };

  const toglledButton = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <h1>
        THIS IS THE LONG COUNTER "IT IS THE SAME OF THE OTHER BUT WITH THE STEPS
        OF CALL BACK IN A BUTTON"
      </h1>
      <h4> WE HAD {numLikes} NUMBERS OF LIKES</h4>
      <button onClick={increment}>Increment button</button>
      <button onClick={reset}>Reset Button</button>
      <button onClick={toglledButton}>
        {" "}
        {liked ? "You liked this post" : "you dont liked this post"}{" "}
      </button>
    </div>
  );
}
