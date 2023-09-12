import React, { useState } from "react";
import {
  AppBar,
  useTheme,
  useMediaQuery,
  Box
} from "@material-ui/core";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Skeleton from '@mui/material/Skeleton';
import { HalamanDrawer } from "./Drawer";
import { Link as RouterLink } from 'react-router-dom';
import {
  Nav,
  NavContainer,
  NavItem,
} from '../../styles/appbar/indexNavbar2';
import { ItemList } from "./ItemList";
import MenuItems from './MenuItems';

function Navbar2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("1070"));

  const [languageSelected, setLanguageSelected] = useState('id');
  const handleChange = (event, newLanguageSelected) => {
    setLanguageSelected(newLanguageSelected);
  };

  const [loading, setLoading] = useState(false);
  const handleSetLoading = () => {
    setLoading(true);
  };

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
            <Skeleton variant='rounded' animation="wave" sx={{ width: 180, height: 50, display: loading ? "none" : "block" }} />
            <img onLoad={handleSetLoading} style={{ width: '180px', display: loading ? "block" : "none" }} src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/8b934e82c23c443c8e54c46fad3cee2d/data" alt="" />
          </Box>
          {isMobile ? (<HalamanDrawer />) : (
            <NavItem className="menus">
              {ItemList.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems
                    items={menu}
                    key={index}
                    depthLevel={depthLevel} />
                );
              })}
              <ToggleButtonGroup
                color="primary"
                size="small"
                value={languageSelected}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{
                  marginLeft: "10px",
                  marginRight: "3px",


                  "& .MuiToggleButtonGroup-grouped": {
                    borderRadius: "20px",
                    color: "black",
                  }
                }}
              >
                <ToggleButton value="id">ID</ToggleButton>
                <ToggleButton value="en">EN</ToggleButton>
              </ToggleButtonGroup>
            </NavItem>
          )}
        </NavContainer>
      </Nav>
    </AppBar>
  );
}

export default Navbar2;
