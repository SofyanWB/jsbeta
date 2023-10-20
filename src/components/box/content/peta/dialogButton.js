import { Box, Button, Dialog, Popover, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { withTranslation } from "react-i18next";
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
  ImageButton,
  SkelText,

} from "../../../../styles/peta/index";

function Dialog1(props) {
  const { t } = props;

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

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };


  return (
    <div>
      <ButtonDialog
        onMouseEnter={imageLoaded ? handleMouseEnter : null}
        sx={iconButtonStyles}>

        <Skeleton
          variant="circular"
          style={{ display: imageLoaded ? "none" : "block" }}
          sx={ImageButton}
          animation="wave"
        />

        <BoxImageButton
          src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/0ad00b7b1e0f4e2a8b8a69b02ab26985/data"
          style={{ display: imageLoaded ? "block" : "none" }}
          onLoad={handleImageLoad} />

        <Skeleton
          variant="text"
          style={{ display: imageLoaded ? "none" : "block" }}
          sx={SkelText}
        />

        <div style={{ display: imageLoaded ? "block" : "none" }}>
          {t('beranda.peta.dialog.interaktif')}
        </div>

      </ButtonDialog>
      <Dialog
        open={Boolean(open)}
        sx={{
          backdropFilter: "blur(5px) sepia(5%)"
        }}>
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
          PaperProps={{ sx: { borderRadius: '20px' } }}>
          <BoxContainerHover1 onMouseLeave={handleClosePopover}>
            <Button
              component={RouterLink} to="/interaktif"
              target="_blank"
              sx={iconButtonStyles2}
              ref={lastClickedButton}>

              <Skeleton
                variant="text" width="40%" height="30px" animation="wave"
                style={{ display: imageLoaded ? "none" : "block", borderRadius: 10 }}
              />

              <Typography
                sx={TypoHoverTitle}
                style={{ display: imageLoaded ? "block" : "none" }}>

                {t("beranda.peta.dialog.interaktif")}
              </Typography>

              <ContentButtonHover>

                <Skeleton
                  variant="circular"
                  style={{ display: imageLoaded ? "none" : "block", padding: "15%", marginRight: "10%" }}
                  animation="wave"
                />

                <ImageButtonHover
                  src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/0ad00b7b1e0f4e2a8b8a69b02ab26985/data"
                  style={{ display: imageLoaded ? "block" : "none" }}
                  onLoad={handleImageLoad} />

                <div>

                  <Skeleton
                    variant="text" width="200px" height="20px" animation="wave"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 5 }}
                  />

                  <Skeleton
                    variant="text" width="200px" height="20px" animation="wave"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 5 }}
                  />

                  <Skeleton
                    variant="text" width="130px" height="20px" animation="wave"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 5 }}
                  />

                  <Typography sx={hoverItem}
                    style={{ display: imageLoaded ? "block" : "none" }}>
                    {t('beranda.peta.dialog.interaktifDetail')}
                  </Typography>

                </div>
              </ContentButtonHover>
            </Button>
          </BoxContainerHover1>
        </Popover>
      </Dialog>
    </div>
  );
};

export const HalamanDialog1 = withTranslation()(Dialog1);

function Dialog2(props) {
  const { t } = props;

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

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      <ButtonDialog
        onMouseEnter={imageLoaded ? handleMouseEnter : null}
        sx={iconButtonStyles}>

        <Skeleton
          variant="circular"
          style={{ display: imageLoaded ? "none" : "block" }}
          sx={ImageButton}
          animation="wave"
        />

        <BoxImageButton
          src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/096d59b754b64b27953d8668e6474e43/data"
          style={{ display: imageLoaded ? "block" : "none" }}
          onLoad={handleImageLoad} />

        <Skeleton
          variant="text"
          style={{ display: imageLoaded ? "none" : "block" }}
          sx={SkelText}
        />
        <div style={{ display: imageLoaded ? "block" : "none" }}>
          {t('beranda.peta.dialog.tematik')}
        </div>
      </ButtonDialog>
      <Dialog
        open={Boolean(open)}
        sx={{
          backdropFilter: "blur(5px) sepia(5%)"
        }}>
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
          PaperProps={{ sx: { borderRadius: '20px' } }}>
          <BoxContainerHover1 onMouseLeave={handleClosePopover}>
            <Button
              component={RouterLink} to="/tematik"
              sx={iconButtonStyles2}>

              <Skeleton
                variant="text" width="40%" height="30px" animation="wave"
                style={{ display: imageLoaded ? "none" : "block", borderRadius: 10 }}
              />

              <Typography
                sx={TypoHoverTitle}
                style={{ display: imageLoaded ? "block" : "none" }}>
                {t('beranda.peta.dialog.tematik')}
              </Typography>

              <ContentButtonHover>

                <Skeleton
                  variant="circular"
                  style={{ display: imageLoaded ? "none" : "block", padding: "15%", marginRight: "10%" }}
                  animation="wave"
                />

                <ImageButtonHover src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/096d59b754b64b27953d8668e6474e43/data"
                  style={{ display: imageLoaded ? "block" : "none" }}
                  onLoad={handleImageLoad} />

                <div>

                  <Skeleton
                    variant="text" width="200px" height="20px" animation="wave"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 5 }}
                  />

                  <Skeleton
                    variant="text" width="200px" height="20px" animation="wave"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 5 }}
                  />

                  <Skeleton
                    variant="text" width="130px" height="20px" animation="wave"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 5 }}
                  />

                  <Typography
                    sx={hoverItem}
                    style={{ display: imageLoaded ? "block" : "none" }}>
                    {t('beranda.peta.dialog.tematikDetail')}
                  </Typography>

                </div>
              </ContentButtonHover>
            </Button>
          </BoxContainerHover1>
        </Popover>
      </Dialog>
    </div>
  )
}

export const HalamanDialog2 = withTranslation()(Dialog2);

function Dialog3(props) {
  const { t } = props;

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

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      <ButtonDialog
        onMouseEnter={imageLoaded ? handleMouseEnter : null}
        sx={iconButtonStyles}>

        <Skeleton
          variant="circular"
          style={{ display: imageLoaded ? "none" : "block" }}
          sx={ImageButton}
          animation="wave"
        />

        <BoxImageButton src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/9b24667a76444110a813e8f813fcba74/data"
          style={{ display: imageLoaded ? "block" : "none" }}
          onLoad={handleImageLoad} />

        <Skeleton
          variant="text"
          style={{ display: imageLoaded ? "none" : "block" }}
          sx={SkelText}
        />

        <div style={{ display: imageLoaded ? "block" : "none" }}>
          {t('beranda.peta.dialog.peta3d')}
        </div>

      </ButtonDialog>
      <Dialog
        open={Boolean(open)}
        sx={{
          backdropFilter: "blur(5px) sepia(5%)"
        }}>
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
          }}>

          <BoxContainerHover2 onMouseLeave={handleClosePopover}>

            <Skeleton
              variant="text" width="40%" height="30px" animation="wave"
              style={{ display: imageLoaded ? "none" : "block", borderRadius: 10, marginRight: "75px" }}
            />

            <Typography
              sx={TypoHoverTitle2}
              style={{ display: imageLoaded ? "block" : "none" }}>
              {t('beranda.peta.dialog.peta3d')}
            </Typography>

            <Box>
              <ContentButtonHover
                paddingLeft="25px"
                paddingRight="50px">

                <Skeleton
                  variant="circular"
                  style={{ display: imageLoaded ? "none" : "block", padding: "9%", marginRight: "10%" }}
                  animation="wave"
                />

                <ImageButtonHover
                  src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/9b24667a76444110a813e8f813fcba74/data"
                  style={{ display: imageLoaded ? "block" : "none" }}
                  onLoad={handleImageLoad} />

                <div>

                  <Skeleton
                    variant="text" width="200px" height="20px" animation="wave"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 5 }}
                  />

                  <Skeleton
                    variant="text" width="200px" height="20px" animation="wave"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 5 }}
                  />

                  <Skeleton
                    variant="text" width="130px" height="20px" animation="wave"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 5 }}
                  />


                  <Typography
                    sx={hoverItem}
                    style={{ display: imageLoaded ? "block" : "none" }}>
                    {t('beranda.peta.dialog.peta3dDetail')}
                  </Typography>

                </div>

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

                  width: "400px",

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

                <Skeleton
                  variant="text" width="200px" height="20px" animation="wave"
                  style={{ display: imageLoaded ? "none" : "block", borderRadius: 5 }}
                />

                <Typography style={{ display: imageLoaded ? "block" : "none", fontSize: "11px", fontWeight: "bold" }}>
                  3D Basemaps
                </Typography>


              </Button>

              <Button
                component={RouterLink} to="/peta-3d-transit-oriented"
                target="_blank"
                sx={{
                  bgcolor: "rgba(242, 170, 134, 0.61)",
                  borderRadius: "15px",
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

                <Skeleton
                  variant="text" width="200px" height="20px" animation="wave"
                  style={{ display: imageLoaded ? "none" : "block", borderRadius: 5 }}
                />

                <Typography style={{ display: imageLoaded ? "block" : "none", fontSize: "11px", fontWeight: "bold", }}>
                  3D Transit Oriented
                </Typography>

              </Button>
            </ButtonHoverAction>
          </BoxContainerHover2>
        </Popover>
      </Dialog>
    </div>
  )
}

export const HalamanDialog3 = withTranslation()(Dialog3);