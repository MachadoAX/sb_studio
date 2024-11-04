import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

import { Card } from "flowbite-react";

const Precos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalE, setOpenModalE] = useState(false);
  const [openModalM, setOpenModalM] = useState(false);
  const [openModalLoc, setOpenModalLoc] = useState(false);
  
  return (
    <div className='w-screen h-screen'>
      <Header/>
      
      <section className='h-auto w-screen bg-gray-800 grid grid-cols-1 md:grid-cols-3 md:pb-8 justify-center gap-6 p-6 mx-auto'>
      <Card
        className="max-w-sm hover:scale-105 "
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://c5819f593f.nxcli.io/media/amasty/blog/uploads/2023/06/ezgif.com-webp-to-png-2.png"
        >
        <div className='h-full justify-around flex flex-col'>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Gravação
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Gravações profissional de áudio com microfones condensadores e dinâmicos e interface de áudio Focusrite Scarlett 18i20. 
          </p>
          <Button onClick={() => setOpenModal(true)}>Saiba Mais</Button>
        </div>        
          
      </Card>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>GRAVAÇÃO</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
              Lista de valores: 
              <ul className='text-gray-400'>
                <li>valor de alguma coisa </li>
                <li>valor de alguma coisa</li>
                <li>valor de alguma coisa</li>
              </ul>
            </p>
          </div>
        </Modal.Body>
      </Modal>


      <Card
        className="max-w-sm hover:scale-105"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://orrameuestudios.com.br/site/wp-content/uploads/2017/04/2-Live-Room-1.jpg"
        >
        <div className='h-full justify-around flex flex-col'>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sala de Ensaio
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <Button onClick={() => setOpenModalE(true)}>Saiba Mais</Button>
        </div>
      </Card>
      <Modal dismissible show={openModalE} onClose={() => setOpenModalE(false)}>
        <Modal.Header>SALA DE ENSAIO</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
              Lista de valores: 
              <ul className='text-gray-400'>
                <li>valor de sala para locação </li>
                <li>valor de sala para locação</li>
                <li>valor de sala para locação</li>
              </ul>
            </p>
          <img src="https://cmstudiorj.com.br/wp-content/uploads/2016/11/img_5860.jpg" alt="sala de ensaio" />
          </div>
        </Modal.Body>
      </Modal>

      <Card
        className="max-w-sm hover:scale-105 shadow"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://static.wixstatic.com/media/5dc3d8_2e9b6609a1924fe7802e3d6ba957bb2f~mv2.jpg/v1/fill/w_520,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5dc3d8_2e9b6609a1924fe7802e3d6ba957bb2f~mv2.jpg"
        >
        <div className='h-full justify-around flex flex-col'>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mixagem e Masterização
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <Button onClick={() => setOpenModalM(true)}>Saiba Mais</Button>
        </div>
        
      </Card>
      <Modal dismissible show={openModalM} onClose={() => setOpenModalM(false)}>
        <Modal.Header>MIXAGEM</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
              Lista de valores: 
              <ul className='text-gray-400'>
                <li>valor de MIXAGEM E MATERIZAÇÃO </li>
                <li>valor de MIXAGEM E MATERIZAÇÃO</li>
                <li>valor de MIXAGEM E MATERIZAÇÃO</li>
              </ul>
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <Card
        className="max-w-sm hover:scale-105 shadow"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://www.modelleventos.com.br/imagens/informacoes/aluguel-som-eventos-02.jpg"
        >
        <div className='h-full justify-around flex flex-col'>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ALUGUEL DE SOM
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia est dicta dolorum facere consequuntur tempore.
          </p>
          <Button onClick={() => setOpenModalLoc(true)}>Saiba Mais</Button>
        </div>
        
      </Card>
      <Modal dismissible show={openModalLoc} onClose={() => setOpenModalLoc(false)}>
        <Modal.Header>LOCAÇÃO</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
              Lista de valores: 
              <ul className='text-gray-400'>
                <li>Mesa de som </li>
                <li>Toca CD</li>
                <li>Radiola de Ficha</li>
              </ul>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </section>           
<Footer/>
    </div>
  )
}

export default Precos