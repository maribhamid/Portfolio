import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="#" className="bg-gradient-to-r from-stone-600 to-stone-400 bg-clip-text text-4xl tracking-tight text-transparent font-sans font-bold hover:scale-150">MHR</a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/marib-hamid-8a3914258/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl text-gray-400 hover:text-white hover:scale-120"><FaLinkedin />
            </a>

            <a href="https://github.com/maribhamid?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-2xl text-gray-400 hover:text-white hover:scale-120"><FaGithub />
            </a>

            <a href="https://www.instagram.com/rathermarib_?igsh=MW9kcTFoNmpxcHB2dw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-2xl text-gray-400 hover:text-white hover:scale-120"><FaInstagram />
            </a>

            <a href="mailto:maribhamid098@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="GMail" className="text-2xl text-gray-400 hover:text-white hover:scale-120"><FaEnvelope />
            </a>
        </div>
    </nav>
  )
}

export default Navbar;
