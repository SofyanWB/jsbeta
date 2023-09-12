import React, { useState, useEffect } from "react";
import { HalamanNavbar } from "../../src/components/appBar/Navbar";
import {
  AppBar,
} from "@material-ui/core";
import {
  Nav,
  NavContainer
} from '../styles/appbar/index';
import '../styles/appbar/NavbarCSS.css';
import { HalamanFooter } from "../../src/components/footer/index";
import Banner from "../../src/components/banner/index";
import Box from "../../src/components/box/index";

const Beranda = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 400) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  useEffect(() => {
    document.title = "Jakarta Satu (Satu Peta, Satu Data, Satu Kebijakan)";
  }, []);

  return (
    <div>
      <AppBar className="navbar" elevation={0} >
        <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
          <NavContainer>
            <HalamanNavbar />
          </NavContainer>
        </Nav>
      </AppBar>
      <Banner />
      <Box />
      <HalamanFooter />
    </div >
  );
};

export default Beranda;