import { Container, Box, Typography, Button } from "@mui/material"

import Divider from "../../../common/Divider"

import styles from "./styles.module.scss"
import Link from "next/link"

const FreightForwarder = () => {
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
          <Divider />

          <Typography component="h3" variant="h3" className={styles.title}>
            A Freight Forwarder Company Can Transform Your Business
          </Typography>

          <Typography component="p" className={styles.para}>
            Does your business involve selling goods? If so, import and export
            will be a major part of it. As an experienced freight forwarding
            company, we know about all the things that can go wrong in this
            process.
          </Typography>
          <Typography component="p" className={styles.para}>
            Before they find us, our clients often struggle to keep up with the
            demands of running their business.
          </Typography>
          <Typography component="p" className={styles.para}>
            If you want to maximise the chances of business success, you need a
            well-established freight forwarder services provider. UK-based
            business owners will receive comprehensive services from UK shipping
            companies, like Express Cargo with one common goal in mind –
            transforming your business.
          </Typography>

          <div style={{ height: "50px" }} aria-hidden="true" />

          <Link
            href="/help-tracking/quotation-form"
            style={{ textDecoration: "none" }}
          >
            <Button
              size="medium"
              variant="contained"
              sx={{
                backgroundColor: "#1c252e",
                color: "#fff",
                padding: "10px 25px",
                borderRadius: "30px",

                "&:hover": {
                  backgroundColor: "#151c24",
                  color: "#fff",
                },
              }}
            >
              Get a Quick Quote
            </Button>
          </Link>

          <div style={{ height: "50px" }} aria-hidden="true" />

          <Divider />
        </Box>
      </Container>
    </Box>
  )
}

export default FreightForwarder
