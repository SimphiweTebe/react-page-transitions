import React from 'react';
import { motion } from 'framer-motion';
import image from '../../assets/hunters/hunters.jpeg';
import { fadeFromBottom, staggerdAnimation } from '../../libraries/animations/textVariants';

function Home() {
  return (
    <motion.section className="main" style={{ backgroundImage: `url(${image})`}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0 , transition: { duration: 0.3 }}}
    >
        <motion.div className="wrapper" variants={staggerdAnimation} initial="initial" animate="animate">
            <header className="hero">
                <motion.h1 variants={fadeFromBottom} >Cats</motion.h1>
                <motion.p variants={fadeFromBottom} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, quisquam! Ipsam labore asperiores minima dolorum ad voluptate ut maxime hic officiis! Impedit quam a, amet laudantium maiores deserunt explicabo eum.
            </motion.p>
            </header>
        </motion.div>
    </motion.section>
  )
}

export default Home