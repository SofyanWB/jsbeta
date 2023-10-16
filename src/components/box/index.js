import React from "react";
import { BoxContainer } from "../../styles/box";
import { HalamanPeta } from "./content/peta";
import { HalamanAnalisis } from "./content/analisis";
import { HalamanSimpulJaringan } from "./content/simpul-jaringan";
import { HalamanDashboard } from "./content/dashboard";
import { HalamanHandphone } from "./content/handphone";
import {
  BoxContent
} from "../../styles/box";

function Box() {

  return (
    <BoxContainer>
      <BoxContent>
        <HalamanPeta />
        <HalamanAnalisis />
        <HalamanSimpulJaringan />
        <HalamanDashboard />
      </BoxContent>
      <HalamanHandphone />
    </BoxContainer>
  );
}

export default Box;
