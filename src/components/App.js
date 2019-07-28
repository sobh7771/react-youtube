import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = { videos: [], selectedVideo: null, clearVideo: false };

  onSubmit = async term => {
    const KEY = 'AIzaSyB6ebefeg2c5L7iT9DwFr2NjHLv2jRawUo';

    this.setState({ clearVideo: true });
    // Do get request to youtube api
    // TODO: move axios config into apis/youtube file
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: 'snippet',
          maxResult: 5,
          key: KEY,
          q: term,
          type: 'video',
        },
      }
    );

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    // Display the current video at the top
    const videos = [...this.state.videos].filter(
      vid => vid.id.videoId !== video.id.videoId
    );

    console.log(video);

    this.setState({
      selectedVideo: video,
      videos: [video, ...videos],
      clearVideo: false,
    });

    // Scroll to top
    window.scrollTo(0, 0);
  };

  render() {
    let videoDetail = <VideoDetail video={this.state.selectedVideo} />;

    if (this.state.clearVideo) {
      videoDetail = null;
    }
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
        <div className="columns">
          {videoDetail}
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
