
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Message from "./Message";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">

            {/* TITLE SECTION */}
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auot flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#3742fa]"/>
                    <div className="w-1 sm:h-80 h-40 violet-gradient"/>
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#2d50ed]">Jordan</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I am a Full Stack Developer who specializes in <br className="sm:block hidden"/> MERN Stack, Python/Django, & Three.js. <br className="sm:block hidden" /> Lets build something cool!
                    </p>
                </div>
            </div>

            <Message />

            {/* THREE.JS MODEL */}
            <ComputersCanvas />

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
              <a href='#about'>
              {/* <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-center m-auto p-2'>
                <motion.div
              animate={{
                y: [0, 22, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
            </div> */}
           <motion.div className="text-center text-[3rem]" animate={{
                y: [0, 22, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}>&darr;</motion.div>
              
            </a>
          </div>

        </section>
    )
}

export default Hero
