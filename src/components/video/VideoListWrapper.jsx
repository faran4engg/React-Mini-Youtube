import React from "react";
import VideoItem from "./VideoItem";
import VideoListLoader from "./VideoListLoader";

const VideoListWrapper = props => {
  const { videoData, onVideoSelect } = props;

  if (!videoData) return <VideoListLoader />;

  const renderedVideoItems = videoData.map(video => {
    console.log("jhff");
    return (
      <div key={video.etag} className="ui inverted segment">
        <div className="ui inverted relaxed divided list">
          <VideoItem onVideoSelect={onVideoSelect} videoItem={video} />
        </div>
      </div>
    );
  });

  return <div>{renderedVideoItems}</div>;
};

export default VideoListWrapper;

/*
 <div key={video.etag} className="ui inverted segment">
        <div className="ui inverted relaxed divided list">
          <VideoItem onVideoSelect={onVideoSelect} videoItem={video} />
        </div>
      </div> 


*/
