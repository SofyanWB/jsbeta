import React from 'react'
import { Button } from "@mui/material";
import {
  BoxContainer,
  BoxContent,
  BoxContent2,
  BoxDescription,
  BoxImage,
  BoxTitle,
  iconButtonStyles3,
} from "../../../../styles/dataAnalisis/index.js";
import { Box } from '@mui/system';
import { Kotak } from './buttonV2.jsx';


function dataAnalisis() {
  return (
    <BoxContainer>

      <BoxContent> 

        <BoxImage src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/cbbf39437984447091f5e1608fc56d70/data" />

      </BoxContent>

      <BoxContent2>
        <BoxTitle variant="h2">
          Unduh Data Spasial Jakarta, dimanapun kamu berada
        </BoxTitle>

        <BoxDescription>
          Dapatkan sumber informasi data spasial di Jakarta secara realtime, tersedia dalam format pdf dan shp
        </BoxDescription>
        
        <Kotak></Kotak>

        <Box
          justifyContent="center"
          alignItems="center">

          <Button
            //disabled
            sx={iconButtonStyles3}
            variant="contained"
            size="large">
            Lihat Semua
          </Button>

        </Box>

      </BoxContent2>

    </BoxContainer>
  )
}

export default dataAnalisis