import { Box, Container, Typography } from "@mui/material";
import styles from "./styles.module.scss";

const Faq = () => {
  return (
    <Box component="section" className={styles.__wrapper}>
      <Container maxWidth="lg">
        <Typography className={styles.__title} variant="h5">
          Why work with Express Cargo UK ltd for customs clearance?
        </Typography>

        <Typography className={styles.__para} variant="p" component="body1">
          Express Cargo UK Ltd provides a comprehensive customs clearance
          service for import shipments arriving at all UK ports and airports.
        </Typography>
        <Typography className={styles.__para} variant="p" component="body1">
          Our strength in understanding UK import regulations enables us to
          offer advice to Importers on all customs related matters, for example,
          EORI, Duty Rates, Preferences, Licensing, Quota Requirements, Port
          Health, Carnet’s and IPR/OPR.
        </Typography>
        <Typography className={styles.__para} variant="p" component="body1">
          Links to the UK’s major airports, ports and terminals and using the
          latest technology for electronic transmission direct to Customs,
          enables Express Cargo to provide fast Customs Clearance of shipments
          arriving at all Ports and Airports nationwide.
        </Typography>
        <Typography className={styles.__para} variant="p" component="body1">
          Please contact us on 0161 8820666 or via our Contact form for a prompt
          reply.
        </Typography>
        <Typography className={styles.__para} variant="p" component="body1">
          Customs clearance is complex business. At Express Cargo UK Ltd we know
          this very well and we are here to assist, so whatever your country of
          origin, whatever your destination, we make it easy and uncomplicated.
        </Typography>
        <Typography className={styles.__para} variant="p" component="body1">
          Our attention to detail, knowledge of the rules and regulations will
          ensure your imports and exports are processed and cleared quickly. To
          put it simply whatever your need import needs, we make things less
          complex and move more smoothly for you
        </Typography>
        <Typography className={styles.__para} variant="p" component="body1">
          Provide access to import agents 24 hours a day, 7 days a week via our
          phone, out-of-hours service and email response systems
        </Typography>
        <Typography className={styles.__para} variant="p" component="body1">
          We offer free advice and guidance on all complex customs documentation
          and give specific instruction to ensure your submissions can be
          promptly processed
        </Typography>
        <Typography className={styles.__para} variant="p" component="body1">
          Provide access to bonded warehouse facilities in the UK, offer
          warehousing, break-bulk and delivery services nationwide
        </Typography>
        <Typography className={styles.__para} variant="p" component="body1">
          Offer standard services and tailor made options to suit all individual
          requirements
        </Typography>
      </Container>
    </Box>
  );
};

export default Faq;
