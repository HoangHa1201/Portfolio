import React from 'react'
import { motion } from 'framer-motion'

const MotionWrap = (Component, classNames) => function HOC(){
    return (
        <motion.div
            whileInview={{ opacity: [0, 0, 1] }}
            transition={{ duration: 0.5}}
            className={`${classNames} app__flex`}
        >
            <Component className={classNames} />
        </motion.div>
    )
}


export default MotionWrap