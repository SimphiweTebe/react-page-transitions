export const slideFromLeft = {
    initial: {
        opacity: 0,
        x: '-100vw'
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            // type: 'spring',
            duration: 1,
            ease: 'easeIn'
        }
    }
}