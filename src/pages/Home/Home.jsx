import React from 'react';
import { motion } from 'framer-motion';
import { fadeFromBottom, staggerdAnimation } from '../../libraries/animations/textVariants';
import { pageFadeIn } from '../../libraries/animations/pagesVarients';

import image from '../../assets/hunters/hunters.jpeg';
import articleImage from '../../assets/nature/cub.jpeg';
import Article from '../../components/Article/Article';

function Home() {
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
        {/* <div className='content'>
          <Article heading="Tigers are so cool" image={articleImage}/>
        </div> */}
    </motion.section>
  )
}

export default Home