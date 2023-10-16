import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import {
  Divider,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  OutlinedInput,
  Skeleton,
  InputAdornment,
  IconButton
} from '@mui/material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Carousel from 'react-material-ui-carousel';
import {
  BoxContainer,
  BoxContent,
  BoxPencarian,
  BoxTitle,
  BoxImage2,
  BoxDescription,
  efekHover,
  BoxImage,
  textButton,
  CarouselStyle,
} from '../../../../styles/simpulJaringan';
import { withTranslation } from 'react-i18next';

function SimpulJaringan(props) {
  const { t } = props;

  const [simpulJaringanList, setSimpulJaringanList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSimpulJaringanList = async () => {
      const response = await axios.get('https://jakartasatu.jakarta.go.id/apimobile/app/web/simpul-jaringan');
      setSimpulJaringanList(response.data.data);
      setIsLoading(false);
    };

    getSimpulJaringanList();
  }, []);

  const isMobile = useMediaQuery('(max-width: 1042px');
  const pageSize = isMobile ? 4 : 8;
  const pages = Math.ceil(simpulJaringanList.length / pageSize);

  const carouselPages = [];
  for (let i = 0; i < pages; i++) {
    carouselPages.push(simpulJaringanList.slice(i * pageSize, (i + 1) * pageSize));
  }

  const [filteredSimpulJaringan, setFilteredSimpulJaringan] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchInput(event.target.value);

    const filteredData = simpulJaringanList.filter((item) =>
      item.judul.toLowerCase().includes(searchTerm)
    );

    setFilteredSimpulJaringan(filteredData);
    // setFilteredSimpulJaringan(filteredData.slice(0, pageSize));

    setIsSearching(searchTerm.trim() !== '');
  };

  const searchResultPages = [];
  const filteredData = isSearching ? filteredSimpulJaringan : simpulJaringanList;
  for (let i = 0; i < Math.ceil(filteredData.length / pageSize); i++) {
    searchResultPages.push(filteredData.slice(i * pageSize, (i + 1) * pageSize));
  }

  return (
    <BoxContainer>
      <BoxContent>
        <BoxImage2 src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/979388b0f1944b23aed602beab869092/data" />

        {!isLoading ? (
          <BoxTitle>
            {t('beranda.simpulJaringan.judul')}
          </BoxTitle>
        ) : (
          <Skeleton
            variant="text" width="40%" height="92px" animation="wave"
            style={{ borderRadius: 20, margin: "0 auto", marginBottom: "10px", marginTop: "5vw" }}
          />
        )}

        <Divider
          sx={{
            margin: '0 auto',
            bgcolor: '#004581',
            height: 4,
            width: '75px',
            borderRadius: '10px',
          }}
        />

        {!isLoading ? (
          <BoxDescription
            variant="subtitle">
            {t('beranda.simpulJaringan.keterangan')}
          </BoxDescription>
        ) : (
          <div>
            <Skeleton
              variant="text" width="50%" height="2vw" animation="wave"
              style={{ borderRadius: 10, margin: "0 auto", marginTop: "1%" }}
            />
            <Skeleton
              variant="text" width="30%" height="2vw" animation="wave"
              style={{ borderRadius: 10, margin: "0 auto", marginBottom: "2.3%" }}
            />
          </div>
        )}

        <BoxPencarian style={{ width: isMobile ? "100%" : "50%" }}>
          {!isLoading ? (
            <OutlinedInput
              placeholder={t('simpulJaringan.cariData')}
              value={searchInput}
              endAdornment={
                <InputAdornment position="end">
                  {searchInput && (
                    <IconButton
                      aria-label="clear"
                      edge="end"
                      size="small"
                      onClick={() => {
                        setSearchInput('');
                        setIsSearching(false);
                      }}
                    >
                      <ClearRoundedIcon size="small" />
                    </IconButton>
                  )}
                </InputAdornment>
              }
              onChange={handleSearchChange}
              sx={{
                margin: '0 auto',
                width: '100%',
                height: '49px',
                paddingLeft: '1%',
                borderRadius: '40px',
                background: 'white',
                boxShadow: '0 1px 5px rgb(0 0 0 / 0.2)',
              }}
            />
          ) : (
            <div>
              <Skeleton
                variant="rounded" width="100%" height="49px" animation="wave"
                style={{ borderRadius: 40, margin: "0 auto", marginTop: "1%" }}
              />
            </div>
          )}
          {!isLoading ? (
            <Button
              component={RouterLink} to="/simpul-jaringan"
              variant="text"
              size="small"
              sx={{
                textTransform: "none",
                maxWidth: "90px",
                borderRadius: "20px",
                marginLeft: "auto",
                marginRight: "2%",
              }}>
              {t('beranda.simpulJaringan.lihatSemua')}
            </Button>
          ) : (
            <div>
              <Skeleton
                variant="rounded" width="90px" animation="wave"
                style={{ borderRadius: 40, marginLeft: "auto", marginTop: "1%" }}
              />
            </div>
          )}
        </BoxPencarian>

        {!isLoading ? (
          isSearching ? (
            searchResultPages.length > 0 ? (
              <Carousel
                autoPlay={!isSearching}
                stopAutoPlayOnHover={true}
                navButtonsAlwaysVisible={true}
                swipe={true}
                cycleNavigation={false}
                height={500}
                fullHeightHover={true}
                animation={'slide'}
                IndicatorIcon={false}
                sx={CarouselStyle}
                indicatorProps={{
                  style: {
                    display: 'none',
                  },
                }}
                navButtonsProps={{
                  style: {
                    marginLeft: isMobile ? '20px' : '',
                    marginRight: isMobile ? '20px' : '',
                    width: isMobile ? '50%' : '67%',
                    height: isMobile ? '10%' : 'auto',
                    backgroundColor: isMobile ? 'transparent' : '#1455A3',
                    color: isMobile ? 'black' : 'white',
                    transform: isMobile ? 'translateY(-50%)' : 'translateY(-50%)',
                  },
                }}
              >
                {searchResultPages.map((resultPage, pageIndex) => (
                  <Grid
                    container
                    spacing={2}
                    key={pageIndex}
                    sx={{
                      flexGrow: 1,
                      paddingLeft: '5%',
                      paddingRight: '5%',
                      '@media (max-width: 500px)': {
                        paddingLeft: '-50%',
                        paddingRight: '-50%',
                      },
                    }}
                  >
                    {resultPage.map((button, index) => (
                      <Grid
                        item
                        key={index}
                        xs={6}
                        sm={6}
                        md={isMobile ? 6 : 3}
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Button sx={efekHover} href={button.link} target="_blank">
                          <BoxImage src={button.icon} alt={`Button ${index}`} />
                          <Typography variant="h6" sx={textButton}>
                            {button.judul}
                          </Typography>
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                ))}
              </Carousel>
            ) : (
              <Typography variant="h6" sx={{ margin: "20px auto" }}>
                {t('beranda.simpulJaringan.dataTidakDitemukan')}
              </Typography>
            )
          ) : (
            <Carousel
              autoPlay={!isSearching}
              stopAutoPlayOnHover={true}
              navButtonsAlwaysVisible={true}
              swipe={true}
              height={500}
              fullHeightHover={true}
              animation={'slide'}
              IndicatorIcon={false}
              sx={CarouselStyle}
              indicatorProps={{
                style: {
                  display: 'none',
                },
              }}
              navButtonsProps={{
                style: {
                  marginLeft: isMobile ? '20px' : '',
                  marginRight: isMobile ? '20px' : '',
                  width: isMobile ? '50%' : '67%',
                  height: isMobile ? '10%' : 'auto',
                  backgroundColor: isMobile ? 'transparent' : '#1455A3',
                  color: isMobile ? 'black' : 'white',
                  transform: isMobile ? 'translateY(-50%)' : 'translateY(-50%)',
                },
              }}>
              {carouselPages.map((buttonPage, pageIndex) => (
                <Grid
                  container
                  spacing={2}
                  key={pageIndex}
                  sx={{
                    flexGrow: 1,
                    paddingLeft: '5%',
                    paddingRight: '5%',

                    '@media (max-width: 500px)': {
                      paddingLeft: '-50%',
                      paddingRight: '-50%',
                    },
                  }}>
                  {buttonPage.map((button, index) => (
                    <Grid
                      item
                      key={index}
                      xs={6}
                      sm={6}
                      md={isMobile ? 6 : 3}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}>
                      <Button sx={efekHover} href={button.link} target="_blank">
                        <BoxImage src={button.icon} alt={`Button ${index}`} />
                        <Typography variant="h6" sx={textButton}>
                          {button.judul}
                        </Typography>
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Carousel>
          )
        ) : (
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <Grid
                item
                key={index}
                xs={6}
                sm={6}
                md={isMobile ? 6 : 3}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Skeleton variant="rectangular" style={{ borderRadius: 20, width: 180, height: 200, marginTop: 40 }} />
              </Grid>
            ))}
          </Grid>
        )}
      </BoxContent>
    </BoxContainer>
  );
}

export const HalamanSimpulJaringan = withTranslation()(SimpulJaringan);
