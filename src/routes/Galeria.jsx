import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button } from "flowbite-react";

import Artistas from '../components/Artistas';

const Galeria = () => {
  return (
<>
<Header/>
    <Artistas/>
<Footer/>
</>
  )
}

export default Galeria