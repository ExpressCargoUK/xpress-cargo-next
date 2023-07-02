import { Box, Container, Typography } from "@mui/material"
import Accordion from "../../common/Accordion"
import VideoPlayer from "../../common/VideoPlayer/VideoPlayer"
import { FrequentAskedQuestionData } from "../../data"
import styles from "./frequent-asked-question.module.scss"

const FrequentAskedQuestionComponent = () => {
  return (
    <Box className={styles.content__wrapper}>
      <Container>
        <Box className={styles.content}>
          <Typography>
            Before booking make sure you have the shipper’s and receivers
            details with the full address and telephone contact details. Click
            on BOOK ONLINE and choose sea booking or air booking depending on
            your type of shipment. Please fill in the form with all required
            details and click submit.
            <br /> <br />
            One of our Freight advisors will contact you to process your
            booking.
          </Typography>
          <br />

          {FrequentAskedQuestionData?.map(
            ({ heading, questionAndAns, video }, idx) => (
              <Box className={styles.air__freight} key={idx}>
                <Typography className={styles.heading} variant="h5">
                  {heading}
                </Typography>
                {video && (
                  <Box
                    sx={{
                      padding: "20px 0",
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                    }}
                  >
                    <VideoPlayer url="https://youtu.be/rhoLViEez4M" />
                  </Box>
                )}
                <div style={{ margin: "30px 0" }}>
                  {questionAndAns?.map((faq, idx) => (
                    // <Box className={styles["ques__and__ans"]} key={idx}>
                    //   <Typography>{question}</Typography>
                    //   <Typography dangerouslySetInnerHTML={{ __html: answer }} />
                    // </Box>

                    <Accordion {...faq} key={idx} color="#fff" />
                  ))}
                </div>
              </Box>
            ),
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default FrequentAskedQuestionComponent
