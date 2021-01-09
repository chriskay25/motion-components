import React from 'react'
import { motion } from 'framer-motion'
import ButtonA from './buttons/ButtonA'

const variants = {
    hidden: {
        opacity: 0,
        y: '-100vh'
    },
    visible: {
        opacity: 1,
        y: 0,
        backgroundColor: 'lightblue',
        transition: {
            duration: 1,
            type: 'spring',
            stiffness: 60,
            ease: 'easeInOut',
            when: 'beforeChildren'
        },
    }
}

const SmallContainer = () => {
    return (
        <motion.div 
            className="small-container"
            variants={variants}
            initial='hidden'
            animate='visible'
        >
            <ButtonA />
        </motion.div>
    )
}
 
export default SmallContainer