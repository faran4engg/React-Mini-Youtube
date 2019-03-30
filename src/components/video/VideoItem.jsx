import "./VideoItem.css";
import React from "react";

const VideoItem = props => {
  const { videoItem, onVideoSelect } = props;
  return (
    <div className="video-item item" onClick={() => onVideoSelect(videoItem)}>
      <img
        className="ui image"
        src={videoItem.snippet.thumbnails.medium.url}
        alt={videoItem.snippet.title}
      />
      <div className="content">
        <div className="header">{videoItem.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
