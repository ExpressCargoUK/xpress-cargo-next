import FCSuccess from "@/common/FCSuccess"
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
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material"
import emailjs from "emailjs-com"
import { NextSeo } from "next-seo"
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import styles from "./QuotationForm.module.scss"

const QuotationForm = () => {
  const [varilization, setVarilization] = useState(false)
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const onSubmit = (data) => {
    if (varilization) {
      emailjs
        .send("service_orhth3q", "template_5nleln6", data, "ydXRP5u6kT9XoAg3H")
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
    <>
      <NextSeo
        title="Freight Shipping Quote | Parcel Quotes"
        description="Get a freight shipping quote by carefully submitting the form. We provide cargo services to Saudi Arabia, Kuwait, Qatar, UAE, Sudan, Nigeria, India and Pakistan."
        canonical="https://expresscargouk.co.uk/help-tracking/quotation-form"
        openGraph={{
          url: "https://expresscargouk.co.uk/help-tracking/quotation-form",
        }}
      />
      <Box className={styles.__wrapper}>
        {success && (
          <FCSuccess text="Thank you for submitting your information" />
        )}
        <Container>
          <Typography variant="h2" component="h2" className={styles.title}>
            Please complete this form if you have a shipment to price. We are
            happy to answer any questions you may have.
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} lg={2} />

            <Grid item xs={12} lg={8}>
              <Box
                component="form"
                className={styles.form}
                sx={{ background: "none" }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <FormControl className={styles.form__input} required fullWidth>
                  <TextField
                    label="Your Name*"
                    variant="filled"
                    InputLabelProps={{
                      sx: { color: "#1c252e" },
                    }}
                    {...register("name", { required: true })}
                  />
                </FormControl>
                {errors.name && (
                  <Typography
                    component="p"
                    sx={{
                      color: "#F70000",
                      marginBottom: "1rem",
                    }}
                  >
                    This field is required
                  </Typography>
                )}

                <FormControl className={styles.form__input} required fullWidth>
                  <TextField
                    label="Company"
                    variant="filled"
                    InputLabelProps={{
                      sx: { color: "#1c252e" },
                    }}
                    {...register("company")}
                  />
                </FormControl>

                <FormControl
                  className={styles.form__input}
                  required
                  fullWidth
                  sx={{
                    ".MuiFilledInput-root": {
                      background: "none",
                    },
                  }}
                >
                  <TextField
                    label="Address *"
                    variant="filled"
                    InputLabelProps={{
                      sx: { color: "#1c252e" },
                    }}
                    {...register("address", { required: true })}
                  />
                </FormControl>
                {errors.address && (
                  <Typography
                    component="p"
                    sx={{
                      color: "#F70000",
                      marginBottom: "1rem",
                    }}
                  >
                    This field is required
                  </Typography>
                )}

                <Box className={styles.input__group}>
                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                    >
                      <TextField
                        type="email"
                        label="Email Address *"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("email", { required: true })}
                      />
                    </FormControl>
                    {errors.email && (
                      <Typography
                        component="p"
                        sx={{
                          color: "#F70000",
                          marginBottom: "1rem",
                        }}
                      >
                        This field is required
                      </Typography>
                    )}
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                    >
                      <TextField
                        label="Mobile *"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("mobile", { required: true })}
                      />
                    </FormControl>
                    {errors.mobile && (
                      <Typography
                        component="p"
                        sx={{
                          color: "#F70000",
                          marginBottom: "1rem",
                        }}
                      >
                        This field is required
                      </Typography>
                    )}
                  </Box>
                </Box>

                <Box className={styles.input__group}>
                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                    >
                      <TextField
                        label="Town *"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("town", { required: true })}
                      />
                    </FormControl>
                    {errors.town && (
                      <Typography
                        component="p"
                        sx={{
                          color: "#F70000",
                          marginBottom: "1rem",
                        }}
                      >
                        This field is required
                      </Typography>
                    )}
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                    >
                      <TextField
                        label="Postcode *"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("postcode", { required: true })}
                      />
                    </FormControl>
                    {errors.postcode && (
                      <Typography
                        component="p"
                        sx={{
                          color: "#F70000",
                          marginBottom: "1rem",
                        }}
                      >
                        This field is required
                      </Typography>
                    )}
                  </Box>
                </Box>

                <FormControl className={styles.form__input} required fullWidth>
                  <TextField
                    label="Country*"
                    variant="filled"
                    InputLabelProps={{
                      sx: { color: "#1c252e" },
                    }}
                    {...register("country", { required: true })}
                  />
                </FormControl>
                {errors.country && (
                  <Typography
                    component="p"
                    sx={{
                      color: "#F70000",
                      marginBottom: "1rem",
                    }}
                  >
                    This field is required
                  </Typography>
                )}

                <Box className={styles.input__group}>
                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                    >
                      <TextField
                        type="text"
                        label="Collection Address"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("collectionAddress")}
                      />
                    </FormControl>
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                    >
                      <TextField
                        type="text"
                        label="Collection Town *"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("collectionTown", { required: true })}
                      />
                    </FormControl>
                    {errors.collectionTown && (
                      <Typography
                        component="p"
                        sx={{
                          color: "#F70000",
                          marginBottom: "1rem",
                        }}
                      >
                        This field is required
                      </Typography>
                    )}
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                    >
                      <TextField
                        label="Collection Postcode"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("collectionPostcode")}
                      />
                    </FormControl>
                  </Box>
                </Box>

                <Box className={styles.input__group}>
                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                    >
                      <TextField
                        type="text"
                        label="Destination Country *"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("destinationCountry", { required: true })}
                      />
                    </FormControl>
                    {errors.destinationCountry && (
                      <Typography
                        component="p"
                        sx={{
                          color: "#F70000",
                          marginBottom: "1rem",
                        }}
                      >
                        This field is required
                      </Typography>
                    )}
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                    >
                      <TextField
                        type="text"
                        label="Destination Town *"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("destinationTown", { required: true })}
                      />
                    </FormControl>
                    {errors.destinationTown && (
                      <Typography
                        component="p"
                        sx={{
                          color: "#F70000",
                          marginBottom: "1rem",
                        }}
                      >
                        This field is required
                      </Typography>
                    )}
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                    >
                      <TextField
                        label="Destination Postcode"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("destinationPostcode")}
                      />
                    </FormControl>
                  </Box>
                </Box>

                <Box className={styles.input__group}>
                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                    >
                      <TextField
                        type="text"
                        label="Number of Packages *"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("numberOfPackages", { required: true })}
                      />
                    </FormControl>
                    {errors.numberOfPackages && (
                      <Typography
                        component="p"
                        sx={{
                          color: "#F70000",
                          marginBottom: "1rem",
                        }}
                      >
                        This field is required
                      </Typography>
                    )}
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                    >
                      <TextField
                        type="text"
                        label="Gross Total Weight*"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("grossWeight", { required: true })}
                      />
                    </FormControl>
                    {errors.grossWeight && (
                      <Typography
                        component="p"
                        sx={{
                          color: "#F70000",
                          marginBottom: "1rem",
                        }}
                      >
                        This field is required
                      </Typography>
                    )}
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                    }}
                  >
                    <FormControl
                      className={styles.form__input}
                      required
                      fullWidth
                    >
                      <TextField
                        label="Dimensions LxWxH (cm) *"
                        variant="filled"
                        InputLabelProps={{
                          sx: { color: "#1c252e" },
                        }}
                        {...register("dimensionsLxWxH", { required: true })}
                      />
                    </FormControl>

                    {errors.dimensionsLxWxH && (
                      <Typography
                        component="p"
                        sx={{
                          color: "#F70000",
                          marginBottom: "1rem",
                        }}
                      >
                        This field is required
                      </Typography>
                    )}
                  </Box>
                </Box>

                <FormControl fullWidth>
                  <TextareaAutosize
                    className={styles.textarea}
                    minRows={10}
                    placeholder="Commodity details *"
                    {...register("commodityDetails", { required: true })}
                  />
                </FormControl>
                {errors.commodityDetails && (
                  <Typography
                    component="p"
                    sx={{
                      color: "#F70000",
                      margin: "1rem 0",
                    }}
                  >
                    This field is required
                  </Typography>
                )}

                <Box>
                  <FormControl fullWidth>
                    <TextareaAutosize
                      className={styles.textarea}
                      minRows={10}
                      placeholder="Additional Information *"
                      {...register("additionalInformation", { required: true })}
                    />
                  </FormControl>
                  {errors.additionalInformation && (
                    <Typography
                      component="p"
                      sx={{
                        color: "#F70000",
                        margin: "1rem 0",
                      }}
                    >
                      This field is required
                    </Typography>
                  )}
                </Box>

                <Box>
                  <FormControl className={styles.radio__group}>
                    <FormLabel className={styles.label}>
                      Preferred Transport
                    </FormLabel>
                    <RadioGroup
                      row
                      // value={transport}
                      // onChange={handleTransportChange}
                      {...register("transport")}
                    >
                      <FormControlLabel
                        value="air"
                        control={
                          <Radio
                            {...register("transport")}
                            sx={{
                              color: "#fff",
                              "&.Mui-checked": {
                                color: "#fff",
                              },
                            }}
                          />
                        }
                        label="Air"
                      />
                      <FormControlLabel
                        value="sea"
                        control={
                          <Radio
                            {...register("transport")}
                            sx={{
                              color: "#fff",
                              "&.Mui-checked": {
                                color: "#fff",
                              },
                            }}
                          />
                        }
                        label="Sea"
                      />

                      <FormControlLabel
                        value="road"
                        control={
                          <Radio
                            {...register("transport")}
                            sx={{
                              color: "#fff",
                              "&.Mui-checked": {
                                color: "#fff",
                              },
                            }}
                          />
                        }
                        label="Road"
                      />
                      <FormControlLabel
                        value="parcel"
                        control={
                          <Radio
                            {...register("transport")}
                            sx={{
                              color: "#fff",
                              "&.Mui-checked": {
                                color: "#fff",
                              },
                            }}
                          />
                        }
                        label="Parcel"
                      />
                      <FormControlLabel
                        value="lcl"
                        control={
                          <Radio
                            {...register("transport")}
                            sx={{
                              color: "#fff",
                              "&.Mui-checked": {
                                color: "#fff",
                              },
                            }}
                          />
                        }
                        label="LCL"
                      />
                      <FormControlLabel
                        value="fcl"
                        control={
                          <Radio
                            {...register("transport")}
                            sx={{
                              color: "#fff",
                              "&.Mui-checked": {
                                color: "#fff",
                              },
                            }}
                          />
                        }
                        label="FCL"
                      />
                      <FormControlLabel
                        value="ro/ro"
                        control={
                          <Radio
                            {...register("transport")}
                            sx={{
                              color: "#fff",
                              "&.Mui-checked": {
                                color: "#fff",
                              },
                            }}
                          />
                        }
                        label="RO/RO"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box style={{ width: "100%", marginTop: "30px" }}>
                  <ReCAPTCHA
                    // sitekey={process.env.REACT_APP_RE_CAPTCHA_KEY}
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleVarilization}
                  />
                </Box>

                <Button
                  sx={{
                    padding: "0.8rem 1.5rem",
                    fontSize: "16px",
                    marginTop: "50px",
                    display: "inline-block",
                    background: varilization ? "#440e62" : "#fff",
                    color: varilization ? "#fff" : "#000",
                    borderRadius: "10px",
                    fontWeight: "600",

                    "&:hover": {
                      background: "#5e047f",
                      color: "#fff",
                    },
                  }}
                  type="submit"
                  disabled={!varilization}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default QuotationForm
