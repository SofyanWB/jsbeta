import React from 'react';
import { HalamanNavbar } from "../../src/components/appBar/Navbar";
import {
    AppBar,
} from "@material-ui/core";
import {
    Nav,
    NavContainer
} from '../styles/appbar/indexNavbar2';
import { HalamanFooter } from "../../src/components/footer/index";
import { withTranslation } from 'react-i18next';
import { Divider } from '@mui/material';
import {
    CustomizedTables,
    CustomizedTables2,
    BoxAtas,
    BoxTitle,
    BoxContainer,
    BoxLittleTitle,
} from './routeStyle/DataAPIStyle';

function DataAPI(props) {
    const { t } = props;

    document.title = t('dataAPI.dataAPITab');

    return (
        <>
            <AppBar elevation={0} color='transparent'>
                <Nav>
                    <NavContainer>
                        <HalamanNavbar />
                    </NavContainer>
                </Nav>
            </AppBar>
            {/* <BoxImage1 src="/images/menuPeta/Rectangle_1.png" /> */}
            {/* <BoxImage2 src="/images/menuPeta/bentuk.png" /> */}
            <BoxContainer>
                <BoxAtas>
                    <BoxTitle>{t('dataAPI.judul')}</BoxTitle>
                    <Divider
                        sx={{
                            margin: "0 auto",
                            bgcolor: "#004581",
                            height: 4,
                            width: "75px",
                            borderRadius: "10px",
                            marginBottom: "20px"
                        }} />
                    <BoxLittleTitle>
                        {t('dataAPI.keterangan')}
                    </BoxLittleTitle>
                    <BoxTitle>
                        {t('dataAPI.table1')}
                    </BoxTitle>
                    <CustomizedTables />
                    <BoxTitle>
                        {t('dataAPI.table2')}
                    </BoxTitle>
                    <CustomizedTables2 />
                </BoxAtas>
            </BoxContainer>
            <HalamanFooter />
        </>
    );
};

export const RouteDataAPI = withTranslation()(DataAPI);