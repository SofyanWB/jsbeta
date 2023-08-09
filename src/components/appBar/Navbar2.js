import React from "react";
import {
  AppBar,
  useTheme,
  useMediaQuery,
  Box
} from "@material-ui/core";
import DrawerComponent from "./Drawer";
import { Link as RouterLink } from 'react-router-dom';
import {
  Nav,
  NavContainer,
  NavItem,
} from '../../styles/appbar/indexNavbar2';
import { menuItems } from '../../menuItems';
import MenuItems from './MenuItems';

function Navbar2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("1285"));

  return (
    <AppBar className="navbar" elevation={0}>
      <Nav>
        <NavContainer>
          <Box component={RouterLink} to="/"
            sx={{
              alignItems: "center",
              display: "flex",
              marginLeft: isMobile ? "auto" : "0",
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

export default Navbar2;