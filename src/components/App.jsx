import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./video/VideoDetail";
import VideoListWrapper from "./video/VideoListWrapper";

import youtube from "../apis/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  handleSearchBarFormSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  handleSelectedVideo = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onSearchBarFormSubmit={this.handleSearchBarFormSubmit} />
        {this.state.videos.length} videos from server
        <div className="row">
          <div className="eleven wide columns">
            <VideoDetail displayVideo={this.state.selectedVideo} />
            <br />
          </div>
          <div className="five wide column">
            <VideoListWrapper
              onVideoSelect={this.handleSelectedVideo}
              videoData={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
