import React from 'react'
import Header from '../components/Header'
import { FaWhatsapp } from 'react-icons/fa'
import logo_black from '../assets/img/logo_black.png'


const Contato = () => {

  return (
    <>
        <Header/>
        <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
            <img src={logo_black} alt="logo SB Music" className='mx-auto mb-4' />


            <p className="mt-3 text-gray-500 dark:text-gray-400">Ficaremos feliz em poder lhe atender</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">E-mail</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400">sbmusicstudio@gmail.com</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <a href='https://maps.app.goo.gl/zWhjHBvihoyqqH7x5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                </a>
                </span>
                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Localização</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400">Rua Silveira de Carvalho 56, Tamarineira, Recife-PE</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <FaWhatsapp className="w-6 h-6"  />
                </span>
                
                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Telefone</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">de Seg à Sab das 8:00 às 18:00.</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400">(081) 99515-0001</p>
            </div>
        </div>
    </div>
    </section>
</>
  )
}

export default Contato