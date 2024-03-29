import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  List,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";

import {
  DashboardContainer,
  DashboardContent,
  DashboardTitle,
  ListItemStyled,
  listTextStyle,
  listStyle,
  listContainer,
  StyleButton2,
  DashboardImage,
} from "../../../../styles/dashboard";

import { withTranslation } from "react-i18next";

function Dashboard(props) {
  const { t } = props;

  const [setSelectedItem] = useState(null);

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const menu = [
    {
      id: 1,
      text: 'Dashboard Ruang Terbuka Hijau',
      externalLink: 'https://jakartasatu.jakarta.go.id/portal/apps/experiencebuilder/experience/?id=aa91a84fab5b4f0caa554398793d1ab4'
    },
    {
      id: 2,
      text: 'Dashboard Luas Zona RDTR 2014',
      externalLink: 'https://jakartasatu.jakarta.go.id/portal/apps/opsdashboard/index.html#/e3739aa48ffa4d3cbd8ec89e6a1e5eab'
    },
    {
      id: 3,
      text: 'Dashboard Penggunaan Lahan Wilayah',
      externalLink: 'https://jakartasatu.jakarta.go.id/portal/apps/opsdashboard/index.html#/4ca614e10b3a4493951e50b739849147'
    },
    {
      id: 4,
      text: 'Dashboard Informasi Banjir',
      externalLink: 'https://jakartasatu.jakarta.go.id/portal/apps/opsdashboard/index.html#/fe8904525a9643899dd11f7d6d466205'
    },
    {
      id: 5,
      text: 'Dashboard Aset',
      externalLink: 'https://jakartasatu.jakarta.go.id/portal/apps/experiencebuilder/experience/?id=4dd993e2fbd04e61833f9959076cae67'
    },
    {
      id: 6,
      text: 'Dashboard Persebaran Lokasi JakWifi',
      externalLink: 'https://jakartasatu.jakarta.go.id/portal/apps/experiencebuilder/experience/?id=86d4cba95ba84a039a97e06147ec2bd0'
    },
    {
      id: 7,
      text: 'Dashboard Persebaran Lokasi Halte',
      externalLink: 'https://jakartasatu.jakarta.go.id/portal/apps/experiencebuilder/experience/?id=9fb4c02f04fb4a99b5d58643bde8e0dd'
    },
    {
      id: 8,
      text: 'Dashborad Lokasi Sekolah',
      externalLink: 'https://experience.arcgis.com/experience/adb1a489b43944b58cef51f08b012177'
    },
    {
      id: 9,
      text: 'Dashboard Persebaran Utilitas',
      externalLink: 'https://tataruang.jakarta.go.id/portal/apps/experiencebuilder/experience/?id=451c316b69994bdaa7094a9884f673f4'
    },
    // Add more menu items as needed
  ];

  return (
    <DashboardContainer>
      <DashboardContent>
        <Box
          sx={listContainer}>
          <Box
            sx={{
              display: "grid",
              justifyItems: "center",
              "@media (max-width: 1043px)": {
                marginRight: "1vw",
              },
            }}
          >
            <Skeleton
              variant="text" width="28vw" height="92px" animation="wave"
              style={{ display: imageLoaded ? "none" : "block", borderRadius: 20, marginBottom: "-20px" }}
            />
            <Skeleton
              variant="text" width="100%" height="92px" animation="wave"
              style={{ display: imageLoaded ? "none" : "block", borderRadius: 20, marginBottom: "-20px" }}
            />
            <Skeleton
              variant="text" width="70%" height="92px" animation="wave"
              style={{ display: imageLoaded ? "none" : "block", borderRadius: 20 }}
            />
            <DashboardTitle
              variant="h6"
              style={{ display: imageLoaded ? "block" : "none" }}>
              {t('beranda.dashboard.keterangan')}
            </DashboardTitle>
            <List sx={listStyle}>
              {menu.map((item, index) => (
                <ListItemStyled
                  button
                  key={item.id}
                  component={item.externalLink ? "a" : RouterLink}
                  href={item.externalLink}
                  to={item.to}
                  target={item.externalLink ? "_blank" : ""}
                  rel={item.externalLink ? "noopener noreferrer" : ""}
                  onClick={() => handleImageClick(item)}
                  onFocus={() => handleImageClick(item)}
                  sx={{
                    paddingLeft: "30px",
                  }}
                >
                  {imageLoaded ? (
                    <ListItemText>
                      <Typography
                        sx={listTextStyle}
                        style={{ display: imageLoaded ? "block" : " none" }}>
                        {item.text}
                      </Typography>
                    </ListItemText>
                  ) : (
                    <div></div>
                  )}
                </ListItemStyled>
              ))}
            </List>
            {imageLoaded ? (
              <Button
                sx={StyleButton2}
                variant="contained"
                component={RouterLink}
                to="/dashboard"
              >
                {t('beranda.dashboard.lihatSemua')}
              </Button>
            ) : (
              <div></div>
            )}
          </Box>
          <Skeleton
            variant="rectangular"
            width={550}
            height={300}
            style={{ display: imageLoaded ? "none" : "block", borderRadius: 30, marginLeft: "10vw" }}
            animation="wave"
          />
          <DashboardImage
            src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/f4997bf8ccc540458abd41878683c9ee/data"
            style={{ display: imageLoaded ? "block" : "none" }}
            onLoad={handleImageLoad} />
        </Box>
      </DashboardContent>
    </DashboardContainer>
  );
}

export const HalamanDashboard = withTranslation()(Dashboard);