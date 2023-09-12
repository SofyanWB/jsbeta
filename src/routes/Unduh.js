import React from 'react'
import { HalamanNavbar } from "../../src/components/appBar/Navbar";
import {
    AppBar,
} from "@material-ui/core";
import {
    Nav,
    NavContainer
} from '../styles/appbar/indexNavbar2';
import { withTranslation } from 'react-i18next';

function Unduh(props) {
    const { t } = props;

    document.title = t('unduh.unduhTab');

    return (
        <>
            <AppBar elevation={0} color='transparent'>
                <Nav>
                    <NavContainer>
                        <HalamanNavbar />
                    </NavContainer>
                </Nav>
            </AppBar>
            <embed height="100%" width="100%"
                style={{
                    position: "fixed"
                }}
                src='https://jakartasatu.jakarta.go.id/portal/apps/sites/#/unduh-jakarta-satu' />
        </>
    );
};

export const RouteUnduh = withTranslation()(Unduh);