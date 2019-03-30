import React from "react";
import VideoItem from "./VideoItem";

// class VideoListWrapper extends React.Component {
//   state = {};
//   render() {

//     return "VideoListWrapper";
//   }
// }

const VideoListWrapper = props => {
  const { videoData, onVideoSelect } = props;
  const renderedVideoItems = videoData.map(video => {
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


*/
