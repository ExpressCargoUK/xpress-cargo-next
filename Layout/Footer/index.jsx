import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { footerCountry, footerData } from "../../data"

import { FaFacebookF, FaPhoneAlt, FaTwitter } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { MdEmail, MdLocationOn } from "react-icons/md"

import Link from "next/link"
import { useState } from "react"
import SocialIcon from "../../common/SocialIcon"
import styles from "./Footer.module.scss"

const Footer = () => {
  const [displayCount, setDisplayCount] = useState(5)
  // console.log(displayCount, footerCountry[0].submenu.length);

  const sliceLinks = footerCountry[0].submenu.slice(0, 0)
  // console.log(sliceLinks);

  const handleMoreLinks = () => setDisplayCount(displayCount + 5)

  return (
    <footer className={styles.__wrapper}>
      <Container>
        <Grid container>
          {footerData.map(({ title, submenu }, i) => (
            <Grid item xs={12} sm={6} lg={3} key={`${title}_${i}`}>
              <Box className={styles.menu__box}>
                <Typography
                  variant="h4"
                  component="h3"
                  className={styles.title}
                >
                  {title}
                </Typography>

                <Box component="ul" className={styles.submenu_items}>
                  {submenu?.map((link, i) => (
                    <Box
                      component="li"
                      key={`${link}_${i}`}
                      className={styles.submenu_item}
                    >
                      <Link href={`${link.url}`} className={styles.url}>
                        {link.title}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}

          <Grid item xs={12} sm={6} lg={3}>
            <Box className={styles.menu__box}>
              <Typography variant="h4" component="h3" className={styles.title}>
                Contact Us
              </Typography>

              <Box component="ul" className={styles.submenu_items}>
                <Box component="li" className={styles.submenu_contact}>
                  <div className={styles.url}>
                    <SocialIcon>
                      <FaPhoneAlt style={{ fill: "#1c252e" }} />
                    </SocialIcon>

                    <ul>
                      <li>+44 161 882 0666</li>
                    </ul>
                  </div>
                </Box>
                <Box component="li" className={styles.submenu_contact}>
                  <div className={styles.url}>
                    <SocialIcon>
                      <MdEmail style={{ fill: "#1c252e" }} />
                    </SocialIcon>

                    <ul>
                      <li>
                        <a
                          href="mailto:info@ecul.co.uk"
                          style={{ textTransform: "lowercase" }}
                        >
                          info@ecul.co.uk
                        </a>
                      </li>
                    </ul>
                  </div>
                </Box>
                <Box component="li" className={styles.submenu_contact}>
                  <div className={styles.url}>
                    <SocialIcon>
                      <MdLocationOn style={{ fill: "#1c252e" }} />
                    </SocialIcon>

                    <ul>
                      <li>Express Cargo UK Ltd</li>
                      <li>Unit C 88-90 Chorlton Road</li>
                      <li>Old Trafford</li>
                      <li>Manchester</li>
                      <li>M15 4AN</li>
                      <li>United Kingdom</li>
                    </ul>
                  </div>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Box className={styles.menu__box}>
              <Typography variant="h4" component="h3" className={styles.title}>
                Follow Us
              </Typography>

              <Box className={styles.social_items}>
                <a
                  href="https://www.facebook.com/expresscargo.ecul"
                  target="_blank"
                  className={styles.url}
                  rel="noreferrer"
                >
                  <SocialIcon>
                    <FaFacebookF style={{ fill: "#1c252e" }} />
                  </SocialIcon>
                </a>
                <a
                  href="https://twitter.com/expresscargouk"
                  target="_blank"
                  className={styles.url}
                  rel="noreferrer"
                >
                  <SocialIcon>
                    <FaTwitter style={{ fill: "#1c252e" }} />
                  </SocialIcon>
                </a>
                <a
                  href="https://instagram.com/expresscargouk"
                  target="_blank"
                  className={styles.url}
                  rel="noreferrer"
                >
                  <SocialIcon>
                    <FiInstagram style={{ fill: "#1c252e" }} />
                  </SocialIcon>
                </a>
              </Box>

              <Stack direction={"column"} sx={{ marginTop: "20px" }}>
                <img
                  src="/assets/images/parcel/bifa-logo-1.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    maxWidth: "150px",
                  }}
                />
                <img
                  src="/assets/images/parcel/fiata.svg"
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    maxWidth: "150px",
                  }}
                />
              </Stack>
            </Box>
          </Grid>
        </Grid>
        {/* <Grid container>
          {footerCountry.map(({ title, submenu }, i) => (
            <Grid item xs={12} sm={6} lg={3} key={`${title}_${i}`}>
              <Box className={styles.menu__box}>
                <Typography
                  variant="h4"
                  component="h3"
                  className={styles.title}
                >
                  {title}
                </Typography>

                <Box component="ul" className={styles.submenu_items}>
                  {submenu?.slice(0, displayCount).map((link, i) => (
                    <Box
                      component="li"
                      key={`${link}_${i}`}
                      className={styles.submenu_item}
                    >
                      <Link href={`${link.url}`} className={styles.url}>
                        {link.name}
                      </Link>
                    </Box>
                  ))}

                  {displayCount !== submenu.length && (
                    <Typography
                      onClick={handleMoreLinks}
                      sx={{
                        width: "max-content",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      Show more
                    </Typography>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </footer>
  )
}

export default Footer
