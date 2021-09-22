import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function TrophyMake() {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./bar-chart.json')
    })
  }, [])
  
  return (
    <div className="App">
      <div className="container" style={{width: 160, height: 160, alignSelf: 'center', marginLeft: -25 }}  ref={container}></div>
    </div>
  );
}

export default TrophyMake;