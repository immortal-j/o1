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
      animationData: require("./bootcamp.json"),
    });
  }, []);

  return (
    <div className="App">
      <div
        className="container"
        ref={container}
        style={{
          width: 120,
          height: 120,
          alignSelf: "center",
          // marginLeft: -15,
        }}
      ></div>
    </div>
  );
}

export default TrophyMake;
