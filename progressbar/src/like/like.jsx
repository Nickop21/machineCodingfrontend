import React, { useState } from "react";
import "./style.css";
import spinners from "./spinner.svg";
import heart from "./heart.jsx";
import SvgHeartIcon from "./heart.jsx";

function Like() {
  const [isFetching, setIsFetching] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: isLiked ? "unlike" : "like",
          }),
        }
      );
      if (response.status >= 200 && response.status < 300) {
        setIsLiked(!isLiked);
        setIsFetching(false);
      } else {
        setError("Failed to like the post pls try again later");
        setIsFetching(false);
        return;
      }
    } finally {
      setIsFetching(false);
      setTimeout(() => {
        setError("")
      }, 6000);
    }
    
  };

  return (<>
  
    <button disabled={isFetching} className={`parent ${isLiked? "liked" :"notliked"}`} onClick={handleClick}>
      {isFetching ? <img className="spinner" src={spinners} alt="" /> :<SvgHeartIcon isLiked={isLiked} />}
      

      <span> {isLiked?"Liked":"Like"}</span>
    </button>
    <div className="error">
      {error && <h3 style={{color:"red"}}>{error}</h3>}
    </div>
  </>
  );
}

export default Like;
