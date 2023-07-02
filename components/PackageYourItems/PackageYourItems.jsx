import { Box, Container, Typography } from "@mui/material"
import Accordion from "../../common/Accordion"
import { parcelPackageData, parcelPackageData2 } from "../../data"
import styles from "./packer-your-items.module.scss"

const PackageYourItemsComponents = () => {
  return (
    <Box className={styles.content__wrapper}>
      <Container>
        <Box className={styles.content}>
          <Typography
            className={`${styles.title} ${styles.margin__bottom}`}
            variant="h5"
          >
            Your parcel is precious! Package it with care.
          </Typography>
          <Typography className={`${styles.text} ${styles.margin__bottom}`}>
            Proper packaging not only protects your own parcel, but helps to
            prevent damage to other customers&apos; goods in transit. Our
            carriers insist on proper packaging and may refuse to accept a
            parcel that is unsuitably packaged
          </Typography>
          <Typography
            className={`${styles.title} ${styles.margin__bottom}`}
            variant="h5"
          >
            The Shipping Carton
          </Typography>
          <Typography className={`${styles.text} ${styles.margin__bottom}`}>
            The &quot;shipping carton&quot; is the box in which you place your
            goods.
          </Typography>
          <Typography>
            <b>Size</b> - make sure the size of your box is appropriate to the
            content. Overloaded boxes may burst; under-filled boxes are likely
            to collapse.
          </Typography>
          <br />
          <Typography>
            <b>Strength</b> - be sure to choose boxes strong enough to hold the
            full weight of your consignment, made of corrugated cardboard and
            with good quality outer liners. Use heavy duty, double-layered
            cardboard for valuable items. Check the weight specification of the
            package, and do not exceed this limit.
          </Typography>
          <br />
          <Typography>
            <b>Quality</b> - always use high quality materials. If reusing old
            boxes, ensure they are in a good enough condition to withstand the
            journey and be sure to remove old labels.
            <br /> <br />
            <b>REMEMBER!</b>
          </Typography>
          <br />
          <Typography>
            <b> Never use boxes that have hazard labels or symbols on them.</b>{" "}
            This includes UN numbers. These parcels will be stopped by the
            courier and may incur fines, even if you have attempted to cover
            them up.
          </Typography>
          <br />
          <Typography>
            <b>Please do not strap boxes together.</b> Each box should have its
            own label.
          </Typography>
          <br />
          <Typography>
            All contents must be packaged in some way, and{" "}
            <b>packaging made of fabric or plastic is not suitable.</b>
          </Typography>
          <br />
          <Typography>
            <b>Inside the Carton</b>
          </Typography>
          <br />
          <Typography>
            <b>Cushioning</b> - use materials such as bubble wrap, kraft paper
            and loose fill polystyrene to protect your items. There should be at
            least (5cm) of cushioning between each item, and between the items
            and the carton wall.
          </Typography>
          <br />
          <Typography>
            <b>Positioning</b> - Place fragile goods in the centre of your
            package, ensuring that they do not touch the sides. Use cardboard
            dividers when sending flat, fragile material such as vinyl records.
          </Typography>
          <br />
          <Typography>
            <b>REMEMBER!</b> You should fill all remaining space in the box with
            additional cushioning material to minimise the impact of transit on
            your items.
          </Typography>
          <br />
          <Typography>
            <b>Sealing and Labelling</b>
            <br /> <br />
            Seal your items with a quality adhesive parcel tape, not sellotape
            or other materials such as rope or ribbon. (For DHL Express and TG
            Express, this must have at least 28mm width.)
            <br /> <br />
            Customs may need to inspect the contents of your package. Seal it
            securely.
            <br /> <br />
            Ensure that your shipping label (also termed air waybill) is
            securely attached to the flat topside of your parcel. The barcode
            and shipping address should be clearly visible and not obscured in
            any way.
          </Typography>
          <br /> <br />
          <Typography>
            <b>Distinctive Items</b>
          </Typography>
          <br /> <br />
          <Typography>
            <b>Sharp items</b> such as scissors should be fully protected at
            edges and points with securely fixed, heavy cardboard.
          </Typography>
          <br />
          <Typography>
            <b>Small items</b> should be packed into flyers (polythene
            courier/mailing bags).
          </Typography>
          <br />
          <Typography>
            <b>Powders and fine grains</b> should be placed in sturdy plastic
            bags, securely sealed and packed in a rigid fibreboard box.
          </Typography>
          <br />
          <Typography>
            <b>Liquids</b> should be stored in leak-free containers, packed with
            a strong, lightweight internal material such as Styrofoam, and
            sealed with a plastic bag.
          </Typography>
          <br />
          <Typography>
            <b>Semi-liquids or greasy and strong-smelling substances</b> should
            be sealed with adhesive tape and wrapped in grease resistant paper.
          </Typography>
          <br />
          <Typography>
            <b>Rolled plans, maps and blueprints</b> should be stored in
            triangular rather than cylindrical tubes. They are stronger!
          </Typography>
          <br />
          <Typography>
            <b>Data, discs and audio tapes</b> should be fully cushioned for
            extra protection.
          </Typography>
          <br />
          <Box className={styles.img__box}>
            <img src="/assets/images/parcel-packing.jpg" alt="Parcel packing" />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default PackageYourItemsComponents
