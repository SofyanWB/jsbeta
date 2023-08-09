import { Typography } from "@mui/material";
import React from "react";
import {
  BoxContainer,
  BoxContent,
  BoxContent2,
  BoxDescription,
  BoxImage,
  BoxImageLatar,
  BoxTitle,
} from "../../../../styles/peta";
import { Dialog1, Dialog2, Dialog3 } from "./dialogButton";

function Peta() {

  return (
    <BoxContainer >
      <BoxContent>
        <BoxImageLatar src="/images/menuPeta/bentuk.png" />
        <BoxTitle
          variant="h3">
          Peta Jakarta Satu
        </BoxTitle>
        <BoxDescription variant="subtitle">
          Eksplorasi Data Spasial DKI Jakarta dalam berbagai tampilan serta menyajikan Peta Dasar DKI Jakarta dalam beragam Visualisasi
        </BoxDescription>
        <BoxImage src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d3fc334e61d049809c6316b8185f79ef/data" />
      </BoxContent>
      <BoxContent2>
        <Typography
          sx={{
            width: "400px"
          }} />
        <Dialog1 />
        <Dialog3 />
        <Dialog2 />
      </BoxContent2>
    </BoxContainer>
  );
}

export default Peta;
