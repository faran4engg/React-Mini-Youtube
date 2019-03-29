import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./video/VideoDetail";
import VideoListWrapper from "./video/VideoListWrapper";

import youtube from "../apis/youtube";

class App extends React.Component {
  state = {
    videos: []
  };
  handleSearchBarFormSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    console.log(response);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onSearchBarFormSubmit={this.handleSearchBarFormSubmit} />
        {this.state.videos.length} videos from server
        <div className="row">
          <div className="eleven wide columns">
            <VideoDetail />
          </div>
          <div className="five wide column">
            <VideoListWrapper />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
