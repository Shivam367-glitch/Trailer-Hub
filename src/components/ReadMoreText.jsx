import { useState } from "react";

 
const ReadMoreText = ({ text = "", maxChars = 200 }) => {
    const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  const isLong = text.length > maxChars;
  const displayText = expanded || !isLong ? text : text.slice(0, maxChars) + "...";

  return (
    <>
    
    <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" ,textAlign:"justify"}}>{displayText}</p>
    {isLong && (
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: "none",
          color: "#007bff",
          border: "none",
          cursor: "pointer",
          padding: 0,
          fontSize: "1em",
        }}
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    )}
    
    </>
    )
}


export default ReadMoreText