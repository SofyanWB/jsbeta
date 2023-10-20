import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
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
      { maxWidth: 299, height: 140 },
      { maxWidth: 349, height: 170 },
      { maxWidth: 399, height: 200 },
      { maxWidth: 449, height: 230 },
      { maxWidth: 599, height: 310 },
      { maxWidth: 699, height: 370 },
      { maxWidth: 799, height: 420 },
      { maxWidth: 899, height: 480 },
      { maxWidth: 999, height: 540 },
      { maxWidth: 1099, height: 590 },
      { maxWidth: 1199, height: 645 },
      { maxWidth: 1299, height: 700 },
      { maxWidth: 1399, height: 760 },
      { maxWidth: 1499, height: 820 },
      { maxWidth: 1599, height: 870 },
      { maxWidth: 1699, height: 930 },
      { maxWidth: 1799, height: 990 },
      { maxWidth: 1899, height: 1040 },
      { maxWidth: 1999, height: 1100 },
      { maxWidth: 2099, height: 1160 },
      { maxWidth: 2199, height: 1210 },
      { maxWidth: 2299, height: 1270 },
      { maxWidth: 2399, height: 1325 },
      { maxWidth: 2499, height: 1380 },
      { maxWidth: 2599, height: 1435 },
      { maxWidth: 2699, height: 1490 },
      { maxWidth: 2799, height: 1550 },
      { maxWidth: 2899, height: 1605 },
      { maxWidth: 2999, height: 1660 },
      { maxWidth: 3099, height: 1720 },
      { maxWidth: 3199, height: 1775 },
      { maxWidth: 3299, height: 1830 },
      { maxWidth: 3399, height: 1885 },
      { maxWidth: 3499, height: 1940 },
      { maxWidth: 3599, height: 2000 },
      { maxWidth: 3699, height: 2055 },
      { maxWidth: 3799, height: 2110 },
      { maxWidth: 3899, height: 2130 },
    ];

    const newHeight = breakpoints.find(bp => window.innerWidth < bp.maxWidth)?.height || 2130;
    setCarouselHeight(newHeight);
  };

  const [topHeight, setTopHeight] = useState("-8vh");

  const handleResizeTop = () => {
    const breakpoints = [
      { maxWidth: 299, top: "-5vh" },
      { maxWidth: 349, top: "-5vh" },
      { maxWidth: 399, top: "-5vh" },
      { maxWidth: 449, top: "-5vh" },
      { maxWidth: 499, top: "-8vh" },
      { maxWidth: 599, top: "-6vh" },
    ];

    const newTop = breakpoints.find(bp => window.innerWidth < bp.maxWidth)?.top || "-8vh";
    setTopHeight(newTop);
  };

  useEffect(() => {
    getBannerList();
    window.addEventListener('resize', handleResize);
    handleResize();

    window.addEventListener('resize', handleResizeTop);
    handleResizeTop();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleResizeTop);
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
          maxWidth: "auto",
          flexGrow: 1,

          display: loading ? "block" : "none"
        }}>
        <Carousel
          // autoPlay={false}
          stopAutoPlayOnHover={false}
          navButtonsAlwaysVisible={false}
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
              top: topHeight,
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
              backgroundColor: isMobile ? "transparent" : "rgba(237, 120, 62)",
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
                  maxWidth: "auto",
                  overflow: 'hidden',
                  // background: "#004581",
                  borderBottom: "7px solid #D9D9D9",
                  marginBottom: "-7px",
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