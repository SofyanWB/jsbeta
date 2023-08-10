import React from "react";
import { BoxContainer } from "../../styles/box";
import Peta from "./content/peta";
import AnalisisSpasial from "./content/analisis";
import SimpulJaringan from "./content/simpul-jaringan";
import Dashboard from "./content/dashboard";
import Handphone from "./content/handphone";
import {
  BoxContent
} from "../../styles/box";

function Box() {
  return (
    <BoxContainer>
      <BoxContent>
        <Peta />
        <AnalisisSpasial />
        <SimpulJaringan />
        <Dashboard />
      </BoxContent>
      <Handphone />
    </BoxContainer>
  );
}

export default Box;
 
