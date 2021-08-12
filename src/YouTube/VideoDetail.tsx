import React from "react";

const VideoDetail = ({ video }:any) => {
  if (!video) {
    return <div className='pick'  >
    </div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
 
  return (
    <div className='container-video' >
        <iframe className='preview' src={videoSrc} allowFullScreen title="Video player" />
    </div>
  );
};

export default VideoDetail;