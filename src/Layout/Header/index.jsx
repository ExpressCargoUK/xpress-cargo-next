import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Slide from "@mui/material/Slide";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import * as React from "react";

import { Container } from "@mui/material";
import useScrollPosition from "../../hooks/useScrollPosition";
import styles from "./Header.module.scss";
import NavMenu from "./NavMenu";
import NavRightSocials from "./NavRightSocials";
import Sidebar from "./Sidebar";
import Link from "next/link";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const matches = useMediaQuery("(max-width: 1124px)");
  const scrollPosition = useScrollPosition();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: scrollPosition > 50 ? "#fff" : "transparent",
            boxShadow:
              scrollPosition > 50
                ? "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                : "none",
            backdropFilter: scrollPosition > 50 && "blur(1px)",
          }}
        >
          <Container>
            <Box className={styles.__wrapper}>
              <Link href="/" className={styles.logo}>
                <img
                  src={
                    scrollPosition > 50
                      ? "/assets/images/logo2.png"
                      : "/assets/images/logo.png"
                  }
                  alt="logo"
                />
                {/* <img src="/assets/images/logo.png" alt="logo" /> */}
              </Link>

              <Box className={styles.nab__menu}>{!matches && <NavMenu />}</Box>
              <Box className={styles.nab__socials}>
                {!matches && <NavRightSocials />}
              </Box>

              {matches && <Sidebar />}
            </Box>
          </Container>
        </AppBar>
      </HideOnScroll>
      {/* <Toolbar sx={{ mb: 1 }} /> */}
    </React.Fragment>
  );
};

export default Header;
