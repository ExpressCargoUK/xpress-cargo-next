import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./AddBooking.module.scss";
import FCSuccess from "../../common/FCSuccess";
import {
  Container,
  FormControl,
  TextField,
  Typography,
  Grid,
  Stack,
  Box,
  FormLabel,
  FormControlLabel,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import FCDatePicker from "../../common/FCDatePicker";
import dayjs from "dayjs";
import axios from "axios";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

const AddBooking = () => {
  const [today, setDay] = useState(null);
  const [requestedBooking, setRequestedBooking] = useState(null);
  const [shippingMethod, setShippingMethod] = React.useState({
    parcel: true,
    road: false,
    airCargo: false,
    seaCargo: true,
    lcl: false,
    fcl: false,
    ro: false,
  });
  const [additionalServices, setAdditionalServices] = React.useState({
    warehousing: true,
    collection: false,
    packaging: false,
    insurance: true,
  });
  const [reasonForExport, setReasonForExport] = useState("");
  // const [packageType, setPackageType] = useState("box");
  const [packageTypeNumber, setPackageTypeNumber] = useState(1);

  const handleReasonForExportChange = (event) => {
    setReasonForExport(event.target.value);
  };

  // const handlePackageTypeChange = (event) => {
  //   setPackageType(event.target.value);
  // };

  const handlePackageTypeNumberChange = (event) => {
    setPackageTypeNumber(event.target.value);
  };

  const { parcel, road, airCargo, seaCargo, lcl, fcl, ro } = shippingMethod;
  const { warehousing, collection, packaging, insurance } = additionalServices;

  const handleShippingMethodChange = (event) => {
    setShippingMethod({
      ...shippingMethod,
      [event.target.name]: event.target.checked,
    });
  };

  const handleAdditionalServicesChange = (event) => {
    setAdditionalServices({
      ...additionalServices,
      [event.target.name]: event.target.checked,
    });
  };

  const [varilization, setVarilization] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {
      pkgType: [
        {
          packageType: "box",
          pkgWeight: "",
          pkgLength: "",
          pkgWidth: "",
          pkgHeight: "",
        },
      ],
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "pkgType",
  });

  const onSubmit = (data) => {
    const sheetData = {
      "Company Name": data.companyName,
      "Senders Name": data.sendersName,
      "Shippers Name": data.shippersName,
      City: data.city,
      "Post Code": data.postCode,
      Country: data.country,
      "Mobile number": data.mobileNumber,
      "Email Address": data.emailAddress,
      VAT: data.vat,
      "EORI Number": data.eoriNumber,
      "shipping methods": shippingMethod,
      Today: dayjs(today).format("DD/MM/YYYY"),
      "Requested Booking": dayjs(requestedBooking).format("DD/MM/YYYY"),
      "Quote Ref Available": data.quoteRef,

      "Consignee - Company Name": data.consignee_companyName,
      "Consignee - Receivers Name": data.consignee_receiversName,
      "Consignee - Receivers Address": data.consignee_receiversAddress,
      "Consignee - City": data.consignee_city,
      "Consignee - Post Code": data.consignee_postCode,
      "Consignee - Country": data.consignee_country,
      "Consignee - Mobile Number": data.consignee_mobileNumber,
      "Consignee - Email": data.consignee_email,
      "Reason for Export": reasonForExport,
      "Additional services": additionalServices,
      // "Package type": packageType,
      "Package type list": data.pkgType,
      "Description OfItem": data.descriptionOfItem,
    };

    const formData = {
      ...data,
      today: dayjs(today).format("DD/MM/YYYY"),
      requestedBooking: dayjs(requestedBooking).format("DD/MM/YYYY"),
      reasonForExport,
      shippingMethod,
      // packageType,
      pkgType: JSON.stringify(data.pkgType),
      additionalServices: JSON.stringify(additionalServices),
    };

    if (varilization) {
      emailjs
        .send(
          "service_orhth3q",
          "template_3a5vver",
          formData,
          "ydXRP5u6kT9XoAg3H"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    axios
      .post(
        "https://sheet.best/api/sheets/345bfd8b-dbac-42fb-9a59-ab0fc78bb4e3",
        sheetData
      )
      .then((res) => {
        if (res.status === 200) {
          console.log("Data has been sent to the server");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    reset();
    setVarilization(false);

    setTimeout(() => {
      setSuccess(false);
    }, 6000);
  };

  const handleVarilization = (value) => {
    if (value) {
      setVarilization(true);
    }
  };
  return (
    <div className={styles._wrapper}>
      {success && (
        <FCSuccess text="Thank you for submitting your information" />
      )}
      <Container>
        <div className={styles._header}>
          <Typography variant="h6" color="inherit">
            Add Booking Form
          </Typography>
        </div>
        <Grid container justifyContent="center">
          <Grid item md={10} sm={12} xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._heading}
              >
                Shipper Details
              </Typography>
              <FormControl className={styles.form__input} required fullWidth>
                <TextField
                  label="Company name*"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("companyName", { required: true })}
                />
              </FormControl>
              {errors.companyName && (
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
                  label="Sender's name*"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("sendersName", { required: true })}
                />
              </FormControl>
              {errors.sendersName && (
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
                  label="Shipper's Address*"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("shippersName", { required: true })}
                />
              </FormControl>
              {errors.shippersName && (
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
                  label="Post Code*"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("postCode", { required: true })}
                />
              </FormControl>
              {errors.shippersName && (
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
                  label="Mobile Number*"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("mobileNumber", { required: true })}
                />
              </FormControl>
              {errors.mobileNumber && (
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
                  {...register("emailAddress", { required: true })}
                />
              </FormControl>
              {errors.emailAddress && (
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
                  label="VAT"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("vat")}
                />
              </FormControl>
              <FormControl className={styles.form__input} required fullWidth>
                <TextField
                  label="EORI Number"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("eoriNumber")}
                />
              </FormControl>
              <Stack
                spacing={1}
                alignItems="center"
                direction={{ md: "row", sm: "row", xs: "column" }}
              >
                <FCDatePicker
                  name="Today's Date"
                  value={today}
                  setValue={setDay}
                />
                <FCDatePicker
                  name="Requested Booking Date"
                  value={requestedBooking}
                  setValue={setRequestedBooking}
                />
              </Stack>
              <Box sx={{ mt: 2 }}>
                <FormControl className={styles.form__input} required fullWidth>
                  <TextField
                    label="QUOTE Ref If Available"
                    variant="filled"
                    InputLabelProps={{
                      sx: { color: "#1c252e" },
                    }}
                    {...register("quoteRef")}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl
                  component="fieldset"
                  variant="standard"
                  className={styles.radio__group}
                >
                  <FormLabel component="legend" className={styles.label}>
                    Shipping Method
                  </FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={parcel}
                          onChange={handleShippingMethodChange}
                          name="parcel"
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
                      control={
                        <Checkbox
                          checked={road}
                          onChange={handleShippingMethodChange}
                          name="road"
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
                      control={
                        <Checkbox
                          checked={airCargo}
                          onChange={handleShippingMethodChange}
                          name="airCargo"
                          sx={{
                            color: "#fff",
                            "&.Mui-checked": {
                              color: "#fff",
                            },
                          }}
                        />
                      }
                      label="Air Cargo"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={seaCargo}
                          onChange={handleShippingMethodChange}
                          name="seaCargo"
                          sx={{
                            color: "#fff",
                            "&.Mui-checked": {
                              color: "#fff",
                            },
                          }}
                        />
                      }
                      label="Sea Cargo"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={lcl}
                          onChange={handleShippingMethodChange}
                          name="lcl"
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
                      control={
                        <Checkbox
                          checked={fcl}
                          onChange={handleShippingMethodChange}
                          name="fcl"
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
                      control={
                        <Checkbox
                          checked={ro}
                          onChange={handleShippingMethodChange}
                          name="ro"
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
                  </FormGroup>
                </FormControl>
              </Box>
              {/* Consignee Details */}
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._heading}
                sx={{ marginTop: "2rem" }}
              >
                Consignee Details
              </Typography>
              <FormControl className={styles.form__input} required fullWidth>
                <TextField
                  label="Company name"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("consignee_companyName")}
                />
              </FormControl>
              <FormControl className={styles.form__input} required fullWidth>
                <TextField
                  label="Receivers Name"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("consignee_receiversName", { required: true })}
                />
              </FormControl>
              {errors.consignee_receiversName && (
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
                  label="Receiver's Address*"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("consignee_receiversAddress", {
                    required: true,
                  })}
                />
              </FormControl>
              {errors.consignee_receiversAddress && (
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
                  {...register("consignee_city", {
                    required: true,
                  })}
                />
              </FormControl>
              {errors.consignee_city && (
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
                  label="Post Code"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("consignee_postCode")}
                />
              </FormControl>
              <FormControl className={styles.form__input} required fullWidth>
                <TextField
                  label="Country*"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("consignee_country", {
                    required: true,
                  })}
                />
              </FormControl>
              {errors.consignee_country && (
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
                  label="Mobile Number*"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("consignee_mobileNumber", {
                    required: true,
                  })}
                />
              </FormControl>
              {errors.consignee_mobileNumber && (
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
                  label="Email*"
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("consignee_email", {
                    required: true,
                  })}
                />
              </FormControl>
              {errors.consignee_email && (
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
              {/* Reason for Export: */}
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._heading}
                sx={{ marginTop: "2rem" }}
              >
                Reason for Export
              </Typography>
              <FormControl
                sx={{
                  minWidth: "100%",
                  background: "#fff",
                  color: "black",
                }}
                variant="filled"
              >
                <InputLabel id="demo-select-small">
                  Reason for Export
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={reasonForExport}
                  onChange={handleReasonForExportChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="personal">PERSONAL</MenuItem>
                  <MenuItem value="commercial">COMMERCIAL</MenuItem>
                  <MenuItem value="charity">CHARITY</MenuItem>
                  <MenuItem value="gift">GIFT</MenuItem>
                </Select>
              </FormControl>

              <Box>
                <FormControl className={styles.radio__group}>
                  <FormLabel className={styles.label}>
                    Additional Services
                  </FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={warehousing}
                          onChange={handleAdditionalServicesChange}
                          name="warehousing"
                          sx={{
                            color: "#fff",
                            "&.Mui-checked": {
                              color: "#fff",
                            },
                          }}
                        />
                      }
                      label="Warehousing"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={collection}
                          onChange={handleAdditionalServicesChange}
                          name="collection"
                          sx={{
                            color: "#fff",
                            "&.Mui-checked": {
                              color: "#fff",
                            },
                          }}
                        />
                      }
                      label="Collection"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={packaging}
                          onChange={handleAdditionalServicesChange}
                          name="packaging"
                          sx={{
                            color: "#fff",
                            "&.Mui-checked": {
                              color: "#fff",
                            },
                          }}
                        />
                      }
                      label="Packaging"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={insurance}
                          onChange={handleAdditionalServicesChange}
                          name="insurance"
                          sx={{
                            color: "#fff",
                            "&.Mui-checked": {
                              color: "#fff",
                            },
                          }}
                        />
                      }
                      label="Insurance"
                    />
                  </FormGroup>
                </FormControl>
              </Box>
              {/*Package type  */}
              <Typography
                variant="subtitle1"
                color="inherit"
                className={styles._heading}
                sx={{ marginTop: "2rem" }}
              >
                Package type
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <FormControl
                  sx={{
                    minWidth: "100%",
                    background: "#fff",
                    color: "black",
                  }}
                  variant="filled"
                >
                  <InputLabel id="demo-select-small">Number</InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={packageTypeNumber}
                    onChange={handlePackageTypeNumberChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                  </Select>
                </FormControl>
                {/* <FormControl
                  sx={{
                    minWidth: "79%",
                    background: "#fff",
                    color: "black",
                  }}
                  variant="filled"
                >
                  <InputLabel id="demo-select-small">Package type</InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={packageType}
                    onChange={handlePackageTypeChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="box">BOX</MenuItem>
                    <MenuItem value="suit-case">SUIT CASE</MenuItem>
                    <MenuItem value="pallet">PALLET</MenuItem>
                    <MenuItem value="other">OTHER</MenuItem>
                  </Select>
                </FormControl> */}
              </Stack>

              <Box>
                {Array.from({ length: packageTypeNumber }, () => "").map(
                  (item, index) => {
                    return (
                      <Stack direction="row" spacing={1} key={item.id}>
                        <Box
                          sx={{
                            minWidth: "20%",
                            // background: "#fff",
                            // color: "black",
                          }}
                        >
                          <FormControl
                            sx={{
                              minWidth: "100%",
                              background: "#fff",
                              color: "black",
                            }}
                            variant="filled"
                          >
                            <InputLabel id="demo-select-small">
                              Package type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-required-label"
                              id="demo-simple-select-required"
                              // value={packageType}
                              // onChange={handlePackageTypeChange}
                              {...register(`pkgType.${index}.packageType`)}
                            >
                              <MenuItem value="box">BOX</MenuItem>
                              <MenuItem value="suit-case">SUIT CASE</MenuItem>
                              <MenuItem value="pallet">PALLET</MenuItem>
                              <MenuItem value="other">OTHER</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                        <FormControl
                          className={styles.form__input}
                          required
                          fullWidth
                        >
                          <TextField
                            type="number"
                            label="Weight"
                            variant="filled"
                            InputLabelProps={{
                              sx: { color: "#1c252e" },
                            }}
                            {...register(`pkgType.${index}.pkgWeight`)}
                          />
                        </FormControl>
                        <FormControl
                          className={styles.form__input}
                          required
                          fullWidth
                        >
                          <TextField
                            type="number"
                            label="Length"
                            variant="filled"
                            InputLabelProps={{
                              sx: { color: "#1c252e" },
                            }}
                            {...register(`pkgType.${index}.pkgLength`)}
                          />
                        </FormControl>
                        <FormControl
                          className={styles.form__input}
                          required
                          fullWidth
                        >
                          <TextField
                            type="number"
                            label="Width"
                            variant="filled"
                            InputLabelProps={{
                              sx: { color: "#1c252e" },
                            }}
                            {...register(`pkgType.${index}.pkgWidth`)}
                          />
                        </FormControl>
                        <FormControl
                          className={styles.form__input}
                          required
                          fullWidth
                        >
                          <TextField
                            type="number"
                            label="Height"
                            variant="filled"
                            InputLabelProps={{
                              sx: { color: "#1c252e" },
                            }}
                            {...register(`pkgType.${index}.pkgHeight`)}
                          />
                        </FormControl>
                      </Stack>
                    );
                  }
                )}
              </Box>

              <FormControl className={styles.form__input} required fullWidth>
                <TextField
                  label="Description of Item"
                  rows={4}
                  multiline
                  variant="filled"
                  InputLabelProps={{
                    sx: { color: "#1c252e" },
                  }}
                  {...register("descriptionOfItem")}
                />
              </FormControl>

              <Box style={{ width: "100%", marginTop: "30px" }}>
                <ReCAPTCHA
                  // sitekey={process.env.REACT_APP_RE_CAPTCHA_KEY}
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={handleVarilization}
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: "0.8rem 1.5rem",
                  fontSize: "16px",
                  marginTop: "50px",
                  display: "inline-block",
                  background: varilization ? "#fff" : "#fff",
                  color: varilization ? "#000" : "#000",
                  borderRadius: "10px",
                  fontWeight: "600",

                  "&:hover": {
                    background: "#ddd",
                    color: "#fff",
                  },
                }}
                type="submit"
                // disabled={!varilization}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AddBooking;
