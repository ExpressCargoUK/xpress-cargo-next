import { Container, Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const ContactUs = () => {
  return (
    <Box
      sx={{
        padding: { xs: "2rem 0", md: "5rem 0" },
        backgroundColor: "#031224",
      }}
    >
      <Container>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            textAlign: "left",
            fontSize: "2.5rem",
            fontFamily: "sans-serif",
            fontWeight: "700",
            color: "#fff",
            maxWidth: "960px",
            margin: "1rem 0",
          }}
        >
          Contact Us
        </Typography>

        <Typography
          component="p"
          sx={{
            textAlign: "left",
            fontSize: "1rem",
            fontFamily: "sans-serif",
            fontWeight: "500",
            color: "#f2f2f2",
            maxWidth: "960px",
            marginBottom: "1em",
          }}
        >
          We are here when you need us. Get in contact to see what we can do for
          you
        </Typography>

        <Link
          href="/contact-us"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
            <Button
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #0D1E58",
                color: "#0D1E58",
                padding: "0.8rem 2rem",
                borderRadius: "30px",
                textTransform: "unset",
                fontWeight: "700",
                fontSize: "18px",
                marginTop: "1em",

                "&:hover": {
                  backgroundColor: "#0D1E58",
                  border: "1px solid #fff",
                  color: "#fff",
                },
              }}
            >
              Contact Us
            </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default ContactUs;
