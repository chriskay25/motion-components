import React from 'react'
import { motion } from 'framer-motion'

const buttonVariants = {
    invisible: {
        x: 0,
        y: 0,
        scale: 0
    },
    visible: {
        x: 10,
        y: 10,
        scale: 1,
        transition: {
            delay: .5,
            duration: 2.5,
            ease: 'easeInOut'
        }
    },
    hover: {
        scale: 1.01, 
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)"
    },
    tap: {
        scale: 0.01,
        backgroundColor: 'coral',
        rotate: 360,
        transition: {
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }

}

const ButtonA = () => {
    return (
        <motion.button
            className='button-a'
            variants={buttonVariants}
            initial='invisible'
            animate='visible'
            whileHover='hover'
            whileTap='tap'
        >
            ButtonA
        </motion.button>
    )
}

export default ButtonA