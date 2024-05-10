import React from 'react'
import { pictures } from "../assets/hiphop";


const Background = () => {
  return (
      <div className="video-desktop" style={styles.container}>
        
        <video autoPlay loop muted style={styles.video} preload >
          <source src={pictures.background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
  )
}

const styles = {
    container: {
      position: 'fixed',
      width: '100%',
      height: '100vh', // Or whatever size you want
    zIndex : '-1'
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };
  

export default Background
