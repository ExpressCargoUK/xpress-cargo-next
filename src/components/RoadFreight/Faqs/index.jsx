import { Container, Box, Grid } from "@mui/material";
import styles from "./styles.module.scss";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  //   border: `1px solid ${theme.palette.divider}`,
  //   "&:not(:last-child)": {
  //     borderBottom: 0,
  //   },
  //   "&:before": {
  //     display: "none",
  //   },

  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faqs = ({ faqs = [] }) => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box component="section" className={styles.__wrapper}>
      <Container>
        <Typography component="h1" variant="h1" className={styles.title}>
          Have to know about:
        </Typography>

        <Grid container spacing={2}>
          {faqs.map(({ title, description }, i) => (
            <Grid item xs={12} md={6} lg={4} key={i}>
              <Accordion
                expanded={expanded === title}
                onChange={handleChange(title)}
              >
                <AccordionSummary
                  aria-controls="service-content"
                  id="service-header"
                >
                  <Typography className={styles.faq__title}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    className={styles.details}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Faqs;
