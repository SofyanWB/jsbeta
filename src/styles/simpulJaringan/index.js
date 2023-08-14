import { Divider, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
//import Carousel from "react-material-ui-carousel";

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingBottom: "100px",
  //background: Colors.light_gray,

}));

export const BoxContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "90%",
  padding: "20px",

}));


// background image 

export const BoxImage2 = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "700px",
  top: "300px",
  left: "-4vh",
  height: "720px",

  position: "absolute"

}));

// ========== Judul dan Deskripsi ===================

// Judul

export const BoxTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "46px",
  textAlign: "center",
  marginBottom: "2%",
  color: "#004581",
  [theme.breakpoints.down(1440)]: {
    fontSize: "3.2vw",
  },
  [theme.breakpoints.down(1043)]: {
    fontSize: "6vw",
  },
}));

// Deskripsi

export const BoxDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 2,
  marginBottom: "3em",
  textAlign: "center",
  paddingLeft: "179px",
  paddingRight: "179px",
  marginTop: "5%",
  [theme.breakpoints.down(1440)]: {
    fontSize: "1.1vw",
    paddingLeft: "15vw",
    paddingRight: "15vw",
  },
  [theme.breakpoints.down(1043)]: {
    fontSize: "2vw",
    paddingLeft: "0vw",
    paddingRight: "0vw",
  },
  [theme.breakpoints.down(500)]: {
    fontSize: "12px",
    textAlign: "center",
  },
}));


// Garis

export const Dividers = () => {

  return (
    <div>

      <Divider
        color="#1455A3"
        sx={{
          height: 3,
          width: '7%',
          margin: "auto"
        }} />

    </div>

  )
}

// ================= end ==================


// ========== button logo dan title ============ 

export const efekHover = {
  width: "100%",
  borderRadius: "15%",
  display: "flex",
  flexDirection: 'column',
  alignItems: "center",
  paddingTop: "10%",
  // padding:"20%",
  "&:hover": {
    boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.1)",
    bgcolor: "white"
  },
  "@media (max-width: 600px)": {
    height: "100%",
    paddingTop: "1%",
  }
}



// Logo

export const BoxImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  height: "80px",

  [theme.breakpoints.down(1400)]: {
    height: "4vw"
  },
  [theme.breakpoints.down(1042)]: {
    height: "9vw"
  },
  [theme.breakpoints.down(500)]: {
    height: "60px"
  },
}));


// Title Logo

export const textButton = {
  fontSize: "15px",
  textTransform: "none",
  height: "100px",
  color: "black",
  paddingTop: "10%",
  margin: "5%",
  textAlign: "center",
  "@media (max-width: 1400px)": {
    fontSize: "1vw",
  },
  "@media (max-width: 1043px)": {
    fontSize: "2vw",
  },
  "@media (max-width: 600px)": {
    fontSize: "12px",
    height: "30%"
  },
}


// penampung logo dan title

export const items2 = [
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

// ===================== end =====================


// ========= button Lihat Semua ==========

export const StyleButton = {
  width: "190px",
  height: "60px",
  borderRadius: 10,
  backgroundColor: "transparent",
  color: "blue",
  margin: "0 auto",
  "&:hover": {
    backgroundColor: "#1455A3",
    color: "white"
  }
}

export const StyleButton2 = {
  height: "65px",
  width: "200px",
  fontSize: "18px",
  backgroundColor: "#F7941D",
  borderRadius: 8,
  textTransform: "none",
  margin: "0 auto",

  boxShadow: "3px 3px 8px 1px rgba(0, 0, 0, 0.25)",
  "&:hover": {
    backgroundColor: "white",
    color: "#F7941D",
    border: "2px solid #F7941D",
  },
  "@media (max-width: 1440px)": {

    height: "4.5vw",
    width: "14vw",
    fontSize: "1.3vw"
  },
  "@media (max-width: 1042px)": {

    height: "7vw",
    width: "21vw",
    fontSize: "2vw"
  },
  "@media (max-width: 600px)": {

    height: "9vw",
    width: "35vw",
    fontSize: "2.5vw"
  },
}


export const StyleTextButton = {
  textDecoration: "underline",
}

export const CarouselStyle = {
  height: "30vw",
  marginBottom: "3%",

  "@media (max-width: 1600px)": {
    marginLeft: "-5%",
    marginRight: "-5%",
    height: "35vw",
  },
  "@media (max-width: 1440px)": {
    marginLeft: "-5%",
    marginRight: "-5%",
    height: "35vw",
  },
  "@media (max-width: 1042px)": {
    marginLeft: "-7%",
    marginRight: "-7%",
    height: "60vw",
  },
  "@media (max-width: 900px)": {
    marginLeft: "-7%",
    marginRight: "-7%",
    height: "60vw",
  },
  "@media (max-width: 800px)": {
    marginLeft: "-7%",
    marginRight: "-7%",
    height: "63vw",
  },
  "@media (max-width: 700px)": {
    marginLeft: "-9%",
    marginRight: "-9%",
    height: "65vw",
  },
  "@media (max-width: 600px)": {
    marginLeft: "-9%",
    marginRight: "-9%",
    height: "65vw",
  },
  "@media (max-width: 500px)": {
    marginLeft: "-10%",
    marginRight: "-10%",
    height: "75vw",
  },
  "@media (max-width: 450px)": {
    marginLeft: "-20%",
    marginRight: "-20%",
    height: "85vw",
  },
  "@media (max-width: 400px)": {
    marginLeft: "-20%",
    marginRight: "-20%",
    height: "95vw",
  },
  "@media (max-width: 350px)": {
    marginLeft: "-30%",
    marginRight: "-30%",
    height: "120vw",
  }
}