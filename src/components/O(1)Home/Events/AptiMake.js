import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function TrophyMake() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./apti.json"),
    });
  }, []);

  return (
    <div className="App">
      <div
        className="container"
        style={{
          width: 150,
          height: 150,
          alignSelf: "center",
          marginLeft: -17,
        }}
        ref={container}
      ></div>
    </div>
  );
}

export default TrophyMake;
