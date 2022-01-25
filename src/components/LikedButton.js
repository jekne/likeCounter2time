import { useState } from "react";

export default function LikedButton() {
  const [liked, setLiked] = useState(false);

  const togleButton = () => {
    setLiked(!liked);
  };
  return (
    <div>
      <button onClick={togleButton}>
        {liked ? "YOU LIKED THIS POST" : "DISLIKED"}
      </button>
    </div>
  );
}
