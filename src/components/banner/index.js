import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { BannerStyle } from '../../styles/banner/BannerStyle';
import Carousel from "react-material-ui-carousel";
import axios from "axios";
import { CardActionArea } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

function Banner() {
  const isMobile = useMediaQuery("(max-width: 500px)");

  const [loading, setLoading] = useState(false);
  const handleSetLoading = () => {
    setLoading(true);
  };

  const [bannerList, setBannerList] = useState([]);
  const getBannerList = async () => {
    const response = await axios.get(
      "https://jakartasatu.jakarta.go.id/apimobile/app/v3/banners"
    );
    setBannerList(response.data.data);
    // console.log(response.data);
  };

  const [carouselHeight, setCarouselHeight] = useState(800);

  const handleResize = () => {
    const breakpoints = [
      { maxWidth: 299, height: 180 },
      { maxWidth: 349, height: 190 },
      { maxWidth: 399, height: 200 },
      { maxWidth: 449, height: 230 },
      { maxWidth: 599, height: 265 },
      { maxWidth: 699, height: 300 },
      { maxWidth: 799, height: 360 },
      { maxWidth: 899, height: 430 },
      { maxWidth: 999, height: 480 },
      { maxWidth: 1099, height: 530 },
      { maxWidth: 1199, height: 580 },
      { maxWidth: 1299, height: 630 },
      { maxWidth: 1399, height: 680 },
      { maxWidth: 1499, height: 730 },
      { maxWidth: 1599, height: 780 },
      { maxWidth: 1699, height: 830 },
      { maxWidth: 1799, height: 880 },
      { maxWidth: 1899, height: 930 },
    ];

    const newHeight = breakpoints.find(bp => window.innerWidth < bp.maxWidth)?.height || 930;
    setCarouselHeight(newHeight);
  };

  useEffect(() => {
    getBannerList();
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Skeleton variant='rectangular' animation="wave"
        sx={{
          height: carouselHeight,
          display: loading ? "none" : "block"
        }} />
      <Box onLoad={handleSetLoading}
        sx={{
          maxWidth: 2000,
          flexGrow: 1,
          borderBottom: "7px solid #D9D9D9",
          marginBottom: "-7px",
          display: loading ? "block" : "none"
        }}>
        <Carousel
          stopAutoPlayOnHover={false}
          navButtonsAlwaysVisible={true}
          swipe={true}
          height={carouselHeight}
          fullHeightHover={true}
          animation={"slide"}
          Indicators={true}
          indicatorIconButtonProps={{
            style: {
              width: "20px",
              height: "20px",
              marginLeft: "2px",
              marginRight: "2px",
              color: isMobile ? "white" : "white",
              transform: isMobile ? "translateY(-50%)" : "translateY(-50%)",
              zIndex: "20",
              top: "-8vh",

              "@media (maxHeight: 520px)": {
                top: "-18vh",
              },
            }
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "#ED783E",
            }
          }}
          navButtonsProps={{
            style: {
              marginLeft: isMobile ? "5px" : "50px",
              marginRight: isMobile ? "5px" : "50px",
              backgroundColor: isMobile ? "transparent" : "transparent",
              transform: isMobile ? "translateY(-50%)" : "translateY(-50%)"
            }
          }}>
          {bannerList.map((banner, index) => (
            <CardActionArea key={index} href={banner.source_url} target='_blank' disableRipple>
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  maxWidth: 2000,
                  overflow: 'hidden',
                  background: "#004581",
                }}
                src={banner.source_image}>
              </Box>
            </CardActionArea>
          ))}
        </Carousel>
      </Box>
    </>
  );
}

export default Banner;