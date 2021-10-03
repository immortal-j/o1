import React from "react";
import Lottie from "react-lottie";
import animationData from "./pattacenter.json";
export default function Lotie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} width={300} height={260} />
    </div>
  );
}
