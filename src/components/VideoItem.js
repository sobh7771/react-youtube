import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item" onClick={onVideoSelect.bind(this, video)}>
      <div>
        <img src={video.snippet.thumbnails.high.url} alt="" />
      </div>
      <div>{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
