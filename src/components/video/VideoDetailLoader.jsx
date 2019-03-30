import React from "react";

const VideoDetailLoader = () => {
  return (
    <React.Fragment>
      <div className="ui fluid placeholder">
        <div className="image" />
      </div>
      <div className="ui fluid placeholder">
        <div class="paragraph">
          <div class="line" />
          <div class="line" />
          <div class="line" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoDetailLoader;
/*

<div className="ui placeholder">
        <div className="paragraph">
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
        <div className="paragraph">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
    </div>
*/
