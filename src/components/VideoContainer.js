import { useEffect, useState } from "react";
import {YOUTUBE_VIDEOS_API} from "../utils/constants";
import VideoCards from '../components/VideoCards';
import { Link } from "react-router-dom";
import Shimmer from '../components/Shimmer';
function VideoContainer(){

    const [videos,setVideos] = useState([]);
    const [showShimmer,setShowShimmer] = useState(false)

    useEffect(()=>{
        getVideos(); 
        window.addEventListener('scroll',handleScroll)

        return () =>window.removeEventListener('scroll', handleScroll)
    },[])

    const handleScroll =()=>{
        if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
            console.log('Fetch More Content');
        }
        // console.log(window.scrollY + window.innerHeight >= document.body.scrollHeight)
    }
    const getVideos = async()=>{
        setShowShimmer(true)
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setShowShimmer(false)
        console.log(json.items);
        setVideos(()=>[...videos,...json.items]);
    }
    return (

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
        { showShimmer && <Shimmer/> }
        </div>
    )
    
}

export default VideoContainer;
