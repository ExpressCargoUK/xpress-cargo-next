import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material"
import emailjs from "emailjs-com"
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import { AiFillTwitterCircle } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import FCSuccess from "../../common/FCSuccess"
import styles from "./contact.module.scss"
import Offices from "./Offices/Offices"

const ContactUsForm = () => {
  const [service, setService] = useState("sea")
  const [varilization, setVarilization] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleServiceChange = (event) => {
    setService(event.target.value)
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const newData = { ...data, service }

    if (varilization) {
      emailjs
        .send(
          "service_orhth3q",
          "template_id0htzh",
          newData,
          "ydXRP5u6kT9XoAg3H",
        )
        .then(
          (result) => {
            // console.log(result.text);
            setSuccess(true)
          },
          (error) => {
            // console.log(error.text);
          },
        )
    }

    reset()
    setService("sea")
    setVarilization(false)

    setTimeout(() => {
      setSuccess(false)
    }, 6000)
  }

  const handleVarilization = (value) => {
    if (value) {
      setVarilization(true)
    }
  }
  return (
    <Box className={styles.contact__form}>
      {success && (
        <FCSuccess text="Thank you for submitting your information" />
      )}
      <Container>
        <Box className={styles.head}>
          <Typography className={styles.head__title} variant="h3">
            Have a Question?
            <br />
            Just Ask
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ marginTop: 1 }} item>
          <Grid item xs={12} md={6}>
            <Box className={styles.left__content}>
              <Typography className={styles.details}>
                At Express Cargo we’re always available, whether it’s by phone
                or email. We’d love to hear from you to see how we can assist
                you with your shipping and logistics requirements. <br /> <br />{" "}
                Please fill in the contact form and we will endeavour to respond
                within one working day. <br /> <br /> Alternatively, you can
                phone the below number to speak with a member of our experienced
                team today.
              </Typography>

              <Box>
                <Box className={styles.contact__info}>
                  <Typography>Domestic contact:</Typography>
                  <Typography>
                    T: &nbsp;
                    <Box component="a" href="tel:01618820666" target="_blank">
                      0161 88 20 666
                    </Box>
                  </Typography>
                  <Typography>
                    Email: &nbsp;
                    <Box
                      className={styles.link}
                      component="a"
                      href="mailto:info@ecul.co.uk"
                      target="_blank"
                    >
                      info@ecul.co.uk
                    </Box>
                  </Typography>
                </Box>

                <Stack
                  className={styles.social__icons}
                  direction="row"
                  alignItems="center"
                  spacing={1.5}
                >
                  <Box
                    className={styles.icon__box}
                    component="a"
                    href="https://www.facebook.com/expresscargo.ecul/"
                    target="_blank"
                  >
                    <BsFacebook className={styles.fb__icon} />
                  </Box>
                  <Box
                    className={styles.icon__box}
                    component="a"
                    href="https://twitter.com/expresscargouk"
                    target="_blank"
                  >
                    <AiFillTwitterCircle className={styles.tw__icon} />
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box className={styles.form} sx={{ background: "none" }}>
                <FormControl
                  className={styles.form__input}
                  required
                  fullWidth
                  sx={{
                    ".MuiFilledInput-root": {
                      background: "none",
                      marginBottom: "1rem",
                    },
                  }}
                >
                  <TextField
                    label="*Your Name"
                    variant="filled"
                    InputLabelProps={{
                      sx: { color: "#1c252e" },
                    }}
                    {...register("name", { required: true })}
                  />
                </FormControl>

                {errors.name && (
                  <p style={{ color: "red", marginBottom: "10px" }}>
                    This field is required
                  </p>
                )}

                <Box className={styles.input__group}>
                  <Box sx={{ width: "100%" }}>
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                      sx={{
                        ".MuiFilledInput-root": {
                          background: "none",
                          marginBottom: "1rem",
                        },
                      }}
                    >
                      <TextField
                        type="email"
                        label="*Email Address"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("email", { required: true })}
                      />
                    </FormControl>

                    {errors.email && (
                      <p style={{ color: "red", marginBottom: "10px" }}>
                        This field is required
                      </p>
                    )}
                  </Box>

                  <Box sx={{ width: "100%" }}>
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                      sx={{
                        ".MuiFilledInput-root": {
                          background: "none",
                          marginBottom: "1rem",
                        },
                      }}
                    >
                      <TextField
                        label="*Phone Number"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("phone_number", { required: true })}
                      />
                    </FormControl>
                    {errors.phone_number && (
                      <p style={{ color: "red", marginBottom: "10px" }}>
                        This field is required
                      </p>
                    )}
                  </Box>
                </Box>

                <FormControl
                  className={styles.form__input}
                  required
                  fullWidth
                  sx={{
                    ".MuiFilledInput-root": {
                      background: "none",
                      marginBottom: "1rem",
                    },
                  }}
                >
                  <TextField
                    label="Company"
                    variant="filled"
                    InputLabelProps={{
                      sx: { color: "#1c252e" },
                    }}
                    {...register("company")}
                  />
                </FormControl>

                <FormControl fullWidth>
                  <TextareaAutosize
                    className={styles.textarea}
                    minRows={10}
                    placeholder="Message"
                    {...register("message", { required: true })}
                  />
                </FormControl>

                {errors.message && (
                  <p style={{ color: "red", margin: "10px 0" }}>
                    This field is required
                  </p>
                )}

                <FormControl className={styles.radio__group}>
                  <FormLabel className={styles.label}>
                    *Which service are you seeking?
                  </FormLabel>
                  <RadioGroup
                    row
                    value={service}
                    onChange={handleServiceChange}
                  >
                    <FormControlLabel
                      value="air"
                      control={
                        <Radio sx={{ "&.Mui-checked": { color: "#1c252e" } }} />
                      }
                      label="Air"
                    />
                    <FormControlLabel
                      value="sea"
                      control={
                        <Radio sx={{ "&.Mui-checked": { color: "#1c252e" } }} />
                      }
                      label="Sea"
                    />

                    <FormControlLabel
                      value="road"
                      control={
                        <Radio sx={{ "&.Mui-checked": { color: "#1c252e" } }} />
                      }
                      label="Road"
                    />
                    <FormControlLabel
                      value="pallet"
                      control={
                        <Radio sx={{ "&.Mui-checked": { color: "#1c252e" } }} />
                      }
                      label="Pallet"
                    />
                    <FormControlLabel
                      value="parcel"
                      control={
                        <Radio sx={{ "&.Mui-checked": { color: "#1c252e" } }} />
                      }
                      label="Parcel"
                    />
                  </RadioGroup>
                </FormControl>

                <Box style={{ width: "100%", marginTop: "30px" }}>
                  <ReCAPTCHA
                    // sitekey={process.env.REACT_APP_RE_CAPTCHA_KEY}
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleVarilization}
                  />
                </Box>

                <Button
                  type="submit"
                  className={styles.submit__btn}
                  disableRipple
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>

        <Offices />
      </Container>
    </Box>
  )
}

export default ContactUsForm
