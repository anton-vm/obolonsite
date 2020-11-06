import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./styles/styles.css";
import "./styles/animate.css";
import Header from "./Components/Header/Header";
import Title from "./Components/Title/Titel";
import Range from "./Components/Range/Range";
import Obolon from "./Components/Obolon/Obolon";
import Zibert from "./Components/Zibert/Zibert";
import Hike from "./Components/Hike/Hike";
import Kwas from "./Components/Kwas/Kwas";
import History from "./Components/History/History";
import Chains from "./Components/Chains/Chains";
import Footer from "./Components/Footer/Footer";
import AboutProduct from "./Components/AboutProduct/AboutProduct";
import WOW from "wowjs";
import { CSSTransition } from "react-transition-group";
import Modal from "react-modal";
import scrollIntoView from "scroll-into-view-if-needed";
import _debounce from "lodash/throttle";

Modal.setAppElement("#root");

function App() {
  useEffect(() => {
    const wow = new WOW.WOW({
      offset: 200, 
    });
    wow.init();
  }, []);

  useEffect(() => {
    whereToScroll()
    window.addEventListener("scroll", _debounce(possitio, 50));
    if (window.screen.width < 430) {
      setScreenHeight(window.screen.height);
    } else {
      setScreenHeight(500);
    }
  }, []);

  const [openProduct, setOpenProduct] = useState(false);
  const [product, setProduct] = useState("");
  const [possitionY, setPossitoinY] = useState(false);
  const [screenHeight, setScreenHeight] = useState(0);
  const [blockPossition, setBlockPossition] = useState ("start")

  const toggleProductWindow = () => {
    const open = !openProduct;
    setOpenProduct(open);
  };

  const productName = (e) => {
    e.preventDefault();
    const beer = e.target.dataset.name;

    if (beer !== undefined) {
      setProduct(beer);
      toggleProductWindow();
    } else return;
  };

  const scroll = (e) => {
    const id = e.target.dataset.id;
    if (id !== undefined) {
      const node = document.getElementById(id);
      scrollIntoView(node, {
        behavior: "smooth",
        block: blockPossition,
        scrollMode: "if-needed",
      });
    } else return;
  };

  const whereToScroll =() => {
    if (window.screen.width < 480) {
      setBlockPossition("start")
    } else {
      setBlockPossition('center')
    }
  }

  const listenClick = (e) => {
    productName(e);
    scroll(e);
  };

  const possitio = () => {
    const y = window.scrollY;
    if (y > 300) {
      setPossitoinY(true);
    } else {
      setPossitoinY(false);
    }
  };

  return (
    <>
      <div className={'mainContainer'}>
        <Modal
          isOpen={openProduct}
          onRequestClose={toggleProductWindow}
          contentLabel="My dialog"
          className="productDescription"
          overlayClassName="productOverlay"
          closeTimeoutMS={500}
        >
          <AboutProduct
            toggleProductWindow={toggleProductWindow}
            product={product}
            className={"alert"}
          />
        </Modal>

        <div onClick={listenClick} onScroll={possitio}>
          {possitionY && <Header />}
          <Title screenHeight={screenHeight} />
          <Range />
          <Obolon />
          <Zibert />
          <Hike />
          <Kwas />
          <History />
          <Chains />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
