import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { gsapText } from '../data/Gasp'

const Gasp = () => {

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const gsapPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title = "Gasp" description = "Welcome to Gasp">
      <section id='gaspPage' className={gsapPageClass}>
        <h2>😄 창의적 사이트를 만들고 싶다면!</h2>
        <div className="video_inner">
            <VideoCards videos={gsapText} />
        </div>
      </section>
    </Main>
  )
}

export default Gasp
