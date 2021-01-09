import React from 'react'
import { motion } from 'framer-motion'
import SmallContainer from './SmallContainer'

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const Container = () => {
    return (
        <motion.div 
            className='container'
            variants={variants}
            initial='hidden'
            animate='visible'
        >
            <SmallContainer />
        </motion.div>
    )
}

export default Container