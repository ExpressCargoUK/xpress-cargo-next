import { Button, Container, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import styles from "./HelpTracking.module.scss"

const HelpTracking = () => {
  const [commodityCode, setCommodityCode] = useState("")
  const [EoriNumber, setEoriNumber] = useState("")

  const handleCommodityCode = () => {
    if (commodityCode?.length > 0) {
      window.open(
        `https://www.trade-tariff.service.gov.uk/commodities/${commodityCode}`,
        "_blank",
      )

      setCommodityCode("")
    }
  }

  const handleEoriNumber = () => {
    if (EoriNumber?.length > 0) {
      window.open(
        `https://ec.europa.eu/taxation_customs/dds2/eos/eori_validation.jsp?Lang=en&EoriNumb=${EoriNumber}&Expand=true`,
        "_blank",
      )

      setEoriNumber("")
    }
  }

  const handleCommoditySubmit = (event) => {
    event.preventDefault()
    window.open(
      "",
      "_new",
    ).document.location.href = `https://www.trade-tariff.service.gov.uk/search?utf8=%E2%9C%93&year=2019&q=${event.target.keywords.value}`
  }

  return (
    <div className={styles._wrapper}>
      <Container>
        <div className={styles._content} id="awb-tracking">
          <Typography variant="h6" color="inherit" className={styles._title}>
            AWB Tracking
          </Typography>

          {/* <form
            action="https://connect.track-trace.com/for/expresscargouk"
            method="post"
            target="_blank"
          >
            <input type="hidden" name="shipper" value="aircargo" />
            <input
              type="text"
              name="number"
              value="157-81016526"
              className={styles._input}
            />
            <input type="submit" value="Track" />
          </form> */}

          <form
            action="https://connect.track-trace.com/for/expresscargouk"
            method="post"
            target="_blank"
          >
            <input type="hidden" name="shipper" value="aircargo" />
            <Stack
              direction="row"
              spacing={2}
              className={styles._input_wrapper}
            >
              {/* <TextField
                value={trackTrace}
                onChange={(e) => setTrackTrace(e.target.value)}
                placeholder="AWB Tracking - 12345678"
                className={styles._input}
              /> */}
              <input
                type="text"
                name="number"
                // value="157-81016526"
                className={styles._input}
                style={{ padding: "10px 15px" }}
                placeholder="AWB Tracking"
              />

              <Button
                variant="contained"
                color="inherit"
                className={styles._button}
                // onClick={handleTrackTrace}
                type="submit"
              >
                Track
              </Button>
            </Stack>{" "}
          </form>

          <Typography
            variant="h6"
            color="inherit"
            className={styles._description}
          >
            Replace SHIPPER with the appropriate code from the list below and
            NUMBER with your tracking number(for air cargo use number format
            123-12345678).
          </Typography>
        </div>
        <div className={styles._content} id="commodity-code-finder">
          <Typography variant="h6" color="inherit" className={styles._title}>
            Commodity code finder
          </Typography>

          <form
            method="get"
            id="HmrcTariffSearch"
            target="_blank"
            noValidate
            onSubmit={handleCommoditySubmit}
          >
            <Stack
              direction="row"
              spacing={2}
              className={styles._input_wrapper}
            >
              {/* <TextField
                value={commodityCode}
                onChange={(e) => setCommodityCode(e.target.value)}
                placeholder="Commodity Codes Finder - 0101210000"
                className={styles._input}
              /> */}
              <input
                type="text"
                id="keywords"
                name="keywords"
                placeholder="Commodity Codes Finder"
                className={styles._input}
                style={{ padding: "10px 15px" }}
              />

              <Button
                variant="contained"
                color="inherit"
                className={styles._button}
                onClick={handleCommodityCode}
                type="submit"
                id="submitHMRC"
              >
                Search
              </Button>
            </Stack>
          </form>

          {/* <Stack direction="row" spacing={2} className={styles._input_wrapper}>
            <TextField
              value={commodityCode}
              onChange={(e) => setCommodityCode(e.target.value)}
              placeholder="Commodity Codes Finder - 0101210000"
              className={styles._input}
            />

          

            <Button
              variant="contained"
              color="inherit"
              className={styles._button}
              onClick={handleCommodityCode}
              // type="submit"
            >
              Search
            </Button>
          </Stack> */}
          <Typography
            variant="h6"
            color="inherit"
            className={styles._description}
          >
            Commodity codes, or tariff codes, are part of the Harmonized System
            (HS) for the classification of goods. They are used to assist with
            customs clearance and to calculate the correct duties and taxes for
            the items in your consignment.
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            className={styles._description}
          >
            You can use our Commodity Code Finder tool to search the UK
            government website for the code you need. If you find this difficult
            to navigate, try using the Google Search option instead. All you
            need to do is enter a simple descriptive keyword such as “books”,
            “socks” or “shoes”.
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            className={styles._description}
          >
            For personal effects, use 9905 00 00 (subject to change). For
            commodity code enquiries, please contact
            <br />
            <a href="http://classification.enquiries@hmrc.gsi.gov.uk">
              classification.enquiries@hmrc.gsi.gov.uk
            </a>
          </Typography>
        </div>

        <div className={styles._content} id="eori-number">
          <Typography variant="h6" color="inherit" className={styles._title}>
            Eori Number
          </Typography>

          <Stack direction="row" spacing={2} className={styles._input_wrapper}>
            <TextField
              value={EoriNumber}
              onChange={(e) => setEoriNumber(e.target.value)}
              placeholder="Eori Number - GB8392848394939"
              className={styles._input}
            />

            <Button
              variant="contained"
              color="inherit"
              className={styles._button}
              onClick={handleEoriNumber}
            >
              Search
            </Button>
          </Stack>

          <Typography
            variant="h6"
            color="inherit"
            className={styles._description}
          >
            EORI format: GB123456789000 The EORI (Economic Operator Registration
            Number) was introduced to improve security of all imports and
            exports entering and leaving the European Union. All companies
            exporting outside of the EU should have an EORI number.
            <a href="https://www.gov.uk/eori" target="_blank" rel="noreferrer">
              Click here for more information.
            </a>
          </Typography>

          <Typography
            variant="h6"
            color="inherit"
            className={styles._description}
          >
            Please note: this tool is an EU EORI number validator. From 1st
            January 2021, businesses will require separate UK and EU EORI
            numbers.
          </Typography>

          <Typography
            variant="h6"
            color="inherit"
            className={styles._description}
          >
            Dangerous goods and prohibited items
            <br />
            <br />
            The following restrictions apply to all services offered on our
            website. However, it is highly advisable to also check the policy of
            your chosen carrier as further restrictions may apply.
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            className={styles._description}
          >
            We also recommend that you check with customs at the destination
            country that you wish to send to, as each country has different
            policies as to what will be accepted into the country. If you are in
            any doubt, please contact our customer services team.
          </Typography>
        </div>
      </Container>
    </div>
  )
}

export default HelpTracking
