import React, { useState, useEffect } from 'react'

function Preload() {
  const [preloadClass,setPreloadClass] = useState('preload')
  useEffect(() => {
    const handleLoad = () => {
      // Your code to handle the load event
     
      console.log('window laoded');
    };
 setPreloadClass('loaded')
    // Add the event listener when the component mounts
    window.addEventListener('load', handleLoad);
   
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <div style={{display:`${preloadClass === "loaded" && "none"}`}} className={`preload ${preloadClass}`} data-preaload>
    <div className="circle"></div>
    <p className="text">melala</p>
  </div>
  )
}

export default Preload