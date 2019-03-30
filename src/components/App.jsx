import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./video/VideoDetail";
import VideoListWrapper from "./video/VideoListWrapper";
import VideoListLoader from "./video/VideoListLoader";

import youtube from "../apis/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  componentDidMount() {
    this.handleSearchBarFormSubmit("stephen grider");
  }
  handleSearchBarFormSubmit = term => {
    setTimeout(async () => {
      const response = await youtube.get("/search", {
        params: {
          q: term
        }
      });
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
    }, 3000);
  };

  handleSelectedVideo = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onSearchBarFormSubmit={this.handleSearchBarFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail displayVideo={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              {!this.state.videos.length ? (
                <VideoListLoader />
              ) : (
                <VideoListWrapper
                  onVideoSelect={this.handleSelectedVideo}
                  videoData={this.state.videos}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
