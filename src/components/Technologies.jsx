import { RiReactjsLine} from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiTailwindcss } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import { motion } from "framer-motion"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{y:[10, -10], transition:{duration:duration, ease:"linear", repeat:Infinity, repeatType:"reverse"}},
})

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5, delay:0.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5, delay:0.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2)}
                className="relative group inline-block"
                >
                {/* Icon */}
                <RiReactjsLine className="text-7xl text-cyan-400 transition-transform duration-200 group-hover:scale-120" />

                {/* Tooltip Text */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-sm rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    React.js
                </span>
        </motion.div>


        <motion.div
             initial="initial" animate="animate" variants={iconVariants(2)}
            className="p-4 relative group inline-block">
            <TbBrandNextjs className="text-7xl transition-transform duration-200 hover:scale-120" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-sm rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Next.js
                </span>
        </motion.div>


        <motion.div 
        initial="initial" animate="animate" variants={iconVariants(2)}
        className="p-4 relative group inline-block">
            <SiMongodb className="text-7xl text-cyan-600 transition-transform duration-200 hover:scale-120" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-sm rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    MongoDB
                </span>
        </motion.div>


        <motion.div
        initial="initial" animate="animate" variants={iconVariants(2)}
        className="p-4 relative group inline-block">
            <DiRedis className="text-7xl text-red-700 transition-transform duration-200 hover:scale-120" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-sm rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    RedIS
                </span>
        </motion.div>


        <motion.div
        initial="initial" animate="animate" variants={iconVariants(2)}
        className="p-4 relative group inline-block">
            <FaNodeJs className="text-7xl text-green-500 transition-transform duration-200 hover:scale-120" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-sm rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Node.js
                </span>
        </motion.div>


        <motion.div
        initial="initial" animate="animate" variants={iconVariants(2)}
        className="p-4 relative group inline-block">
            <BiLogoPostgresql className="text-7xl text-sky-700 transition-transform duration-200 hover:scale-120" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-sm rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    SQL
                </span>
        </motion.div>


        <motion.div
        initial="initial" animate="animate" variants={iconVariants(2)}
        className="p-4 relative group inline-block">
            <SiTailwindcss className="text-7xl text-sky-400 transition-transform duration-200 hover:scale-120" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-sm rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    TailwindCSS
                </span>
        </motion.div>


        <motion.div 
        initial="initial" animate="animate" variants={iconVariants(2)}
        className="p-4 relative group inline-block">
            <SiJavascript className="text-7xl text-yellow-400 transition-transform duration-200 hover:scale-120" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-sm rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    JavaScript
                </span>
        </motion.div>
        

        
        <motion.div 
        initial="initial" animate="animate" variants={iconVariants(2)}
        className="p-4 relative group inline-block">
            <SiHtml5 className="text-7xl text-orange-600 transition-transform duration-200 hover:scale-120" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-sm rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    HTML5
                </span>
        </motion.div>


        
        <motion.div 
        initial="initial" animate="animate" variants={iconVariants(2)}
        className="p-4 relative group inline-block">
            <SiCss3 className="text-7xl text-orange-400 transition-transform duration-200 hover:scale-120" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-sm rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    CSS
                </span>
        </motion.div>



      </motion.div>
    </div>
  )
}

export default Technologies
