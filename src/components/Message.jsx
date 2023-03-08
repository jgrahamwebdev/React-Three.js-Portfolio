
import { useState } from 'react'
import { motion } from "framer-motion";

    
    const Message = ({ variant, children }) => {
      const [timeOut, setTimeOut] = useState(null)
    
      setTimeout(() => {
        setTimeOut(1)
      }, 5000)
    
      return (
        timeOut !== 1 && <motion.div className={`alert alert-${variant} h-[5rem] w-[10rem] absolute top-[35%] left-[63%] green-pink-gradient p-[1px] rounded-[20px] shadow-card flex items-center justify-center z-50`} animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}>
            <div className="bg-tertiary rounded-[20px] h-[4.9rem] flex justifty-center items-center w-full px-4">
                <h3 className='text-white'>Click & Spin! &darr;</h3>
            </div>
        </motion.div>
      )
    }
    
    Message.defaultPros = {
      variant: 'info',
    }
    
    export default Message