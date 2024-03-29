import { delay, easeOut } from "framer-motion";

export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,  
    }
}
};
export const titleAnim = {
    hidden: { y: 200 },
    show: {
        y: 0,
        transition: {duration: 1, ease: "easeOut"}
    }
}
export const contactAnim = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {duration: 1, ease: "easeOut"}
    }
}
export const borderAnim = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {duration: 0.6, ease: "easeOut", staggerChildren: 0.2, delay: 0.5, when: "beforeChildren"}
    }
}
export const fade = {
    hidden: { opacity: 0},
    show: {
        opacity: 1,
        transition: {ease: "easeOut", duration: 0.75, delay: 0.5}
    }
}
export const photoAnim = {
    hidden: {scale: 1.5, opacity: 0},
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.75
        }
    }   
}
export const lineAnim = {
    hidden: {width: "0%"},
    show: {
        width: "100%",
        transition: {duration: 1}
    }
}
export const loaderAnim = {
    hidden: {x: "-130%", skew: "45deg"},
    show: {
        x: "100%",
        skew: "0deg",
        transition: {ease: "easeOut", duration: 1}
    }
}
export const sliderContainer = {
    hidden: {opacity: 0},
    show: {
        opacity: 1, transition: {staggerChildren: 0.15, ease: "easeOut"}
    }
}
export const scrollReveal = {
    hidden: {opacity: 0, scale: 1.2, y: -50, tranistion:{duration: 0.5}},
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {duration: 0.5, ease: "easeOut"}
    }
}
export const scrollReveal2 = {
    hidden: {opacity: 0, scale: 1.1, tranistion:{duration: 0.7}},
    show: {
        opacity: 1,
        scale: 1,
        transition: {duration: 0.7, ease: "easeOut"}
    }
}
export const courseAnim = {
    hidden: { x: -20, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.75, ease: "easeOut", staggerChildren: 0.2}
    }
}
export const faqAnim = {
    hidden: { y: -20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.75, ease: "easeOut", staggerChildren: 0.35}
    }
}

