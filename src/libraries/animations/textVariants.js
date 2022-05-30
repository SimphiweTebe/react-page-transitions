// import { Variants } from 'framer-motion'; //for typescript

export const fadeFromBottom = {
    initial: {
        opacity: 0,
        y: 80
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeIn'
        }
    },
}

export const staggerdAnimation = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.8
        }
    },
}