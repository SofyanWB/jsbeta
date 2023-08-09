import React from 'react';
import Navbar2 from "../../src/components/appBar/Navbar2";
import Footer from "../../src/components/footer/index";
import { Divider } from '@mui/material';
import {
    CustomizedTables,
    CustomizedTables2,
    BoxAtas,
    BoxTitle,
    BoxContainer,
    BoxLittleTitle,
} from './routeStyle/DataAPIStyle';

const DataAPI = () => {

    return (
        <>
            <Navbar2 />
            {/* <BoxImage1 src="/images/menuPeta/Rectangle_1.png" /> */}
            {/* <BoxImage2 src="/images/menuPeta/bentuk.png" /> */}
            <BoxContainer>
                <BoxAtas>
                    <BoxTitle>Data API</BoxTitle>
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
                        Memberikan informasi list service data berupa web map service dan web feature service yang terdapat pada Webgis Jakarta Satu.
                    </BoxLittleTitle>
                    <BoxTitle>
                        Tabel Data API Web Feature Service (WFS)
                    </BoxTitle>
                    <CustomizedTables />
                    <BoxTitle>
                        Tabel Data API Web Map Service (WMS)
                    </BoxTitle>
                    <CustomizedTables2 />
                </BoxAtas>
            </BoxContainer>
            <Footer />
        </>
    );
};

export default DataAPI;