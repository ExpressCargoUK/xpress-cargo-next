import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { TbClipboardList } from "react-icons/tb";
import SectionHead from "../../common/SectionHead/SectionHead";
import styles from "./our-services.module.scss";
import Link from "next/link";

const sampleData = [
  {
    title: "Shop and Ship",
    icon: <TbClipboardList />,
    description:
      "You can order anything from any U.K. Store like Amazon, Harrods, Boots. Get it delivered to our warehouse and we will deliver it to your house in the Middle East.",
  },
  {
    title: "Vehicle Shipment",
    icon: <TbClipboardList />,
    description:
      "If you bought a car from the U.K, we can deliver it to your doorstep in the Middle East. We will take care of all the custom documentation and paperwork.",
  },
  {
    title: "Medical & Temperature Cargo",
    icon: <TbClipboardList />,
    description:
      "We work closely with airlines to ensure emergency medical cargo is delivered promptly and timely manner.",
  },
  {
    title: "Custom Clearance",
    icon: <TbClipboardList />,
    description: "We will clear all the paperwork.",
  },
  {
    title: "Pharmaceutical Shipping",
    icon: <TbClipboardList />,
    description:
      "We have state-of-the-art temperature-controlled facilities to ensure safe and timely shipment of Pharma products to our clients worldwide.",
  },
  {
    title: "Dangerous Goods Shipment",
    icon: <TbClipboardList />,
    description:
      "Over the past 10 years, we have gained extensive knowledge in dealing with dangerous goods cargo.",
  },
];

const OurServices = () => {
  return (
    <>
      <SectionHead
        bgImage={"/assets/images/air-shipment.jpg"}
        title="What we offer"
        description="Over the last years we have established relationship with industry  partners and are firmly positioned to negotiate the best possible rates on your behalf."
      />

      <Box className={styles.ourServices__wrapper}>
        <Container>
          <Box className={styles.head}>
            <Typography className={styles.title} variant="h4">
              Our Services
            </Typography>
            <Typography className={styles.subtitle}>
              Door the door cargo service from London and Manchester
            </Typography>
          </Box>

          <Grid container spacing={4} className={styles.card__wrapper}>
            {sampleData.map((item, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={4}>
                <Card className={styles.card}>
                  {item.icon}
                  <Typography className={styles.title} variant="h6">
                    {item.title}
                  </Typography>
                  <Typography className={styles.description}>
                    {item.description}
                  </Typography>

                  <Link className={styles.link} href="/services">
                    Read More
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OurServices;
