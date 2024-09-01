import { ZoomIn } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const ImageZoomIcon = () => {
  return (
    <>
      <div
        onClick={() => toast("Yet to Build!")}
        className="absolute top-3 cursor-pointer right-3 rounded-full bg-white shadow-sm p-2"
      >
        <ZoomIn />
      </div>
    </>
  );
};

export default ImageZoomIcon;
