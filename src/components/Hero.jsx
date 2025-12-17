import {motion} from "framer-motion";
import pfp from "../assets/pfp.png"



const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 1,
        transition: 
            { duration: 0.5,
            staggerChildren: 0.5
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

const q = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8">
                <motion.img src={pfp} alt="Marib Hamid" className="border border-stone-900 rounded-full lg:rounded-3xl "
                width={650}
                height={650} 
                initial={{x:100, opacity:0}} 
                animate={{x:0, opacity:1}}
                transition={{duration:1, delay:1}} />
            </div>
        </div>
        <div className="w-full lg:w-1/2">
            <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants} 
            className="flex flex-col items-center lg:items-start mt-10">
                <motion.h2 
                variants={childVariants}
                className="pb-2 text-4xl tracking-tighter lg:text-8xl">Marib Hamid</motion.h2>
                <motion.span
                variants={childVariants}
                className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">FRONT END DEVELOPER</motion.span>
                <motion.p 
                variants={childVariants}
                className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight text-stone-400">
                    I am a Front End Developer passionate about building clean, functional, and impactful digital experiences. Skilled in JavaScript, React, HTML, CSS, and responsive design, I enjoy turning concepts into responsive interfaces and efficient front-end systems.
                    With a strong focus on performance, usability, and design consistency, I aim to deliver applications that seamlessly connect users with technology. My goal is to create solutions that are both visually engaging and technically sound, combining creativity with problem-solving.
                </motion.p>
                <motion.a 
                variants={childVariants}
                href="/Marib Hamid Resume.pdf" download="Marib Hamid Resume" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-stone-300 px-6 py-3 text-lg font-semibold text-black shadow-md hover:bg-stone-700">Download Resume</motion.a>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default q
