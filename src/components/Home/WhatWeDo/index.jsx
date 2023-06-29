import { Container, Box, Typography } from "@mui/material";
import Accordion from "../../../common/Accordion";
import Divider from "../../../common/Divider";
import { faqs } from "../../../data";
import styles from "./styles.module.scss";

const WhatWeDo = () => {
  return (
    <Box component="section" className={styles.__wrapper}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h3" variant="h3" className={styles.title}>
            What Do We Do for You Exactly?
          </Typography>

          <Typography component="p" className={styles.para}>
            We understand that partnering with a freight forwarder can be a big
            step. Especially if you’re only just starting your business.
          </Typography>
          <Typography component="p" className={styles.para}>
            But real changes will occur only if you hire the most genuine one
            amongst the freight forwarders companies. UK business owners that
            move freight domestically and internationally can expect the
            following benefits.
          </Typography>

          <div style={{ height: "50px" }} aria-hidden="true" />

          {faqs.map((faq, i) => (
            <Accordion {...faq} key={i} />
          ))}

          <div style={{ height: "50px" }} aria-hidden="true" />

          <Divider />
        </Box>
      </Container>
    </Box>
  );
};

export default WhatWeDo;
