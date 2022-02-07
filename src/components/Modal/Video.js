import styled from "styled-components";

const VideoWrapper = styled.div`
  text-align: center;

  & video {
    width: 80%;
    border-radius: 5px;
  }

  & p {
    font-size: 1.2rem;
  }
`

const Video = ({ path, caption }) => {
  return (
    <VideoWrapper>
      <video autoplay muted controls>
        <source src={path} type="video/mp4" />
        <source src={path} type="video/ogg" />
        Your browser does not support HTML video.
      </video>
      <p>{caption}</p>
    </VideoWrapper>
  )
}
export default Video;