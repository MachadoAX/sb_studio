import React from 'react'
import bgStudio from '../assets/img/bg-studio.avif'
import { Carousel } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa";
import './home.css'
import Menu from '../components/Menu'
import logo_sb_1 from '../assets/img/sb_logo_1.png'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <Menu/>
    <div className='bg-[#0b0e37] w-screen h-screen flex home' >     
        <img src={logo_sb_1} className='m-auto w-72' alt="" />
    </div>

    <div className="bg-gray-200 w-full rounded-lg font-[sans-serif] overflow-hidden max-w-5xl mx-auto p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center my-4">
        <div className="lg:col-span-2 p-10">
          <h1 className="sm:flex text-3xl font-bold text-gray-800 sm:justify-center sm:m-auto">SB MUSIC STUDIO</h1>
          <h1 className="flex text-xl font-bold text-gray-800 justify-center m-auto">Gravação | Mixagem | Ensaios</h1>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.</p>

        <button type="button"
            className="px-6 py-3 mt-8 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-black hover:bg-blue-700 mx-auto flex justify-center items-center"><a href="https://wa.me/5581995150001" className='flex m-auto'>Fale com a gente <FaWhatsapp className='flex ml-2 my-auto'/></a>
        </button> 
        </div>
        <img src="https://readymadeui.com/cardImg.webp" className="w-full h-full object-cover shrink-0 rounded-sm" />
      </div>
    </div>

    <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Tabela de preço</h2>
        <p className="sm:text-lg text-base text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-6 mt-6'>
            <Link to={'/sbmusic-tabela-de-precos'}>
                <div className='flex justify-center items-center bg-slate-500/70 rounded hover:bg-slate-400/90 p-3 w-44 h-10 md:w-40 md:h-28 '>
                    <p>Gravação</p>
                </div>
            </Link>
            <Link to={'/sbmusic-tabela-de-precos'}>
              <div className='flex justify-center items-center bg-slate-500/70 rounded hover:bg-slate-400/90 p-3 w-44 h-10 md:w-40 md:h-28 '>
                  <p>Ensaios</p>
              </div>
            </Link>
            <Link to={'/sbmusic-tabela-de-precos'}>
              <div className='flex justify-center items-center bg-slate-500/70 rounded hover:bg-slate-400/90 p-3 w-44 h-10 md:w-40 md:h-28 '>
                  <p>Mixagens</p>
              </div>
            </Link>
            <Link to={'/sbmusic-tabela-de-precos'}>
              <div className='flex justify-center items-center bg-slate-500/70 rounded hover:bg-slate-400/90 p-3 w-44 h-10 md:w-40 md:h-28 '>
                  <p>Aluguel de Salas</p>
              </div>
            </Link>
            <Link to={'/sbmusic-tabela-de-precos'}>
                <div className='flex justify-center items-center bg-slate-500/70 rounded hover:bg-slate-400/90 p-3 w-44 h-10 md:w-40 md:h-28 '>
                    <p>Aluguel de Som</p>
                </div>
            </Link>
        </div>

        <div className="w-screen md:hidden mt-4">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img src="https://cwblive.com/wp-content/uploads/2017/11/salu1.jpg" className='m-auto' alt="Maciel Salú" />
            <img src="https://pbs.twimg.com/media/CZ55qD8WYAAMc61.jpg:large" alt="..." />
            <img src="https://i0.wp.com/fiquesabendope.com/wp-content/uploads/2023/10/Design-sem-nome-7.jpg?resize=930%2C620&ssl=1" alt="..." />
            <img src="https://public-rf-upload.minhawebradio.net/2751/news/70049789ef8bdf5c3a0b52725ac7c71e.jpg" alt="..." />
            <img src="https://paraibaonline.com.br/wp-content/uploads/2024/05/2024-alcymar-monteiro.jpg" alt="..." />
          </Carousel>
        </div>
      </div>

      </div>
    </div>
  <Footer/>
    </>
    
  )
}

export default Home