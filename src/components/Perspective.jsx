import { motion, useMotionValue, useTransform } from 'framer-motion'

const Perspective = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const xInput = [-100, 100]
    const yInput = [-100, 100]
    const rotateX = useTransform(y, xInput, [30, -30])
    const rotateY = useTransform(x, yInput, [-30, 30])
    const opacityOutput = [0, 1, 0]
    const colorOutput = ['#3166da', '#000', '#eb1515']
    // const opacity = useTransform(x, xInput, opacityOutput)
    // const color = useTransform(x, xInput, colorOutput)
    // const background = useTransform(y, yInput, output)

    return (
        <motion.div className='perspective' style={{perspective: '10000px'}}>
            <motion.div className='top-element' 
                drag 
                dragConstraints={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }} 
                style={{ x, y, rotateX, rotateY, z: 300 }}
            >
            </motion.div>
            <motion.div className='bottom-element' />
        </motion.div>
    )
}

export default Perspective