import { TabContext } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { FaTruckMoving } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { RiShipFill } from "react-icons/ri";
import AirFreight from "./AirFreight/AirFreight";
import RoadFreight from "./RoadFreight/RoadFreight";
import SeaFreight from "./SeaFreight/SeaFreight";
import styles from "./shipping.module.scss";
import ShippingHead from "./ShippingHead/ShippingHead";

const Shipping = () => {
  const [activeTab, setActiveTab] = useState("1");

  // Handle active tab
  const handleActiveTab = (event, value) => setActiveTab(value);

  return (
    <>
      {activeTab === "1" && (
        <ShippingHead bgImg="/assets/images/air-plane.jpg" title="In The Air" />
      )}

      {activeTab === "2" && (
        <ShippingHead
          bgImg="/assets/images/truck-shipment.jpg"
          title="On The Road"
        />
      )}

      {activeTab === "3" && (
        <ShippingHead
          bgImg="/assets/images/sea-shipment.jpg"
          title="On The Seas"
        />
      )}

      <Box component={"section"} className={styles.shipping__wrapper}>
        <Typography className={styles.section__heading} variant="h4">
          What we can do for you
        </Typography>

        <TabContext value={activeTab}>
          <Box className={styles.shipping__content}>
            <Tabs
              className={styles.tabs}
              value={activeTab}
              onChange={handleActiveTab}
              indicatorColor={{ color: "#0e1e59" }}
              variant="fullWidth"
            >
              <Tab
                className={styles.tab}
                icon={<IoAirplaneSharp className={styles.tab__icon} />}
                iconPosition="bottom"
                label="AIR FREIGHT"
                disableRipple
                value="1"
              />

              <Tab
                className={styles.tab}
                icon={<FaTruckMoving className={styles.tab__icon} />}
                iconPosition="bottom"
                label="ROAD FREIGHT"
                disableRipple
                value="2"
              />

              <Tab
                className={styles.tab}
                icon={<RiShipFill className={styles.tab__icon} />}
                iconPosition="bottom"
                label="SEA FREIGHT"
                disableRipple
                value="3"
              />
            </Tabs>

            <TabPanel value="1" sx={{ padding: 0 }}>
              <AirFreight />
            </TabPanel>
            <TabPanel value="2" sx={{ padding: 0 }}>
              <RoadFreight />
            </TabPanel>
            <TabPanel value="3" sx={{ padding: 0 }}>
              <SeaFreight />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </>
  );
};

export default Shipping;
