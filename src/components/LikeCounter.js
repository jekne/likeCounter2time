import { useState, useEffect } from "react";

export default function LikeCounter() {
  const initial_NumLikes = 0;
  const [numLikes, set_NumLikes] = useState(initial_NumLikes);

  const [liked, setLiked] = useState(true);

  console.log(
    `this is my numLikes ${numLikes} and this is my set_Numlikes ${set_NumLikes}`
  );
  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);
  return (
    <div>
      <p>
        THIS POST HAS <b>{numLikes}</b> LIKES!
      </p>
      <p>
        {" "}
        THIS COUNTER IT SHOWING BUTTON MADE IN A DIRECT WAY (ARROW FUNCTION
        INSIDE THE BUTTON){" "}
      </p>
      <button
        onClick={() => {
          set_NumLikes(numLikes + 1);
        }}
      >
        LIKES
      </button>
      <button onClick={() => set_NumLikes(initial_NumLikes)}>RESET</button>
      <button
        onClick={() => {
          setLiked(!liked);
        }}
      >
        {" "}
        {liked ? "You have liked this button" : "disliked "}
      </button>
    </div>
  );
}
