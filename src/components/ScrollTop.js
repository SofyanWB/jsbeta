import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Tooltip from '@mui/material/Tooltip';

import { withTranslation } from 'react-i18next';

function ScrollTop(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 400,
    });

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    zIndex: "999",
                }}>
                {children}
            </Box>
        </Fade>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired
};

function BackToTop(props) {
    const { t } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <ScrollTop>
                <Tooltip placement="top" title={t('scrollTop.text')}>
                    <Fab
                        disableRipple
                        size="small"
                        color="info"
                        sx={{
                            backgroundColor: '#1455A3',
                            boxShadow: '0px 4px 20px rgba(170, 180, 190, 0.3)',
                        }}>
                        <KeyboardArrowUpIcon style={{ color: "white" }} />
                    </Fab>
                </Tooltip>
            </ScrollTop>
        </React.Fragment>
    );
}

export const ExtrasScrollTop = withTranslation()(BackToTop);