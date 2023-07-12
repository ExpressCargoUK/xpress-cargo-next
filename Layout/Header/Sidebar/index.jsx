import * as React from "react"
import Box from "@mui/material/Box"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import IconButton from "@mui/material/IconButton"

import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

import styles from "./styles.module.scss"
import { useMediaQuery } from "@mui/material"
import { navMenuData } from "../../../data"
import NavRightSocials from "../NavRightSocials"
import Link from "next/link"

const Sidebar = () => {
  const mobile = useMediaQuery("(max-width: 768px)")
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: mobile ? 250 : 450, position: "relative" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box className={styles.__wrapper}>
        {navMenuData.map(({ title, url, submenu }, index) => {
          return (
            <Box key={url}>
              <Link href={url} className={styles._url}>
                {title}
              </Link>

              {submenu &&
                submenu?.map(({ title, url, submenu }, index) => (
                  <Box className={styles.__layer} key={url}>
                    <Link href={url} className={styles._url}>
                      - {title}
                    </Link>
                  </Box>
                ))}
            </Box>
          )
        })}

        <Box
          sx={{
            marginTop: "30px",
          }}
        >
          <NavRightSocials />
        </Box>
      </Box>

      <IconButton
        sx={{
          position: "absolute",
          top: "15px",
          right: "20px",
          zIndex: "9999",
        }}
        onClick={toggleDrawer("right", false)}
      >
        <CloseIcon sx={{ color: "#fff" }} />
      </IconButton>
    </Box>
  )

  return (
    <div>
      <IconButton onClick={toggleDrawer("right", true)}>
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </div>
  )
}

export default Sidebar
