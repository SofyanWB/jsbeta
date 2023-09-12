import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import Fade from '@mui/material/Fade';
import Tooltip from '@mui/material/Tooltip';

import { withTranslation } from 'react-i18next';

function ButtonKritikSaran(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 400,
    });

    return (
        <Fade in={trigger}>
            <Box
                role="presentation"
                sx={{
                    position: 'fixed',
                    bottom: 75,
                    right: 24,
                    zIndex: "999",
                }}>
                {children}
            </Box>
        </Fade>
    );
}

ButtonKritikSaran.propTypes = {
    children: PropTypes.element.isRequired
};

function KritikSaran(props) {
    const { t } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <ButtonKritikSaran>
                <Tooltip placement="left" title={t('beranda.kritikSaranButton')}>
                    <Fab
                        disableRipple
                        size="small"
                        color="warning"
                        href='https://forms.gle/QJ672f62tXt4Neyu9' target='_blank'
                        sx={{
                            backgroundColor: "#ED783E",
                            boxShadow: '0px 4px 20px rgba(170, 180, 190, 0.3)',
                        }}>
                        <VolunteerActivismRoundedIcon style={{ color: "white" }} />
                    </Fab>
                </Tooltip>
            </ButtonKritikSaran>
        </React.Fragment>
    );
}

export const ExtrasKritikSaran = withTranslation()(KritikSaran);