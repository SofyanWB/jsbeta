import React from 'react'
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
  StyleButton2,
  CarouselStyle,
} from "../../../../styles/simpulJaringan";
import { withTranslation } from 'react-i18next';

function SimpulJaringan(props) {
  const items2 = [
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/a0d98d40f3ef40a5b4e8433fadb62dd1/data',
      title: 'Badan Penanggulangan Bencana Daerah',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/bpbd'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/dc77719edc76449a9481b117671dd366/data',
      title: 'Badan Pendapatan Daerah',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/bapenda'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/b5f2a549a5074549a08938f58f8b3594/data',
      title: 'Badan Pengelolaan Aset Daerah',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/bpad-1'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/c24b038a948441639aa81c2e65fd6b6f/data',
      title: 'Badan Perencanaan Pembangunan Daerah',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/badan-perencanaan-pembangunan-daerah-2'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/a97eee51fa5a4eba9b3768af98b7123b/data',
      title: 'Badan Pertanahan Nasional',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/badan-pertanahan-nasional'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/20a2240cf36d4144bb4ea206910e9b18/data',
      title: 'Biro Tata Pemerintahan',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/biro-tata-pemerintahan-setda-provinsi-dki-jakarta'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/3f874ba705a14c4dacbc6a606555e789/data',
      title: 'Dinas Bina Marga',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/bina-marga'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/20a2240cf36d4144bb4ea206910e9b18/data',
      title: 'Dinas Cipta Karya, Tata Ruang, dan Pertanahan',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-cipta-karya-tata-ruang-dan-pertanahan'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/e4aba04d070441658be9013ca5ed58f1/data',
      title: 'Dinas Pertamanan dan Hutan Kota',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-kehutanan'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/4f1ab6c17e11400c9396d2414da58024/data',
      title: 'Dinas Kesehatan',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-kesehatan'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/20a2240cf36d4144bb4ea206910e9b18/data',
      title: 'Dinas Ketahanan Pangan Kelautan dan Pertanian',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-ketahanan-pangan-kelautan-dan-pertanian'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/4ec18f0b604943c78e87cd80fd9e3c22/data',
      title: 'Dinas Lingkungan Hidup',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-lingkungan-hidup'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/e493e7ce9a5e4e78bb9618c5a23e2054/data',
      title: 'Dinas Pariwisata dan Ekonomi Kreatif',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-pariwisata'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/8fe85bc4596345dca381d027630cfb1f/data',
      title: 'Dinas Pemberdayaan, Perlindungan Anak, dan Pengendalian Penduduk',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-ppapp'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/c99c0dfa7a324c2caf30ca4b0c5ce973/data',
      title: 'Dinas Pemuda dan Olahraga',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dispora-1'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/82e1808ef4d142aaa3c2b3c92b9168c2/data',
      title: 'Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/template-simpul-jaringan-3'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/4bca697e9ae64f00837f775df6a64763/data',
      title: 'Dinas Penanggulangan Kebakaran dan Penyelamatan',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/damkar-1'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/623774ab3108473197ce21f4980fc764/data',
      title: 'Dinas Pendidikan',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-pendidikan'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/3f0d046eb3a44cb1a46897d2cbf10b16/data',
      title: 'Dinas Perhubungan',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-perhubungan'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/20a2240cf36d4144bb4ea206910e9b18/data',
      title: 'Dinas Perumahan Rakyat dan Kawasan Permukiman',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-perumahan-rakyat-dan-kawasan-permukiman'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/7fde1d84a4aa432a8ab68ab879143205/data',
      title: 'Dinas Sosial',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-sosial'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/46146d5b8dd441aebebfb1de1ccbea56/data',
      title: 'Dinas Sumber Daya Air',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-sumber-daya-air'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d23affee7a97486db9df367d7794532b/data',
      title: 'Dinas Tenaga Kerja, Transmigrasi dan Energi',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/dinas-tenaga-kerja-dan-transmigrasi'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/4f61db426c404af8926bb41b53c24829/data',
      title: 'Jaklingko',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/jaklingko-2'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/9f93d9b02e4142d991644252cb2a715e/data',
      title: 'Satuan Polisi Pamong Praja',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/satpol-pp'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/20a2240cf36d4144bb4ea206910e9b18/data',
      title: 'Biro Pendidikan dan Mental Spiritual',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/biro-pendidikan-dan-mental-spiritual'
    },
    {
      imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/20a2240cf36d4144bb4ea206910e9b18/data',
      title: 'Dinas Perindustrian, Perdagangan, Koperasi, Usaha Kecil dan Menengah',
      link: 'https://jakartasatu.jakarta.go.id/portal/apps/sites/#/ppkukm'
    }
  ];

  const isMobile = useMediaQuery("(max-width: 1042px)"); // Menentukan apakah tampilan berada pada layar handphone
  const pageSize = isMobile ? 4 : 8; // Jumlah logo dan judul yang tampil di setiap halaman carousel
  const pages = Math.ceil(items2.length / pageSize); // Jumlah halaman carousel

  // Membagi data logo dan judul ke dalam halaman-halaman
  const carouselPages = [];
  for (let i = 0; i < pages; i++) {
    carouselPages.push(items2.slice(i * pageSize, (i + 1) * pageSize));
  }

  const { t } = props;

  return (
    <BoxContainer>
      <BoxContent>
        <BoxImage2 src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/979388b0f1944b23aed602beab869092/data" />
        <BoxTitle>
          {t('beranda.simpulJaringan.judul')}
        </BoxTitle>

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
          {t('beranda.simpulJaringan.keterangan')}
        </BoxDescription>

        <Carousel
          stopAutoPlayOnHover={true}
          navButtonsAlwaysVisible={true}
          swipe={true}
          height={500}
          fullHeightHover={true}
          animation={"slide"}
          IndicatorIcon={false}
          sx={CarouselStyle}

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
          {t('beranda.simpulJaringan.lihatSemua')}
        </Button>
      </BoxContent>
    </BoxContainer>
  );
}

export const HalamanSimpulJaringan = withTranslation()(SimpulJaringan);
