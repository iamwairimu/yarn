import React from "react";

import Box from "./Box";

function Display() {
  return (
    <div style={styles.box_container}>
      <Box size="small" />
      <Box size="small" />
      <Box size="medium" />
      <Box size="medium" />
      <Box size="large" />
      <Box size="medium" />
      <Box size="small" />
      <Box size="medium" />
      <Box size="small" />
      <Box size="medium" />
      <Box size="small" />
      <Box size="large" />
      <Box size="small" />
      <Box size="large" />
      <Box size="small" />
      <Box size="small" />
      <Box size="small" />
      <Box size="small" />
      <Box size="small" />
      <Box size="small" />
      <Box size="small" />
      <Box size="large" />
      <Box size="large" />
      <Box size="small" />
      <Box size="medium" />
      <Box size="small" />
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
