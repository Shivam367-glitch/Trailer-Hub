import { FaChevronDown } from "react-icons/fa";

const ScrollDownArrow = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <FaChevronDown  size={32} onClick={handleScroll} className="position-absolute z-3 blink"
    style={{right:"10px",
        bottom: "10px",
        cursor: "pointer",
        color: "white",
        backgroundColor: "red",
        borderRadius: "50%",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)"
    }}
    />
    </>
  );
};

export default ScrollDownArrow;
