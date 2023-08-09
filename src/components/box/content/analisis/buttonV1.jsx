import { Box, Button, Typography } from "@mui/material"
import {
  BoxImage2,
  button600px,
  iconButtonStyles, 
  iconButtonStyles2,
  judulButton,
} from "../../../../styles/dataAnalisis/index.js";

export const ButtonPilihan = () => {
  return (
    <div>
      <Box
        sx={{
          "@media (max-width: 600px)": {
            flexDirection: "column",
            alignItems: "center",
            "& > button": {
              width: "90%",
              margin: "5%",
            },
          },
        }}
      >
        <Button
          sx={iconButtonStyles}
          variant="contained"
          size="large"
          autoCapitalize="false">

          <Box
            sx={button600px}>
            <BoxImage2
              src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/aa79a1f3d6f54b0c81432e593ad999e2/data" />
            <Typography
              sx={judulButton}
            >
              Apotek
            </Typography>
          </Box>


        </Button>

        <Button
          sx={iconButtonStyles2}
          variant="contained"
          size="large"
          autoCapitalize='false'>

          <Box
            sx={button600px}>
            <BoxImage2
              src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/11e9b1d81d5640a5a66f40e4ede0fad8/data" />
            <Typography
              sx={judulButton}
            >
              Batas Administrasi
            </Typography>
          </Box>

        </Button>

        <Button
          sx={iconButtonStyles}
          variant="contained"
          size="large"
          autoCapitalize='false'
        >

          <Box
            sx={button600px}>
            <BoxImage2
              src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/aee41da5af8848aaaf8a10c7035d2504/data" />
            <Typography
              sx={judulButton}
            >
              Transjakarta
            </Typography>
          </Box>

        </Button>

        <Button
          sx={iconButtonStyles2}
          variant="contained"
          size="large"
          autoCapitalize='false'>

          <Box
            sx={button600px}>
            <BoxImage2
              src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/f3008d96383c4beeb2e2b08ab67fa5dc/data" />
            <Typography
              sx={judulButton}
            >
              Halte
            </Typography>
          </Box>

        </Button>
      </Box>
    </div >
  )
}
