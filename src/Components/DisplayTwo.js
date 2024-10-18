import React from "react";

import Box from "./Box";

import img27 from "../assets/image27.JPG";
import img28 from "../assets/image28.JPG";
import img29 from "../assets/image29.JPG";
import img30 from "../assets/image30.JPG";
import img31 from "../assets/image31.JPG";
import img32 from "../assets/image32.JPG";
import img33 from "../assets/image33.JPG";
import img34 from "../assets/image34.JPG";
import img35 from "../assets/image35.JPG";
import img36 from "../assets/image36.JPG";
import img37 from "../assets/image37.JPG";
import img38 from "../assets/image38.JPG";
import img39 from "../assets/image39.JPG";
import img40 from "../assets/image40.JPG";
import img41 from "../assets/image41.JPG";
import img42 from "../assets/image42.JPG";
import img43 from "../assets/image43.JPG";
import img44 from "../assets/image44.JPG";
import img45 from "../assets/image45.JPG";
import img46 from "../assets/image46.JPG";
import img47 from "../assets/image47.JPG";
import img48 from "../assets/image48.JPG";
import img49 from "../assets/image49.JPG";
import img50 from "../assets/image50.JPG";
import img51 from "../assets/image51.JPG";
import img52 from "../assets/image52.JPG";

function Display() {
  return (
    <div style={styles.box_container}>
      <Box size="small" image={img49} />
      <Box size="small" image={img28} />
      <Box size="medium" image={img47} />
      <Box size="medium" image={img51} />
      <Box size="large" image={img34} />
      <Box size="medium" image={img30} />
      <Box size="small" image={img43} />
      <Box size="medium" image={img36} />
      <Box size="small" image={img45} />
      <Box size="medium" image={img52} />
      <Box size="small" image={img27} />
      <Box size="large" image={img32} />
      <Box size="small" image={img42} />
      <Box size="large" image={img39} />
      <Box size="small" image={img31} />
      <Box size="small" image={img40} />
      <Box size="small" image={img50} />
      <Box size="small" image={img35} />
      <Box size="small" image={img29} />
      <Box size="small" image={img48} />
      <Box size="large" image={img33} />
      <Box size="large" image={img41} />
      <Box size="small" image={img38} />
      <Box size="medium" image={img44} />
      <Box size="small" image={img37} />
      <Box size="small" image={img46} />
    </div>
  );
}

const styles = {
  box_container: {
    margin: 0,
    padding: 0,
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gridAutoRows: "minmax(150px, 1fr)",
    gap: "15px",
    position: "absolute",
    left: "0",
    right: "0",
    top: "40px",
    bottom: "0",
    justifyContent: "center",
    backgroundColor: "#926d5a",
    overflowY: "scroll",
  },
};

export default Display;
