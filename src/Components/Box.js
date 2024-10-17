import React from "react";

function Box(props) {
  return (
    <div
      style={{
        ...styles.box,
        ...styles[props.size],
      }}
    ></div>
  );
}

const styles = {
  box: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "red",
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
