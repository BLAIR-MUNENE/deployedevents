import React from "react";
import Image from "react-bootstrap/Image";

function FluidExample() {
  // Define the style object for the image
  const imgStyle = {
    position: "absolute", // Position the image absolutely to cover the full viewport
    top: 0,
    left: 0,
    width: "100%", // Take up the full width of the container
    height: "100%", // Take up the full height of the container
    objectFit: "cover", // Ensure the image covers the area without stretching
    zIndex: -1, // Place the image behind other content if needed
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* Apply the style to the Image component */}
      <Image
        src="https://img.freepik.com/free-photo/kids-chemistry-laboratory-cartoon-illustration_23-2151403073.jpg?size=626&ext=jpg"
        style={imgStyle}
        fluid
      />
    </div>
  );
}

export default FluidExample;
