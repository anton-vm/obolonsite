import React, {useEffect} from 'react';
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
import WOW from 'wowjs'



function App() {

  // componentDidMount() {
  //   const wow = new WOW.WOW();
  //   wow.init();
  // }

  useEffect(() =>{
       const wow = new WOW.WOW();
    wow.init();
    console.log('Hello')
  }, [])

  
  return (
    <>
    <Header/>
    <Title/>
    <Range/>
    <Obolon/>
    <Zibert/>
    <Hike/>
    <Kwas/>
    <History/>
    <Chains/>
    <Footer/>
    </>

  );
}

export default App;
