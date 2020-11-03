import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './styles/styles.css';
import './styles/animate.css'
import Header from './Components/Header/Header'
import Title from "./Components/Title/Titel"
import Range from "./Components/Range/Range"
import Obolon from './Components/Obolon/Obolon'
import Zibert from './Components/Zibert/Zibert'
import Hike from "./Components/Hike/Hike"
import Kwas from './Components/Kwas/Kwas'
import History from "./Components/History/History"
import Chains from './Components/Chains/Chains'
import Footer from "./Components/Footer/Footer"
import AboutProduct from "./Components/AboutProduct/AboutProduct"
import WOW from 'wowjs'
import {CSSTransition} from 'react-transition-group'
import Modal from "react-modal";
import scrollIntoView from 'scroll-into-view-if-needed'

Modal.setAppElement("#root");



function App() {

  useEffect(() =>{
       const wow = new WOW.WOW();
    wow.init();
  }, [])

  const [openProduct, setOpenProduct] = useState(false)
  const [product, setProduct] = useState('')


  const toggleProductWindow = () => {
    const open = !openProduct
    setOpenProduct(open)
  }

  const productName = (e) => {
    e.preventDefault()
    const beer = e.target.dataset.name
    
    if (beer !== undefined) {
    setProduct(beer)
    toggleProductWindow()
    }
    else return
  }

  const scroll = (e) => {
    const id = e.target.dataset.id
    if (id !== undefined) {
      const node = document.getElementById(id)
      scrollIntoView(node, { behavior: 'smooth', block: 'start', scrollMode: 'if-needed' })
    }
    else return
  }

  const listenClick = (e) => {
    productName (e);
    scroll(e)
  }
  
  return (
    <>


 <Modal
        isOpen={openProduct}
        onRequestClose={toggleProductWindow}
        contentLabel="My dialog"
        className="productDescription"
        overlayClassName="productOverlay"
        closeTimeoutMS={500}
      >
        <AboutProduct toggleProductWindow={toggleProductWindow} product={product} className={"alert"}/>
      </Modal>

    <div onClick={listenClick} >
    <Header/>
    <Title/>
    <Range/>
    <Obolon />
    <Zibert/>
    <Hike/>
    <Kwas/>
    <History/>
    <Chains/>
    <Footer/>
    </div>
    </>

  );
}

export default App;
