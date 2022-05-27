import React from 'react';
import { motion } from 'framer-motion';

import image from '../../assets/nature/nature.jpeg';
import { staggerdAnimation, fadeFromBottom } from '../../libraries/animations/textVariants';
import { pageFadeIn } from '../../libraries/animations/pagesVarients';

function Hunters() {
  return (
    <motion.section className="main" style={{ backgroundImage: `url(${image})`}}
      variants={pageFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
        <motion.div className="wrapper" variants={staggerdAnimation} initial="initial" animate="animate">
            <header className="hero">
                <motion.h1 variants={fadeFromBottom} >Ocean</motion.h1>
                <motion.p variants={fadeFromBottom} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, quisquam! Ipsam labore asperiores minima dolorum ad voluptate ut maxime hic officiis! Impedit quam a, amet laudantium maiores deserunt explicabo eum.
            </motion.p>
            </header>
        </motion.div>
    </motion.section>
  )
}

export default Hunters