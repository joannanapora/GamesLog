import React, {useEffect} from 'react';
import SearchBar from './SearchBar';
import youtube from './youtubeApi';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { useState } from 'react';
import '../index.css'
const YouTube = () => {

    
    const [videos, setVideos]= useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null)
    
    const handleSubmit = async (termFromSearchBar:any) => {
         youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        }).then(response => {
            setVideos(response.data.items)
            console.log(response)

        })
        .catch(e => {
            
        })
    };
    
    
    const handleVideoSelect = (video:any) => {
        setSelectedVideo(video)
    }
    
    
        useEffect(()=>{
            handleSubmit('Animal Crossing');
        },[])
 
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={handleSubmit}/>
                <div className='ui grid'>
                    <div className="row">
                        <div className="column">
                            <VideoDetail video={selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default YouTube;