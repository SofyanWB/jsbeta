import React, { useState } from "react";
import Divider from '@mui/material/Divider';
import { Link as RouterLink } from 'react-router-dom'
import {
    Drawer,
    IconButton,
    List,
    ListItemText,
    makeStyles,
    Box
} from "@material-ui/core";
import '../../App.css';

import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const useStyles = makeStyles(() => ({
    listItem: {
        color: "#00012A",
        fontSize: "1.2em",
        fontWeight: "600"
    },
    listChildItem: {
        color: "#00012A",
        paddingLeft: "19px",
        fontSize: "1.1em"
    },
    icon: {
        width: 40,
        height: 40,
        color: "white",
        // background: "#1455A3",
        // background: "rgba(20, 85, 163, 0.85)",
        background: "#ED783E",
        opacity: "90%",
        backdropFilter: "blur(10px)",
        position: "absolute",
    },
    drawerPaper: {
        textAlign: "center",
        marginLeft: "-15px",
        // borderRadius: "10px",
        // backdropFilter: "blur(20px)",
        // background: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.4)",
        width: "320px",
        height: "100%",
        // padding: "10px",
    }
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    const [openPeta, setOpenPeta] = React.useState(false);
    const handleClickPeta = () => {
        setOpenPeta(!openPeta);
    };

    const [openPeta3D, setOpenPeta3D] = React.useState(false);
    const handleClickPeta3D = () => {
        setOpenPeta3D(!openPeta3D);
    };

    const [openPetaKerja, setOpenPetaKerja] = React.useState(false);
    const handleClickPetaKerja = () => {
        setOpenPetaKerja(!openPetaKerja);
    };

    const [openLayanan, setOpenLayanan] = React.useState(false);
    const handleClickLayanan = () => {
        setOpenLayanan(!openLayanan);
    };

    const [openSubMenu, setOpenSubMenu] = React.useState(false);
    const handleClickSubMenu = () => {
        setOpenSubMenu(!openSubMenu);
    };

    const [openInformasi, setOpenInformasi] = React.useState(false);
    const handleClickInformasi = () => {
        setOpenInformasi(!openInformasi);
    };

    return (
        <>
            <Drawer
                classes={{ paper: classes.drawerPaper }}
                className={classes.listScroll}
                elevation={0}
                anchor={"left"}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}>
                <Box component={RouterLink} to="/"
                    sx={{
                        margin: "0 auto",
                        textAlign: "center"
                    }}>
                    <img style={{ width: '80%', textAlign: "center" }} src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/8b934e82c23c443c8e54c46fad3cee2d/data" alt="" />
                </Box>
                <Divider
                    sx={{
                        bgcolor: "rgb(229, 234, 242)",
                        height: "1px",
                    }} />
                <List style={{ paddingLeft: "20px" }}>
                    <ListItemButton href="/">
                        <HomeOutlinedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="Beranda" className={classes.listItem} disableTypography />
                    </ListItemButton>
                    <ListItemButton onClick={handleClickPeta}>
                        <MapOutlinedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="Peta" className={classes.listItem} disableTypography />
                        {openPeta ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openPeta} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton component={RouterLink} to="/interaktif" sx={{ pl: 4 }}>
                                <ListItemText primary="Interaktif" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                            <ListItemButton component={RouterLink} to="/tematik" sx={{ pl: 4 }}>
                                <ListItemText primary="Tematik" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                            <ListItemButton sx={{ paddingLeft: "50px" }} onClick={handleClickPeta3D}>
                                <ViewInArRoundedIcon style={{ marginRight: "10px" }} />
                                <ListItemText primary="3D" className={classes.listItem} disableTypography />
                                {openPeta3D ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={openPeta3D} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton component={RouterLink} to="/peta-3d-basemaps" sx={{ paddingLeft: "65px" }}>
                                        <ListItemText primary="3D Basemaps" className={classes.listChildItem} disableTypography />
                                    </ListItemButton>
                                    <ListItemButton component={RouterLink} to="/peta-3d-transit-orientied" sx={{ paddingLeft: "65px" }}>
                                        <ListItemText primary="3D Transit Orientied" className={classes.listChildItem} disableTypography />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleClickPetaKerja}>
                        <PublicOutlinedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="Peta Kerja" className={classes.listItem} disableTypography />
                        {openPetaKerja ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openPetaKerja} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton component={RouterLink} to="/digitasi-aset-kib-a" target="_blank" sx={{ pl: 4 }}>
                                <ListItemText primary="Digitasi Aset KIB A" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                            <ListItemButton component={RouterLink} to="/data-tenaga-kesehatan" target="_blank" sx={{ pl: 4 }}>
                                <ListItemText primary="Data Tenaga Kesehatan" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                            <ListItemButton component={RouterLink} to="/perda-1-tahun-2014" target="_blank" sx={{ pl: 4 }}>
                                <ListItemText primary="Perda 1 Tahun 2014" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                            <ListItemButton component={RouterLink} to="/peta-hasil-ukur-aset" target="_blank" sx={{ pl: 4 }}>
                                <ListItemText primary="Peta Hasil Ukur Aset" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                            <ListItemButton component={RouterLink} to="/peta-kerja-lainnya" target="_blank" sx={{ pl: 4 }}>
                                <ListItemText primary="Lainnya" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleClickLayanan}>
                        <AppsRoundedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="Layanan" className={classes.listItem} disableTypography />
                        {openLayanan ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openLayanan} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton component={RouterLink} to="/irk" target="_blank" sx={{ pl: 4 }}>
                                <ListItemText primary="IRK" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                            <ListItemButton component={RouterLink} to="/smart-rdtr" target="_blank" sx={{ pl: 4 }}>
                                <ListItemText primary="SMART RDTR" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton component={RouterLink} to="/unduh" onClick={handleClickSubMenu}>
                        <FileDownloadOutlinedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="Unduh" className={classes.listItem} disableTypography />
                    </ListItemButton>
                    <ListItemButton onClick={handleClickInformasi}>
                        <InfoOutlinedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="Informasi" className={classes.listItem} disableTypography />
                        {openInformasi ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openInformasi} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton component={RouterLink} to="/berita" sx={{ pl: 4 }}>
                                <ListItemText primary="Berita" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                            <ListItemButton component={RouterLink} to="/panduan-jakarta-satu" sx={{ pl: 4 }}>
                                <ListItemText primary="Panduan Jakarta Satu" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                            <ListItemButton component={RouterLink} to="/galeri" sx={{ pl: 4 }}>
                                <ListItemText primary="Galeri" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                            <ListItemButton component={RouterLink} to="/penghargaan" sx={{ pl: 4 }}>
                                <ListItemText primary="Penghargaan" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                            <ListItemButton component={RouterLink} to="/integrasi-sistem" sx={{ pl: 4 }}>
                                <ListItemText primary="Integrasi Sistem" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                            <ListItemButton component={RouterLink} to="/data-api" sx={{ pl: 4 }}>
                                <ListItemText primary="Data API" className={classes.listChildItem} disableTypography />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton component={RouterLink} to="/publikasi">
                        <DescriptionRoundedIcon style={{ marginRight: "10px" }} />
                        <ListItemText primary="Publikasi" className={classes.listItem} disableTypography />
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
                <DragHandleRoundedIcon />
            </IconButton>
        </>
    );
}
export default DrawerComponent;
