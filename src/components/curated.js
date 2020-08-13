import React from "react"
import { ResponsiveEmbed } from "react-bootstrap"
import Container from "./container"
import "./component-styles/curated.scss"

function EmbeddedField({ videoID, width, height }) {
  return (
    <ResponsiveEmbed
      className="embedded-container"
      style={{
        width: width ? width : "560",
        height: height ? height : "315",
      }}
      aspectRatio="16by9"
    >
      <iframe
        title={videoID}
        width={width ? width : "560"}
        height={height ? height : "315"}
        src={`https://www.youtube.com/embed/${videoID}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </ResponsiveEmbed>
  )
}

/**
 *
 * @param {string} passed
 */
function stripVideoID(passed) {
  return passed.split("https://www.youtube.com/watch?v=")[1]
}

function Curated({ curatedDataCollection }) {
  return (
    <Container type="normal" className="curated-container">
      <h2>Community Curated Videos</h2>
      <div className="content-row">
        {curatedDataCollection.map((youtubeVideo, idx) => (
          <EmbeddedField
            key={`${idx}-${youtubeVideo.recommendedBy}`}
            height={300}
            width={500}
            videoID={stripVideoID(youtubeVideo.source)}
          />
        ))}
      </div>
    </Container>
  )
}

export default Curated
