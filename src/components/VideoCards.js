import React from "react";

const  VideoCards = ({ info })=>{
  
    // console.log(info)
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails,publishedAt} = snippet;
    
    // const {viewCount} = info.statistics;
 
    return (
        <>
            <div className="mt-4 mr-6">
                <div className="w-72">
                <img src={thumbnails.high.url} alt='thumbnails' className="rounded-lg h-60"/>
                <div>
                    <h4 className="font-semibold text-black">{channelTitle}</h4>
                    <h6 className="font-medium">{title}</h6>
                </div>
                </div>
            </div>
        </>
    )
}

export default VideoCards;