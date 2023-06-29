import { Box, Container } from "@mui/material";
import ReactPlayer from "react-player";
import styles from "./video-player.module.scss";

const VideoPlayer = ({ url }) => {
  return (
    <Box className={styles.player__wrapper}>
      <Container>
        <Box className={styles.video__box}>
          <ReactPlayer url={url} controls />
        </Box>
      </Container>
    </Box>
  );
};

export default VideoPlayer;
