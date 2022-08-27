import React, { useRef } from 'react';
import Hero from './Hero';
import Main from './Main';
import Footer from './Footer';


function Home(props) {

    const mainRef = useRef(null);

    // const handleClick = ref.current?.scrollIntoView({behavior:'smooth'});
    

  return (
    <div>
        <Hero mainRef={mainRef}/>
        <Main ref={mainRef}/>
        {/* <Footer /> */}
    </div>
  )
}

export default Home;