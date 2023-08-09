import Navbar from "../../src/components/appBar/Navbar";
import Footer from "../../src/components/footer/index";
import Banner from "../../src/components/banner/index";
import Box from "../../src/components/box/index";

const Beranda = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Box />
      <Footer />
    </div>
  );
};

export default Beranda;