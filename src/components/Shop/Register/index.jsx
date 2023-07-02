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
  TextField,
  Typography,
} from "@mui/material"
import { useForm } from "react-hook-form"
import styles from "./styles.module.scss"

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    // console.log(data);
  }

  return (
    <Box className={styles.__wrapper}>
      <Container maxWid="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Typography variant="h2" component="h2" className={styles.title}>
              REGISTER HERE
            </Typography>

            <Box
              component="form"
              className={styles.form}
              sx={{ background: "none" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl className={styles.form__input} required fullWidth>
                <TextField
                  label="First Name*"
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
                  type="text"
                  label="Family Name*"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("familyName", { required: true })}
                />
              </FormControl>
              {errors.familyName && (
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
                  label="Street Name*"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("street", { required: true })}
                />
              </FormControl>
              {errors.street && (
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
                  label="City*"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("city", { required: true })}
                />
              </FormControl>
              {errors.city && (
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

              <FormControl className={styles.form__input} required fullWidth>
                <TextField
                  label="Telephone*"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("telephone", { required: true })}
                />
              </FormControl>
              {errors.telephone && (
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
                  label="Email Address*"
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

              <Button
                sx={{
                  padding: "0.8rem 1.5rem",
                  fontSize: "16px",
                  display: "inline-block",
                  background: "#440e62",
                  color: "#fff",
                  borderRadius: "10px",
                  fontWeight: "600",

                  "&:hover": {
                    background: "#5e047f",
                    color: "#fff",
                  },
                }}
                type="submit"
              >
                REGISTER NOW!
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                paddingTop: "50px",
              }}
            >
              <FormControl>
                <FormLabel className={styles.type_label}>
                  TYPE OF ACCOUNT REQUIRED?*
                </FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="7-days-grouping"
                    control={
                      <Radio sx={{ "&.Mui-checked": { color: "#fff" } }} />
                    }
                    label="7 Days Grouping"
                  />
                  <FormControlLabel
                    value="immediate-shipping"
                    control={
                      <Radio sx={{ "&.Mui-checked": { color: "#fff" } }} />
                    }
                    label="Immediate Shipping"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <Box className={styles.__instructions}>
              <h3>7 days Grouping</h3>
              <p>
                Once we receive your first parcel we will wait for other parcels
                you may have ordered up to 7 days. Then ship them all together.
                This is a cost saving option.
              </p>
            </Box>
            <Box className={styles.__instructions}>
              <h3>7 days Grouping</h3>
              <p>
                Once we receive your first parcel we will wait for other parcels
                you may have ordered up to 7 days. Then ship them all together.
                This is a cost saving option.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Register
