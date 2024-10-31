import React from 'react'
import Header from '../components/Header'

import { Card } from "flowbite-react";

const Precos = () => {
  
  return (
    <>
      <Header/>
      <div className='w-screen md:h-screen bg-gray-800 '>
      <section className='grid grid-cols-1 md:grid-cols-3 container justify-center gap-6 p-6 mx-auto'>
      <Card
        className="max-w-sm hover:scale-105 "
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://c5819f593f.nxcli.io/media/amasty/blog/uploads/2023/06/ezgif.com-webp-to-png-2.png"
        >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Gravação
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>

      <Card
        className="max-w-sm hover:scale-105"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://orrameuestudios.com.br/site/wp-content/uploads/2017/04/2-Live-Room-1.jpg"
        >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Sala de Ensaio
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>

      <Card
        className="max-w-sm hover:scale-105 shadow"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://static.wixstatic.com/media/5dc3d8_2e9b6609a1924fe7802e3d6ba957bb2f~mv2.jpg/v1/fill/w_520,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5dc3d8_2e9b6609a1924fe7802e3d6ba957bb2f~mv2.jpg"
        >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Mixagem e Masterização
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
    </section> 
</div>            
    </>
  )
}

export default Precos