import React from 'react'
import { Link } from 'react-router-dom'
import Galeria from '../routes/Galeria'
import logo_black from '../assets/img/logo_black.png'
import logo_branca from '../assets/img/sb_logo_1.png'

const Menu = () => {
  return (
    <nav className='fixed top-0 z-10 backdrop-opacity-10 flex w-screen justify-between px-4 items-center text-slate-200 bg-black/30'>
        <div>
            <Link to={'/'}>
                <img src={logo_branca} alt="" className='w-12 my-2'/>
            </Link>
        </div>
            <div className="flex">
                <Link to={'/'}>
                <button class="font-bold py-2 px-4 font-sans hover:text-slate-400 rounded focus:text-yellow-800 mr-5">
                Home
                </button>
                </Link>
                <Link to={'/sbmusic-tabela-de-precos'}>
                <button class="font-bold py-2 px-4 font-sans hover:text-slate-400 rounded focus:text-yellow-800 mr-5">
                Preços
                </button>
                </Link>
                <Link to={'/galeria'}>
                <button class="font-bold py-2 px-4 font-sans hover:text-slate-400 rounded focus:text-yellow-800 mr-5">
                Fotos
                </button>
                </Link>
                
        </div>
        
    </nav>
  )
}

export default Menu