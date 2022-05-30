import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { fadeFromBottom, staggerdAnimation } from '../../libraries/animations/textVariants';
import { pageFadeIn } from '../../libraries/animations/pagesVarients';
import { slideFromLeft } from '../../libraries/animations/contentVariants';

import image from '../../assets/hunters/hunters.jpeg';

function Home() {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  React.useEffect(()=>{
    // if(inView){
    //   animation.start(slideFromLeft.animate)
    // }
    inView ?  animation.start(slideFromLeft.animate) : animation.start(slideFromLeft.initial);
  },[inView]);


  return (
    <motion.section className="main" style={{ backgroundImage: `url(${image})`}}
      variants={pageFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
        <div className="wrapper">
            <motion.header className="hero" variants={staggerdAnimation} initial="initial" animate="animate">
                <motion.h1 variants={fadeFromBottom} >Cats</motion.h1>
                <motion.p variants={fadeFromBottom} >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, quisquam! Ipsam labore asperiores minima dolorum ad voluptate ut maxime hic officiis! Impedit quam a, amet laudantium maiores deserunt explicabo eum.
                </motion.p>
            </motion.header>
        </div>
    </motion.section>
  )
}

export default Home