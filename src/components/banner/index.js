import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { BannerStyle } from '../../styles/banner/BannerStyle';
import Carousel from "react-material-ui-carousel";
import axios from "axios";
import { CardActionArea } from '@mui/material';

function Banner() {
  const isMobile = useMediaQuery("(max-width: 500px)");

  const [bannerList, setBannerList] = useState([]);
  const getBannerList = async () => {
    const response = await axios.get(
      "https://jakartasatu.jakarta.go.id/apimobile/app/v3/banners"
    );
    setBannerList(response.data.data);
    // console.log(response.data);
  };
  useEffect(() => {
    getBannerList();
  }, []);

  return (
    <Box sx={{ maxWidth: 2000, flexGrow: 1 }}>
      <Carousel
        stopAutoPlayOnHover={false}
        navButtonsAlwaysVisible={true}
        swipe={true}
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
                background: "black",
                outline: "7px solid #D9D9D9",
              }}
              src={banner.source_image}>
            </Box>
          </CardActionArea>
        ))}
      </Carousel>
    </Box>
  );
}

export default Banner;