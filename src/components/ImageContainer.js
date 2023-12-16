import React from "react";

const ImageContainer = (props) => {
  return (
    <div className="w-190 h-190 relative bg-cardOverlay backdrop-blur-md rounded-lg">
      <img src={props.src} alt="" className="object-cover -translate-y-20" />
    </div>
  );
};

export default ImageContainer;
