import React from "react";

import Box from "./Box";

import img1 from "../assets/image1.JPG";
import img2 from "../assets/image2.JPG";
import img3 from "../assets/image3.JPG";
import img4 from "../assets/image4.JPG";
import img5 from "../assets/image5.JPG";
import img6 from "../assets/image6.JPG";
import img7 from "../assets/image7.JPG";
import img8 from "../assets/image8.JPG";
import img9 from "../assets/image9.JPG";
import img10 from "../assets/image10.JPG";
import img11 from "../assets/image11.JPG";
import img12 from "../assets/image12.JPG";
import img13 from "../assets/image13.JPG";
import img14 from "../assets/image14.JPG";
import img15 from "../assets/image15.JPG";
import img16 from "../assets/image16.JPG";
import img17 from "../assets/image17.JPG";
import img18 from "../assets/image18.JPG";
import img19 from "../assets/image19.JPG";
import img20 from "../assets/image20.JPG";
import img21 from "../assets/image21.JPG";
import img22 from "../assets/image22.JPG";
import img23 from "../assets/image23.JPG";
import img24 from "../assets/image24.JPG";
import img25 from "../assets/image25.JPG";
import img26 from "../assets/image26.JPG";

function Display() {
  return (
    <div style={styles.box_container}>
      <Box size="small" image={img26} />
      <Box size="small" image={img12} />
      <Box size="medium" image={img1} />
      <Box size="medium" image={img9} />
      <Box size="large" image={img15} />
      <Box size="medium" image={img20} />
      <Box size="small" image={img6} />
      <Box size="medium" image={img17} />
      <Box size="small" image={img23} />
      <Box size="medium" image={img4} />
      <Box size="small" image={img19} />
      <Box size="large" image={img10} />
      <Box size="small" image={img2} />
      <Box size="large" image={img24} />
      <Box size="small" image={img13} />
      <Box size="small" image={img22} />
      <Box size="small" image={img5} />
      <Box size="small" image={img14} />
      <Box size="small" image={img21} />
      <Box size="small" image={img8} />
      <Box size="large" image={img3} />
      <Box size="large" image={img11} />
      <Box size="small" image={img25} />
      <Box size="medium" image={img18} />
      <Box size="small" image={img16} />
      <Box size="small" image={img7} />
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
