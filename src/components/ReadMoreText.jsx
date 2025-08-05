import { useState } from "react";

 
const ReadMoreText = ({ text = "", maxChars = 300 }) => {
    const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  const isLong = text.length > maxChars;
  const displayText = expanded || !isLong ? text : text.slice(0, maxChars) + "... ";
  const toggleText = () => {
    setExpanded(!expanded);
  };
  return (
    <>
    
    <p className="paragraph_text">{displayText} 
    {isLong && (
      <button
        onClick={toggleText}
       className="read_button"
      >
        {expanded ? " Read less" : " Read more"}
      </button>
    )}
    
    </p>
    </>
    )
}


export default ReadMoreText