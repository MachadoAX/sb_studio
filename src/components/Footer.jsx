import React from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'



const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-12 px-4 font-sans tracking-wide ">
    <div className="text-center">
      <h6 className="text-base ">Fala com a gente</h6>

      <ul className="flex flex-wrap justify-center gap-x-8 gap-4 my-8">
        <li><a href="javascript:void(0)" className="text-xl hover:text-gray-400">
          <FaWhatsapp className="w-6 h-6"  />
        </a>
        </li>


        <li><a href="javascript:void(0)" className="text-xl hover:text-gray-400">
            <FaInstagram className="w-6 h-6" />
          </a>
        </li>

      </ul>

      <p className="text-xs">© LAX-DESINGER. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer