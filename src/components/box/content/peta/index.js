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
import {
  HalamanDialog1,
  HalamanDialog2,
  HalamanDialog3
} from "./dialogButton";

import { withTranslation } from "react-i18next";

function Peta(props) {
  const { t } = props;

  return (
    <BoxContainer >
      <BoxContent>
        <BoxImageLatar src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/979388b0f1944b23aed602beab869092/data" />
        <BoxTitle
          variant="h3">
          {t('beranda.peta.judul')}
        </BoxTitle>
        <BoxDescription variant="subtitle">
          {t('beranda.peta.keterangan')}
        </BoxDescription>
        <BoxImage src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d3fc334e61d049809c6316b8185f79ef/data" />
      </BoxContent>
      <BoxContent2>
        <Typography
          sx={{
            width: "400px"
          }} />
        <HalamanDialog1 />
        <HalamanDialog3 />
        <HalamanDialog2 />
      </BoxContent2>
    </BoxContainer>
  );
}

export const HalamanPeta = withTranslation()(Peta);
