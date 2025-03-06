import { useState } from "react";
import "./StarOfRating.css";
import { FaStar } from "react-icons/fa";


const StarOfRating = ({ num = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(-1);
  function handleClick(i) {
    setRating(i);
  }
  function handleMouseOver(i) {
    setHover(i);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="star_root">
      {[...Array(num)].map((_, i) => {
        return (
          <FaStar
            key={i}
            onClick={() => handleClick(i)}
            onMouseMove={() => handleMouseOver(i)}
            onMouseLeave={() => handleMouseLeave}
            className={i <= ( hover||rating) ? "star" : "star_empty"}
          />
          // 这里的hover要在前面，即hover有数时，优先采用hover
        );
      })}
    </div>
  );
}

export default StarOfRating