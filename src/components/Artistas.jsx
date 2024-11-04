import React from 'react'
import './artista.css'

import { FaYoutube } from "react-icons/fa";

const Artistas = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Nossas
            Produções</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">       
            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-80 img-andre">
                <div className="flex justify-between w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 items-center">
                    <div className='flex flex-col items-center'>
                        <h2 className="mt-1 text-xl font-semibold text-gray-800 capitalize dark:text-white">Maciel Salú</h2>
                        <p className="mt-1 text-sm tracking-wider text-orange-900 uppercase dark:text-blue-400 ">Mãe do Mar</p>
                    </div>
                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DFytqWl0I3lc&psig=AOvVaw1rjiu0O8RdIOf9D5BYHbxw&ust=1730823248067000&source=images&cd=vfe&opi=89978449&ved=0CAUQtaYDahcKEwjg6POZicOJAxUAAAAAHQAAAAAQBw" target="_blank" className='hover:text-red-700'><FaYoutube className='w-16 h-16' /></a>
                </div>
            </div>
            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-80 img-artista2">
                <div className="flex justify-between w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 items-center">
                    <div className='flex flex-col items-center'>
                        <h2 className="mt-1 text-xl font-semibold text-gray-800 capitalize dark:text-white">Cezinha do Acordeon</h2>
                        <p className="mt-1 text-sm tracking-wider text-orange-900 uppercase dark:text-blue-400 ">Já com saudades</p>
                    </div>
                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DFytqWl0I3lc&psig=AOvVaw1rjiu0O8RdIOf9D5BYHbxw&ust=1730823248067000&source=images&cd=vfe&opi=89978449&ved=0CAUQtaYDahcKEwjg6POZicOJAxUAAAAAHQAAAAAQBw" target="_blank" className='hover:text-red-700'><FaYoutube className='w-16 h-16' /></a>
                </div>
            </div>
            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-80 img-andre">
                <div className="flex justify-between w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 items-center">
                    <div className='flex flex-col items-center'>
                        <h2 className="mt-1 text-xl font-semibold text-gray-800 capitalize dark:text-white">Maciel Salú</h2>
                        <p className="mt-1 text-sm tracking-wider text-orange-900 uppercase dark:text-blue-400 ">Mãe do Mar</p>
                    </div>
                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DFytqWl0I3lc&psig=AOvVaw1rjiu0O8RdIOf9D5BYHbxw&ust=1730823248067000&source=images&cd=vfe&opi=89978449&ved=0CAUQtaYDahcKEwjg6POZicOJAxUAAAAAHQAAAAAQBw" target="_blank" className='hover:text-red-700'><FaYoutube className='w-16 h-16' /></a>
                </div>
            </div>
            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-80 img-andre">
                <div className="flex justify-between w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 items-center">
                    <div className='flex flex-col items-center'>
                        <h2 className="mt-1 text-xl font-semibold text-gray-800 capitalize dark:text-white">Maciel Salú</h2>
                        <p className="mt-1 text-sm tracking-wider text-orange-900 uppercase dark:text-blue-400 ">Mãe do Mar</p>
                    </div>
                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DFytqWl0I3lc&psig=AOvVaw1rjiu0O8RdIOf9D5BYHbxw&ust=1730823248067000&source=images&cd=vfe&opi=89978449&ved=0CAUQtaYDahcKEwjg6POZicOJAxUAAAAAHQAAAAAQBw" target="_blank" className='hover:text-red-700'><FaYoutube className='w-16 h-16' /></a>
                </div>
            </div>

            
        </div>
    </div>
</section>
  )
}

export default Artistas