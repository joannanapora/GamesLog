import React from 'react';
import '../index.css'

const VideoItem = ({video , handleVideoSelect}:any) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className='video-item item'>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;