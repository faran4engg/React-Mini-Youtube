import React from "react";

const VideoDetails = props => {
  const { displayVideo } = props;

  if (!displayVideo) {
    return "Loading...";
  }
  const videoSrcbaseUrl =
    "https://www.youtube.com/embed/" + displayVideo.id.videoId;

  return (
    <React.Fragment>
      <div className="ui embed">
        <iframe title={displayVideo.snippet.title} src={videoSrcbaseUrl} />
      </div>

      <div className="ui segment">
        <h4 className="ui header">{displayVideo.snippet.title}</h4>
        <p>{displayVideo.snippet.description}</p>
      </div>
    </React.Fragment>
  );
};
export default VideoDetails;
