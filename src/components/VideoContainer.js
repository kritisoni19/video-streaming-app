import { useEffect, useState } from "react";
import {YOUTUBE_VIDEOS_API} from "../utils/constants";
import VideoCards from '../components/VideoCards';
import { Link } from "react-router-dom";
import Shimmer from '../components/Shimmer';
function VideoContainer(){

    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        getVideos(); 
    },[])

    const getVideos = async()=>{
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
         console.log(json.items);
        setVideos(json.items);
    }
    return videos.length === 0 ? (<Shimmer />) : (

        // return <Shimmer/>
      
        <div className="grid grid-cols-[repeat(3,3fr)] gap-[20px]">
        {
            videos.map((video)=>{
                return (
                <div className="mt-4"  key ={video.id}>
                    <Link    to={'/watch?v=' + video.id} >
                        <VideoCards info = {video} ></VideoCards>
                    </Link>
                </div>
            
                )
            })
        }
        </div>
       
    )
}

export default VideoContainer;
