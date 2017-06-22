import React from 'react';
import VideoListItem from './video_list_item';

// In a functional component, props are passed as arguments
// In a class-based component, props are available anywhere as this.props
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={ video.etag } video={ video } />;
  });

  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
};

export default VideoList;
