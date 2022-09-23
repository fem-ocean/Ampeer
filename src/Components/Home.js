import React, { useRef } from 'react';
import Hero from './Hero';
import Main from './Main';
import Footer from './Footer';
import { Helmet } from 'react-helmet';


function Home(props) {

    const mainRef = useRef(null);

    // const handleClick = ref.current?.scrollIntoView({behavior:'smooth'});
    

  return (
      
    <div>
      <Helmet>
          <title>Homepage || Ampeer is Life</title>
      </Helmet>
        <Hero mainRef={mainRef}/>
        <Main ref={mainRef}/>
        <Footer />
    </div>
  )
}

export default Home;