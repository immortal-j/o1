import React from "react";
import Lottie from "react-lottie";
import animationData from "./wave1.json";
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
      <Lottie options={defaultOptions} height={800} width={800} speed={5} />
    </div>
  );
}
