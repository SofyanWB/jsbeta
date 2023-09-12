import React, { useState, useEffect, createContext } from "react";
import {
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useTranslation } from "react-i18next";

import Skeleton from '@mui/material/Skeleton';
import { HalamanDrawer } from "./Drawer";
import { Link as RouterLink } from 'react-router-dom';
import { withTranslation } from "react-i18next";
import {
  NavItem,
} from '../../styles/appbar/index';
import MenuItems from './MenuItems';
import { Box } from "@mui/material";

function Navbar(props) {
  const { t } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("1175"));

  const ItemList = [
    {
      title: t('drawer.beranda'),
      url: '/',
    },
    {
      title: t('drawer.peta'),
      url: '/',
      submenu: [
        {
          title: t('drawer.interaktif'),
          url: '/interaktif',
        },
        {
          title: t('drawer.tematik'),
          url: '/tematik',
        },
        {
          title: t('drawer.3d'),
          url: '/',
          submenu: [
            {
              title: t('drawer.3dBasemaps'),
              url: '/peta-3d-basemaps',
            },
            {
              title: t('drawer.3dTransitOriented'),
              url: '/peta-3d-transit-oriented',
            },
          ],
        },
      ],
    },
    {
      title: t('drawer.petaKerja'),
      url: '/',
      submenu: [
        {
          title: t('drawer.digitasiAsetKIBA'),
          url: '/digitasi-aset-kib-a',
        },
        {
          title: t('drawer.dataTenagaKesehatan'),
          url: '/data-tenaga-kesehatan',
        },
        {
          title: t('drawer.perda1Tahun2014'),
          url: '/perda-1-tahun-2014',
        },
        {
          title: t('drawer.petaHasilUkurAset'),
          url: '/peta-hasil-ukur-aset',
        },
        {
          title: t('drawer.lainnya'),
          url: '/peta-kerja-lainnya',
        },
      ],
    },
    {
      title: t('drawer.layanan'),
      url: '/',
      submenu: [
        {
          title: t('drawer.irk'),
          url: '/irk',
        },
        {
          title: t('drawer.smartRDTR'),
          url: '/smart-rdtr',
        },
      ],
    },
    {
      title: t('drawer.unduh'),
      url: '/unduh',
    },
    {
      title: t('drawer.informasi'),
      url: '/',
      submenu: [
        {
          title: t('drawer.berita'),
          url: '/berita',
        },
        {
          title: t('drawer.panduanJakartaSatu'),
          url: '/panduan-jakarta-satu',
        },
        {
          title: t('drawer.galeri'),
          url: '/galeri',
        },
        {
          title: t('drawer.penghargaan'),
          url: '/penghargaan',
        },
        {
          title: t('drawer.integrasiSistem'),
          url: '/integrasi-sistem',
        },
        {
          title: t('drawer.dataAPI'),
          url: '/data-api',
        },
      ],
    },
    {
      title: t('drawer.publikasi'),
      url: '/publikasi',
    },
  ];

  const [loading, setLoading] = useState(false);
  const handleSetLoading = () => {
    setLoading(true);
  };

  const [languageSelected, setLanguageSelected] = useState('id');
  const handleChange = (event, newLanguageSelected) => {
    if (newLanguageSelected !== null) {
      setLanguageSelected(newLanguageSelected);
    }

    localStorage.setItem('selectedLanguage', newLanguageSelected);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setLanguageSelected(storedLanguage);
    }
  }, []);

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const LanguageContext = createContext();

  const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(() => {
      const storedLanguage = localStorage.getItem('selectedLanguage');
      return storedLanguage || "id";
    });

    const handleChangeLanguage = (newLanguage) => {
      setCurrentLanguage(newLanguage);
      localStorage.setItem('selectedLanguage', newLanguage);
    };

    return (
      <LanguageContext.Provider value={{ currentLanguage, handleChangeLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('languageSelected');
    if (storedLanguage) {
      setLanguageSelected(storedLanguage);
    }
  }, []);

  return (
    <>
      <Box component={RouterLink} to="/"
        sx={{
          alignItems: "center",
          display: "flex",
          marginLeft: isMobile ? "auto" : "0",
          marginRight: "0",
        }}>
        <Skeleton variant='rounded' animation="wave" sx={{ width: 180, height: 50, display: loading ? "none" : "block" }} />
        <img onLoad={handleSetLoading} style={{ width: '180px', display: loading ? "block" : "none" }} src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/8b934e82c23c443c8e54c46fad3cee2d/data" alt="" />
      </Box>
      <div
        style={{
          alignItems: "center",
          display: "flex",
        }}>
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
          </NavItem>
        )}
        <LanguageProvider>
          <ToggleButtonGroup
            value={languageSelected}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{
              marginLeft: "12px",
              marginRight: "1px"
            }}>
            <ToggleButton value="id" onClick={() => changeLanguage('id')}>ID</ToggleButton>
            <ToggleButton value="en" onClick={() => changeLanguage('en')}>EN</ToggleButton>
          </ToggleButtonGroup>
        </LanguageProvider>
      </div>
    </>
  );
}

export const HalamanNavbar = withTranslation()(Navbar);