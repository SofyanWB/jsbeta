import React from "react";
import { BoxContainer } from "../../styles/box";
import Peta from "./content/peta";
import AnalisisSpasial from "./content/analisis";
import SimpulJaringan from "./content/simpul-jaringan";
import Dashboard from "./content/dashboard";
import Handphone from "./content/handphone";
import {
  BoxContent,
  BoxImage,
} from "../../styles/box";

function Box() {
  return (
    <BoxContainer>
      <BoxContent>
        <BoxImage src="/images/menuPeta/Rectangle_1.png"/>
        <Peta />
        <AnalisisSpasial />
      </BoxContent>
      <BoxContent>
        <BoxImage src="/images/menuPeta/Rectangle_2.png"/>
        <SimpulJaringan />
        <Dashboard />
        <Handphone />
      </BoxContent>
    </BoxContainer>
  );
}
 
export default Box;
 