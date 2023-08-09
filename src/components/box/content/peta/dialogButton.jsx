import { Box, Button, Dialog, Popover, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import {
  BoxContainerHover1,
  BoxContainerHover2,
  BoxImageButton,
  ContentButtonHover,
  hoverItem,
  iconButtonStyles,
  iconButtonStyles2,
  ImageButtonHover,
  TypoHoverTitle,
  TypoHoverTitle2,
  ButtonDialog,
  ButtonHoverAction,

} from "../../../../styles/peta/index";

export const Dialog1 = () => {
  const [open, setOpen] = useState(null);
  const [lastClickedButton, setLastClickedButton] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    setScrolling(true);
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => {
      setScrolling(false);
    }, 150));
  };

  const handleMouseEnter = (event) => {
    if (!scrolling) {
      setLastClickedButton(event.currentTarget);
      setOpen(event.currentTarget);
    }
  };

  const handleClosePopover = () => {
    setOpen(null);
  };

  useEffect(() => {
    if (open) {
      lastClickedButton?.focus(); // Fokus pada button terakhir yang diklik saat efek popover aktif
    }
  }, [open, lastClickedButton]);

  return (
    <div>
      <ButtonDialog
        onMouseEnter={handleMouseEnter}
        sx={iconButtonStyles}
      >
        <BoxImageButton src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/0ad00b7b1e0f4e2a8b8a69b02ab26985/data" />
        Interaktif
      </ButtonDialog>

      <Dialog
        open={Boolean(open)}
        sx={{
          backdropFilter: "blur(5px) sepia(5%)"
        }}
      >
        <Popover
          open={Boolean(open)}
          anchorEl={open}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          disablePortal
          onMouseLeave={handleClosePopover}
          onClose={handleClosePopover}
          PaperProps={{ sx: { borderRadius: '20px' } }}
        >
          <BoxContainerHover1
            onMouseLeave={handleClosePopover}
          >
            <Button 
            component={RouterLink} to="/interaktif"
            target="_blank"
            sx={iconButtonStyles2} 
            ref={lastClickedButton}>
              <Typography sx={TypoHoverTitle}>
                Interaktif
              </Typography>
              <ContentButtonHover>
                <ImageButtonHover src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/0ad00b7b1e0f4e2a8b8a69b02ab26985/data" />
                <Typography sx={hoverItem}>
                  Jelajahi Seluruh Informasi Spasial DKI Jakarta dengan Berbagai Fitur
                </Typography>
              </ContentButtonHover>
            </Button>
          </BoxContainerHover1>
        </Popover>
      </Dialog>
    </div>
  );
};


export const Dialog2 = () => {

  const [open, setOpen] = useState(null);
  const [lastClickedButton, setLastClickedButton] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    setScrolling(true);
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => {
      setScrolling(false);
    }, 150));
  };

  const handleMouseEnter = (event) => {
    if (!scrolling) {
      setLastClickedButton(event.currentTarget);
      setOpen(event.currentTarget);
    }
  };

  const handleClosePopover = () => {
    setOpen(null);
  };

  useEffect(() => {
    if (open) {
      lastClickedButton?.focus(); // Fokus pada button terakhir yang diklik saat efek popover aktif
    }
  }, [open, lastClickedButton]);

  return (

    <div>

      <ButtonDialog
        onMouseEnter={handleMouseEnter}
        sx={iconButtonStyles}
      >
        <BoxImageButton src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/096d59b754b64b27953d8668e6474e43/data" />

        Tematik

      </ButtonDialog>

      <Dialog
        open={Boolean(open)}
        sx={{
          backdropFilter: "blur(5px) sepia(5%)"
        }}

      //onMouseOutCapture={()=> setOpen(false)}
      >

        <Popover
          open={Boolean(open)}
          anchorEl={open}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          disablePortal // menonaktifkan portal agar event onMouseLeave berfungsi
          onMouseLeave={handleClosePopover} // menutup popover ketika pointer mouse meninggalkan area popover
          onClose={handleClosePopover}
          PaperProps={{ sx: { borderRadius: '20px' } }}
        >

          <BoxContainerHover1
            onMouseLeave={handleClosePopover}
          >

            <Button
            component={RouterLink} to="/tematik"
              sx={iconButtonStyles2}
            >
              <Typography
                sx={TypoHoverTitle}>
                Tematik
              </Typography>

              <ContentButtonHover
                paddingLeft="25px"
                paddingRight="25px"
              >

                <ImageButtonHover src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/096d59b754b64b27953d8668e6474e43/data" />
                <Typography
                  sx={hoverItem}
                >
                  Ekplorasi Data Spasial Berdasarkan Tema

                </Typography>

              </ContentButtonHover>

            </Button>

          </BoxContainerHover1>


        </Popover>

      </Dialog>

    </div>

  )
}

export const Dialog3 = () => {

  const [open, setOpen] = useState(null);
  const [lastClickedButton, setLastClickedButton] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    setScrolling(true);
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => {
      setScrolling(false);
    }, 150));
  };

  const handleMouseEnter = (event) => {
    if (!scrolling) {
      setLastClickedButton(event.currentTarget);
      setOpen(event.currentTarget);
    }
  };

  const handleClosePopover = () => {
    setOpen(null);
  };

  useEffect(() => {
    if (open) {
      lastClickedButton?.focus(); // Fokus pada button terakhir yang diklik saat efek popover aktif
    }
  }, [open, lastClickedButton]);

  return (

    <div>

      <ButtonDialog
        onMouseEnter={handleMouseEnter}
        sx={iconButtonStyles}
      >

        <BoxImageButton src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/9b24667a76444110a813e8f813fcba74/data" />
        Peta 3D

      </ButtonDialog>

      <Dialog
        open={Boolean(open)}
        sx={{
          backdropFilter: "blur(5px) sepia(5%)"
        }}

      //onMouseOutCapture={()=> setOpen(false)}
      >

        <Popover
          open={Boolean(open)}
          anchorEl={open}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          disablePortal // menonaktifkan portal agar event onMouseLeave berfungsi
          onMouseLeave={handleClosePopover} // menutup popover ketika pointer mouse meninggalkan area popover
          onClose={handleClosePopover}
          PaperProps={{
            sx: {
              borderRadius: '20px',
            }
          }}
        >

          <BoxContainerHover2
            onMouseLeave={handleClosePopover}
          >
            <Typography
              sx={TypoHoverTitle2}
            >

              Peta 3D

            </Typography>

            <Box>

              <ContentButtonHover
                paddingLeft="25px"
                paddingRight="50px">

                <ImageButtonHover
                  src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/9b24667a76444110a813e8f813fcba74/data" />

                <Typography
                  sx={hoverItem}
                >

                  Visualisasi peta dalam bentuk 3 dimensi (3D)

                </Typography>

              </ContentButtonHover>

            </Box>

            <ButtonHoverAction>
              <Button
              component={RouterLink} to="/peta-3d-basemaps"
              target="_blank"
                sx={{
                  bgcolor: "#DFE6E9",
                  borderRadius: "15px",
                  color: "black",
                  fontWeight: "bold",
                  width: "400px",
                  fontSize: "11px",
                  padding: "10px",
                  marginRight: "20px",
                  "@media (max-width: 1440px)": {
                    fontSize: "0.8vw",
                  },
                  "@media (max-width: 1043px)": {
                    fontSize: "1.5vw",
                  },
                  "@media (max-width: 600px)": {
                    marginRight: "2%",
                    height: "6vw"
                  },
                }}>
                3D Basemaps
              </Button>

              <Button
              component={RouterLink} to="/peta-3d-transit-orientied"
              target="_blank"
                sx={{
                  bgcolor: "rgba(242, 170, 134, 0.61)",
                  borderRadius: "15px",
                  fontSize: "11px",
                  fontWeight: "bold",
                  color: "black",
                  width: "400px",
                  padding: "10px",
                  "@media (max-width: 1440px)": {
                    fontSize: "0.8vw",
                  },
                  "@media (max-width: 1043px)": {
                    fontSize: "1.5vw",
                  },
                  "@media (max-width: 600px)": {
                    height: "6vw"
                  },
                }}>
                3D Transit Oriented
              </Button>
            </ButtonHoverAction>

          </BoxContainerHover2>

        </Popover>

      </Dialog>

    </div>

  )
} 