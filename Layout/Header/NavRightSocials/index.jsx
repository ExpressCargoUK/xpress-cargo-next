import SocialIcon from "../../../common/SocialIcon"
import styles from "./styles.module.scss"

import { FaFacebookF, FaTwitter } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

const NavRightSocials = () => {
  return (
    <div className={styles.__wrapper}>
      <a
        href="https://www.facebook.com/expresscargo.ecul/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon>
          <FaFacebookF
            style={{
              fill: "#0e1e59",
            }}
          />
        </SocialIcon>
      </a>
      <a
        href="https://twitter.com/expresscargouk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon>
          <FaTwitter
            style={{
              fill: "#0e1e59",
            }}
          />
        </SocialIcon>
      </a>
      <a
        href="https://instagram.com/expresscargouk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon>
          <FiInstagram
            style={{
              color: "#0e1e59",
            }}
          />
        </SocialIcon>
      </a>
    </div>
  )
}

export default NavRightSocials
