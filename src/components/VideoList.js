import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => (
    <VideoItem onVideoSelect={onVideoSelect} video={video} />
  ));

  return <div>{renderedList}</div>;
};

export default VideoList;
