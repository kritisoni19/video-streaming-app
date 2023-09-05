import { useEffect, useState } from "react";
import {YOUTUBE_VIDEOS_API} from "../utils/constants";
import VideoCards from '../components/VideoCards';
import { Link } from "react-router-dom";

function VideoContainer(){

    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        getVideos(); 
    },[])

    const getVideos = async()=>{
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        // console.log(json.items);
        setVideos(json.items);
    }
    return (
      
        <div className="flex flex-wrap">
        {
            videos.map((video)=>{
                return <>
                <div className="mt-4 mr-6 w-[23%]"  key={video.id}>
                    <Link    to={'/watch?v=' + video.id} >
                        <VideoCards info = {video} ></VideoCards>
                    </Link>
                </div>
            
                </>
               
            })
        }
        </div>
       
    )
}

export default VideoContainer;
