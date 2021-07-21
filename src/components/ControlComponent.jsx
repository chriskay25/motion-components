import { motion, useAnimation } from 'framer-motion'

const ControlComponent = () => {
    const controls = useAnimation()

    return <motion.div animate={controls} />
}

export default ControlComponent