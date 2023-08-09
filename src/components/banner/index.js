import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';

import axios from "axios";
import { CardActionArea } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
  });

  return (
    <Box sx={{ maxWidth: 2000, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
        {bannerList.map((step, index) => (
          <Box key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <CardActionArea href={step.source_url} target='_blank' disableRipple>
                <Box
                  component="img"
                  sx={{
                    objectFit: "cover",
                    background: "black",
                    maxWidth: 2000,
                    overflow: 'hidden',
                    width: '100%',
                    outline: "10px solid #D9D9D9",
                  }}
                  src={step.source_image}
                />
              </CardActionArea>
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <Pagination
        dots={5}
        index={activeStep}
        onChangeIndex={handleStepChange} />
    </Box>
  );
}

export default SwipeableTextMobileStepper;