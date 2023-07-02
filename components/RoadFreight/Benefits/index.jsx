import { Container, Box, Typography } from "@mui/material"
import Accordion from "../../../common/Accordion"
import Divider from "../../../common/Divider"
import { roadFreightBenefits } from "../../../data"

const Benefits = ({ title, data }) => {
  return (
    <Box
      component="section"
      sx={{
        padding: { xs: "2rem 0", lg: "5rem 0" },
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Divider />

          <Typography
            component="h1"
            variant="h1"
            sx={{
              textAlign: "center",
              fontSize: "2.2rem",
              fontFamily: "sans-serif",
              fontWeight: "700",
              color: "#1c252e",
              maxWidth: "960px",
              margin: "1em 0",
            }}
          >
            {title ||
              "Here are a few benefits of utilising the road freight services we provide."}
          </Typography>

          {data.map((benefit, i) => (
            <Accordion key={i} {...benefit} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Benefits
