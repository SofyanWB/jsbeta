import React, { useState } from "react";
import {
  AppBar,
  useTheme,
  useMediaQuery,
  Box,
} from "@material-ui/core";
import DrawerComponent from "./Drawer";
import { Link as RouterLink } from 'react-router-dom';
import {
  Nav,
  NavContainer,
  NavItem,
} from '../../styles/appbar/index';
import { menuItems } from '../../menuItems';
import MenuItems from './MenuItems';
import '../../App.css';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("1285"));

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

  return (
    <AppBar className="navbar" elevation={0}>
      <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <NavContainer>
          <Box component={RouterLink} to="/"
            sx={{
              alignItems: "center",
              display: "flex",
              marginLeft: isMobile ? "auto" : "0" ,
              marginRight: "0"
            }}>
            <img style={{ width: '180px' }} src="/images/navbar/navbar-orange.png" alt="" />
          </Box>
          {isMobile ? (<DrawerComponent />) : (
            <NavItem className="menus">
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems
                    items={menu}
                    key={index}
                    depthLevel={depthLevel} />
                );
              })}
            </NavItem>
          )}
        </NavContainer>
      </Nav>
    </AppBar>
  );
}

export default Navbar;