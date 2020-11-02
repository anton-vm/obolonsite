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
    console.log(beer)
    if (beer !== undefined) {
    setProduct(beer)
    toggleProductWindow()
    }
    else return
  }
  
  return (
    <>
    {/* {openProduct && 
    <CSSTransition
    in={openProduct}
    className="alert"
    timeout={{ enter: 500 }}

    >
    <AboutProduct toggleProductWindow={toggleProductWindow} product={product} className={"alert"}/>
    </CSSTransition> 
    } */}

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

    <div onClick={productName}>
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
