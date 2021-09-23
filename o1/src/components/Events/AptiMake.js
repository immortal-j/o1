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
      animationData: require('./apti.json')
    })
  }, [])
  
  return (
    <div className="App">
      <div className="container"  style={{width: 190, height: 160, alignSelf: 'center', marginLeft: -40 }}  ref={container}></div>
    </div>
  );
}

export default TrophyMake;