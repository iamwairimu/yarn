import React from "react";

function Box({ size, image }) {
  return (
    <div
      style={{
        ...styles.box,
        ...styles[size],
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

const styles = {
  box: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    width: "100%",
    height: "100%",
  },
  small: {
    gridRowEnd: "span 1",
    gridColumnEnd: "span 1",
  },
  medium: {
    gridRowEnd: "span 2",
    gridColumnEnd: "span 2",
  },
  large: {
    gridRowEnd: "span 3",
    gridColumnEnd: "span 3",
  },
};

export default Box;
