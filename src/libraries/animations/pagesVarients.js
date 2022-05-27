export const pageFadeIn = {
    initial: { 
        opacity: 0, 
        scale: 1.8,
    },
    animate: { 
        opacity: 1,
        scale: 1,
        transition: { 
            duration: 0.75,
            ease: 'easeInOut' 
        } 
    },
    exit: { 
        opacity: 0,
        scale: 1.3, 
        transition: { 
            duration: 0.3 
        }
    }
}