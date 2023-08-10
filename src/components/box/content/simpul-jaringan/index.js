import { Divider, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
import Carousel from "react-material-ui-carousel";
import {
  BoxContainer,
  BoxContent,
  BoxTitle,
  BoxImage2,
  BoxDescription,
  efekHover,
  BoxImage,
  textButton,
  items2,
  StyleButton2,
} from "../../../../styles/simpulJaringan";


const App = () => {
  const isMobile = useMediaQuery("(max-width: 1042px)"); // Menentukan apakah tampilan berada pada layar handphone
  const pageSize = isMobile ? 4 : 8; // Jumlah logo dan judul yang tampil di setiap halaman carousel
  const pages = Math.ceil(items2.length / pageSize); // Jumlah halaman carousel

  // Membagi data logo dan judul ke dalam halaman-halaman
  const carouselPages = [];
  for (let i = 0; i < pages; i++) {
    carouselPages.push(items2.slice(i * pageSize, (i + 1) * pageSize));
  }


  return (
    <BoxContainer>
      <BoxContent>
        <BoxImage2 src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/979388b0f1944b23aed602beab869092/data" />
        <BoxTitle>Simpul Jaringan Spasial</BoxTitle>

        <Divider
          sx={{
            margin: "0 auto",
            bgcolor: "#004581",
            height: 4,
            width: "75px",
            borderRadius: "10px",
            marginBottom: "20px"
          }} />

        <BoxDescription variant="subtitle">
          Integrasi data spasial dari seluruh kumpulan perangkat daerah atau unit kerja, kelembagaan, atau institusi lainnya di lingkungan Pemerintah Provinsi DKI Jakarta
        </BoxDescription>

        <Carousel
          stopAutoPlayOnHover={true}
          navButtonsAlwaysVisible={true}
          swipe={true}
          animation={"slide"}
          IndicatorIcon={false}
          sx={{ 
            marginBottom: "3%",

            "@media (max-width: 500px)": {
              marginLeft: "-20%",
              marginRight: "-20%",
            }
          }}

          //untuk style indikator
          indicatorProps={{
            style: {
              display: "none"
            }
          }}
          //untuk style button pindah =
          navButtonsProps={{
            style: {
              marginLeft: isMobile ? "20px" : "",
              marginRight: isMobile ? "20px" : "",
              width: isMobile ? "50%" : "67%",
              height: isMobile ? "10%" : "auto",
              backgroundColor: isMobile ? "transparent" : "#1455A3",
              color: isMobile ? "black" : "white",
              transform: isMobile ? "translateY(-50%)" : "translateY(-50%)"
            }
          }}>


          {carouselPages.map((buttonPage, pageIndex) => (
            <Grid
              container spacing={2}
              key={pageIndex}
              sx={{
                flexGrow: 1,
                paddingLeft: "5%",
                paddingRight: "5%",
                // height: "10%"

                "@media (max-width: 500px)": {
                  paddingLeft: "-50%",
                  paddingRight: "-50%",
                }
              }}>

              {buttonPage.map((button, index) => (

                <Grid
                  item
                  key={index}
                  xs={6}
                  sm={6}
                  md={isMobile ? 6 : 3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}>

                  <Button
                    sx={efekHover}
                    href={button.link} target="_blank">

                    <BoxImage src={button.imageSrc} alt={`Button ${index}`} />

                    <Typography variant="h6" sx={textButton}>
                      {button.title}
                    </Typography>

                  </Button>

                </Grid>

              ))}
            </Grid>
          ))}

        </Carousel>

        <Button
          component={RouterLink} to="/simpul-jaringan"
          sx={StyleButton2}
          variant="contained"
          size="large">
          Lihat Semua
        </Button>
      </BoxContent>

    </BoxContainer>
  );
}

export default App
